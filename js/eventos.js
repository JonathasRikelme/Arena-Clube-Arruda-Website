/* =====================================================
   EVENTOS.JS
   Filtros, expansão de cards e vídeos da seção de Eventos.

   O estado de expansão fica em visibleCount. Assim, resize,
   F11 e fullscreen nativo de vídeo não fazem os cards sumirem.
   ===================================================== */
(function () {
  'use strict';

  var eventsGrid = document.getElementById('eventsGrid');
  var filterBar = document.getElementById('eventsFilters');
  var moreButton = document.getElementById('eventsMoreBtn');
  var emptyState = document.getElementById('eventsEmpty');

  if (!eventsGrid || !filterBar || !moreButton) return;

  var cards = Array.prototype.slice.call(eventsGrid.querySelectorAll('.event-card'));
  var filters = Array.prototype.slice.call(filterBar.querySelectorAll('.events__filter'));
  var currentFilter = 'todos';
  var visibleCount = 0;
  var isAnimatingFilter = false;
  var isAnimatingCollapse = false;

  var INITIAL_DESKTOP = 6;
  var INCREMENT_DESKTOP = 3;
  var INITIAL_MOBILE = 3;
  var INCREMENT_MOBILE = 3;

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function getIsMobile() {
    return window.matchMedia && window.matchMedia('(max-width: 640px)').matches;
  }

  function getInitialLimit() {
    return getIsMobile() ? INITIAL_MOBILE : INITIAL_DESKTOP;
  }

  function getIncrement() {
    return getIsMobile() ? INCREMENT_MOBILE : INCREMENT_DESKTOP;
  }

  function getFilteredCards() {
    return cards.filter(function (card) {
      return currentFilter === 'todos' || card.dataset.category === currentFilter;
    });
  }

  function setCardVisibility(card, visible, revealAnimation) {
    if (visible) {
      card.hidden = false;
      card.classList.remove('is-event-hidden');

      if (revealAnimation) {
        card.classList.remove('is-event-revealing');
        void card.offsetWidth;
        card.classList.add('is-event-revealing');
      }
    } else {
      card.hidden = true;
      card.classList.remove('is-event-revealing');
      card.classList.add('is-event-hidden');
    }
  }

  function renderCards(options) {
    var animateReveal = options && options.animateReveal;
    var filtered = getFilteredCards();
    var minimumVisible = getInitialLimit();
    var limit = Math.min(Math.max(visibleCount, minimumVisible), filtered.length || minimumVisible);
    var shown = 0;

    cards.forEach(function (card) {
      var matches = filtered.indexOf(card) !== -1;
      var visible = matches && shown < limit;

      if (visible) shown += 1;
      setCardVisibility(card, visible, Boolean(animateReveal && visible));
    });

    if (filtered.length) {
      visibleCount = Math.min(limit, filtered.length);
    }

    emptyState.hidden = filtered.length !== 0;
    updateMoreButton(filtered.length, shown);
  }

  function updateMoreButton(total, shown) {
    var label = moreButton.querySelector('.events__more-label');
    var icon = moreButton.querySelector('.events__more-icon');
    var initialLimit = getInitialLimit();
    var shouldShow = total > initialLimit;
    var atEnd = total > 0 && shown >= total;
    var expanded = visibleCount > initialLimit;

    moreButton.hidden = !shouldShow;
    moreButton.setAttribute('aria-expanded', String(expanded));
    moreButton.classList.toggle('is-expanded', expanded || atEnd);

    if (label) label.textContent = atEnd ? 'Mostrar menos' : 'Ver mais eventos';
    if (icon) icon.setAttribute('data-state', atEnd ? 'up' : 'down');
  }

  function updateActiveFilter(button) {
    filters.forEach(function (filter) {
      var active = filter === button;
      filter.classList.toggle('is-active', active);
      filter.setAttribute('aria-pressed', String(active));
    });

    if (button && button.scrollIntoView && getIsMobile()) {
      button.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }

  function renderFilter(nextFilter) {
    if (isAnimatingFilter || nextFilter === currentFilter) return;

    isAnimatingFilter = true;
    currentFilter = nextFilter;
    visibleCount = getInitialLimit();

    var shouldAnimate = !prefersReducedMotion();
    if (shouldAnimate) eventsGrid.classList.add('is-filter-switching');

    window.setTimeout(function () {
      renderCards({ animateReveal: true });

      if (shouldAnimate) {
        requestAnimationFrame(function () {
          eventsGrid.classList.remove('is-filter-switching');
        });
      }

      window.setTimeout(function () {
        isAnimatingFilter = false;
      }, shouldAnimate ? 260 : 0);
    }, shouldAnimate ? 160 : 0);
  }

  filters.forEach(function (button) {
    button.addEventListener('click', function () {
      updateActiveFilter(button);
      renderFilter(button.dataset.filter);
    });
  });

  moreButton.addEventListener('click', function () {
    if (isAnimatingCollapse) return;

    var filtered = getFilteredCards();
    if (!filtered.length) return;

    var initialLimit = getInitialLimit();
    var atEnd = visibleCount >= filtered.length;

    if (atEnd) {
      var extraCards = filtered.slice(initialLimit);
      var buttonTop = moreButton.getBoundingClientRect().top;
      var expandedHeight = eventsGrid.getBoundingClientRect().height;
      var previousHidden = extraCards.map(function (card) { return card.hidden; });

      extraCards.forEach(function (card) { card.hidden = true; });
      var collapsedHeight = eventsGrid.getBoundingClientRect().height;
      extraCards.forEach(function (card, index) { card.hidden = previousHidden[index]; });

      visibleCount = Math.min(initialLimit, filtered.length);
      updateMoreButton(filtered.length, visibleCount);

      if (prefersReducedMotion() || typeof eventsGrid.animate !== 'function') {
        renderCards({ animateReveal: false });
        requestAnimationFrame(function () {
          var buttonShift = moreButton.getBoundingClientRect().top - buttonTop;
          if (Math.abs(buttonShift) > 1) {
            window.scrollTo({
              top: Math.max(0, window.scrollY + buttonShift),
              behavior: prefersReducedMotion() ? 'auto' : 'smooth'
            });
          }
        });
        return;
      }

      isAnimatingCollapse = true;
      moreButton.disabled = true;

      var previousHeight = eventsGrid.style.height;
      var previousOverflow = eventsGrid.style.overflow;
      eventsGrid.style.height = expandedHeight + 'px';
      eventsGrid.style.overflow = 'hidden';
      void eventsGrid.offsetHeight;

      var collapseAnimation = eventsGrid.animate([
        { height: expandedHeight + 'px' },
        { height: collapsedHeight + 'px' }
      ], {
        duration: 360,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
      });

      function keepButtonInPlace() {
        if (collapseAnimation.playState !== 'running') return;

        var buttonShift = moreButton.getBoundingClientRect().top - buttonTop;
        if (Math.abs(buttonShift) > 0.5) {
          var root = document.documentElement;
          var previousScrollBehavior = root.style.scrollBehavior;
          root.style.scrollBehavior = 'auto';
          window.scrollTo(0, Math.max(0, window.scrollY + buttonShift));
          root.style.scrollBehavior = previousScrollBehavior;
        }

        requestAnimationFrame(keepButtonInPlace);
      }

      requestAnimationFrame(keepButtonInPlace);

      collapseAnimation.onfinish = function () {
        renderCards({ animateReveal: false });
        eventsGrid.style.height = previousHeight;
        eventsGrid.style.overflow = previousOverflow;
        collapseAnimation.cancel();
        moreButton.disabled = false;
        isAnimatingCollapse = false;
      };
      return;
    }

    var before = Math.min(visibleCount, filtered.length);
    visibleCount = Math.min(before + getIncrement(), filtered.length);

    filtered.forEach(function (card, index) {
      if (index < visibleCount) {
        setCardVisibility(card, true, index >= before && !prefersReducedMotion());
      }
    });

    updateMoreButton(filtered.length, visibleCount);
  });

  eventsGrid.addEventListener('click', function (event) {
    var mediaBox = event.target.closest('.event-card--video .event-card__media');
    if (!mediaBox || mediaBox.querySelector('video')) return;

    var videoSrc = mediaBox.dataset.video;
    if (!videoSrc) return;

    eventsGrid.querySelectorAll('.event-card__media video').forEach(function (video) {
      video.pause();
    });

    var video = document.createElement('video');
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = 'metadata';

    var sourceMp4 = document.createElement('source');
    sourceMp4.src = videoSrc;
    sourceMp4.type = 'video/mp4';
    video.appendChild(sourceMp4);

    mediaBox.innerHTML = '';
    mediaBox.appendChild(video);
    mediaBox.setAttribute('role', 'group');
    mediaBox.removeAttribute('tabindex');
    mediaBox.removeAttribute('aria-label');

    var playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(function () {});
    }
  });

  eventsGrid.addEventListener('keydown', function (event) {
    var mediaBox = event.target.closest('.event-card--video .event-card__media[role="button"]');
    if (!mediaBox || (event.key !== 'Enter' && event.key !== ' ')) return;
    event.preventDefault();
    mediaBox.click();
  });

  // Resize, F11 e fullscreen não alteram visibleCount.
  function syncAfterViewportChange() {
    window.requestAnimationFrame(function () {
      renderCards({ animateReveal: false });
    });
  }

  var resizeTimer = null;
  window.addEventListener('resize', function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(syncAfterViewportChange, 120);
  });

  document.addEventListener('fullscreenchange', syncAfterViewportChange);

  if (window.visualViewport) {
    var viewportTimer = null;
    window.visualViewport.addEventListener('resize', function () {
      window.clearTimeout(viewportTimer);
      viewportTimer = window.setTimeout(syncAfterViewportChange, 120);
    });
  }

  var defaultFilter = filterBar.querySelector('.events__filter.is-active');
  if (defaultFilter) currentFilter = defaultFilter.dataset.filter || 'todos';

  visibleCount = getInitialLimit();
  cards.forEach(function (card) {
    card.hidden = true;
    card.classList.add('is-event-hidden');
  });

  renderCards({ animateReveal: false });
})();
