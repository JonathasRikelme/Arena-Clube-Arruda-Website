/* =====================================================
   PODIUM.JS
   Alternância entre pódio masculino e feminino.
   ===================================================== */
(function () {
  'use strict';

  var filterBar = document.getElementById('podiumFilters');
  var grid = document.getElementById('podiumGrid');
  if (!filterBar || !grid) return;

  var filters = Array.prototype.slice.call(filterBar.querySelectorAll('.podium__filter'));
  var cards = Array.prototype.slice.call(grid.querySelectorAll('.podium-card'));
  var currentCategory = 'masculino';
  var switching = false;

  function reducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function updateFilterState(activeFilter) {
    filters.forEach(function (filter) {
      var active = filter === activeFilter;
      filter.classList.toggle('is-active', active);
      filter.setAttribute('aria-selected', String(active));
    });
  }

  function renderCards(category, animate) {
    grid.classList.toggle('is-feminino', category === 'feminino');

    cards.forEach(function (card) {
      var show = card.dataset.podiumCategory === category;
      card.hidden = !show;

      if (show && animate && !reducedMotion()) {
        card.classList.remove('is-podium-entering');
        void card.offsetWidth;
        card.classList.add('is-podium-entering');
      }
    });
  }

  filters.forEach(function (filter) {
    filter.addEventListener('click', function () {
      var nextCategory = filter.dataset.podiumCategory;
      if (!nextCategory || nextCategory === currentCategory || switching) return;

      switching = true;
      currentCategory = nextCategory;
      updateFilterState(filter);

      var animate = !reducedMotion();
      if (animate) grid.classList.add('is-podium-switching');

      window.setTimeout(function () {
        renderCards(nextCategory, animate);

        window.requestAnimationFrame(function () {
          grid.classList.remove('is-podium-switching');
        });

        window.setTimeout(function () {
          switching = false;
        }, animate ? 260 : 0);
      }, animate ? 150 : 0);
    });
  });

  updateFilterState(filterBar.querySelector('.podium__filter.is-active') || filters[0]);
  renderCards(currentCategory, false);
})();
