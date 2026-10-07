/* Carrossel de depoimentos, navegação, autoplay e gestos. */
document.addEventListener('DOMContentLoaded', function () {
  /* ---------- Carrossel infinito de depoimentos ---------- */
  var feedbackTrack = document.getElementById('FeedBackTrack');
  var feedbackRail = feedbackTrack ? feedbackTrack.querySelector('.FeedBack__rail') : null;
  var feedbackPrevBtn = document.querySelector('.FeedBack__arrow--prev');
  var feedbackNextBtn = document.querySelector('.FeedBack__arrow--next');
  var feedbackDots = Array.from(document.querySelectorAll('.FeedBack__dot'));

  if (feedbackTrack && feedbackRail) {
    var feedbackCards = Array.from(feedbackRail.querySelectorAll('.testimonial-card'));
    var feedbackIndex = 0;
    var feedbackVisibleCards = 3;
    var feedbackTimer = null;
    var feedbackIsDragging = false;
    var feedbackDragStartX = 0;
    var feedbackDragCurrentX = 0;
    var feedbackDragStartTransform = 0;
    var feedbackDragMoved = false;
    var feedbackTransitionDuration = 550;

    /* ---------- Define quantos depoimentos aparecem por vez ---------- */
    function getFeedbackVisibleCards() {
      if (window.innerWidth <= 640) return 1;
      if (window.innerWidth <= 1024) return 2;
      if (window.innerWidth >= 2560) return 4;
      return 3;
    }

    /* ---------- Atualiza a bolinha correspondente ao depoimento atual ---------- */
    function updateFeedbackDots() {
      var totalCards = feedbackCards.length;
      if (!totalCards || !feedbackDots.length) return;

      var logicalIndex = ((feedbackIndex - feedbackVisibleCards) % totalCards + totalCards) % totalCards;

      feedbackDots.forEach(function (dot, index) {
        var isActive = index === logicalIndex;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
    }

    /* ---------- Atualiza o tamanho dos cards conforme a tela ---------- */
    function updateFeedbackCardSize() {
      feedbackVisibleCards = getFeedbackVisibleCards();
      feedbackTrack.style.setProperty('--feedback-track-width', feedbackTrack.clientWidth + 'px');
    }

    /* ---------- Cria as cópias necessárias para o loop infinito ---------- */
    function buildFeedbackLoop() {
      var existingClones = feedbackRail.querySelectorAll('.feedback-card-clone');
      existingClones.forEach(function (clone) {
        clone.remove();
      });

      feedbackCards = Array.from(feedbackRail.querySelectorAll('.testimonial-card:not(.feedback-card-clone)'));
      var totalCards = feedbackCards.length;

      if (totalCards <= feedbackVisibleCards) {
        feedbackIndex = 0;
        feedbackRail.style.transition = 'none';
        feedbackRail.style.transform = 'translate3d(0, 0, 0)';
        return;
      }

      var previousClones = feedbackCards.slice(-feedbackVisibleCards).map(function (card) {
        var clone = card.cloneNode(true);
        clone.classList.add('feedback-card-clone');
        clone.setAttribute('aria-hidden', 'true');
        return clone;
      });

      var nextClones = feedbackCards.slice(0, feedbackVisibleCards).map(function (card) {
        var clone = card.cloneNode(true);
        clone.classList.add('feedback-card-clone');
        clone.setAttribute('aria-hidden', 'true');
        return clone;
      });

      previousClones.reverse().forEach(function (clone) {
        feedbackRail.insertBefore(clone, feedbackRail.firstChild);
      });

      nextClones.forEach(function (clone) {
        feedbackRail.appendChild(clone);
      });

      feedbackIndex = feedbackVisibleCards;
      feedbackRail.style.transition = 'none';
      moveFeedback(false);
    }

    /* ---------- Calcula o deslocamento exato de um card ---------- */
    function getFeedbackStep() {
      var card = feedbackRail.querySelector('.testimonial-card');
      if (!card) return 0;

      var styles = window.getComputedStyle(feedbackRail);
      var gap = parseFloat(styles.gap) || 0;
      return card.getBoundingClientRect().width + gap;
    }

    /* ---------- Move o carrossel com animação suave ---------- */
    function moveFeedback(animate) {
      var step = getFeedbackStep();
      if (!step) return;

      feedbackRail.style.transition = animate
        ? 'transform ' + feedbackTransitionDuration + 'ms cubic-bezier(0.22, 0.61, 0.36, 1)'
        : 'none';
      feedbackRail.style.transform = 'translate3d(' + (-feedbackIndex * step) + 'px, 0, 0)';
      updateFeedbackDots();
    }

    /* ---------- Reinicia o contador de 5 segundos ---------- */
    function resetFeedbackTimer() {
      clearTimeout(feedbackTimer);
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.hidden || feedbackTrack.matches(':hover') || feedbackTrack.contains(document.activeElement)) return;

      feedbackTimer = setTimeout(function () {
        moveFeedbackTo(feedbackIndex + 1);
      }, 5000);
    }

    feedbackTrack.addEventListener('pointerenter', function () { clearTimeout(feedbackTimer); });
    feedbackTrack.addEventListener('pointerleave', resetFeedbackTimer);
    feedbackTrack.addEventListener('focusin', function () { clearTimeout(feedbackTimer); });
    feedbackTrack.addEventListener('focusout', function () { window.setTimeout(resetFeedbackTimer, 0); });
    document.addEventListener('visibilitychange', resetFeedbackTimer);

    /* ---------- Avança ou retorna um depoimento ---------- */
    function moveFeedbackTo(newIndex) {
      var totalCards = feedbackCards.length;

      if (totalCards <= feedbackVisibleCards) return;

      feedbackIndex = newIndex;
      moveFeedback(true);
      resetFeedbackTimer();
    }

    /* ---------- Corrige o índice sem mostrar o salto do loop ---------- */
    feedbackRail.addEventListener('transitionend', function (event) {
      if (event.propertyName !== 'transform') return;

      var totalCards = feedbackCards.length;
      var lastCloneStart = feedbackVisibleCards + totalCards;

      if (feedbackIndex >= lastCloneStart) {
        feedbackIndex = feedbackVisibleCards;
        moveFeedback(false);
      } else if (feedbackIndex < feedbackVisibleCards) {
        feedbackIndex = feedbackVisibleCards + totalCards - 1;
        moveFeedback(false);
      }
    });

    /* ---------- Setas laterais ---------- */
    if (feedbackPrevBtn) {
      feedbackPrevBtn.addEventListener('click', function () {
        moveFeedbackTo(feedbackIndex - 1);
      });
    }

    if (feedbackNextBtn) {
      feedbackNextBtn.addEventListener('click', function () {
        moveFeedbackTo(feedbackIndex + 1);
      });
    }

    /* ---------- Navegação pelas bolinhas ---------- */
    feedbackDots.forEach(function (dot, dotIndex) {
      dot.addEventListener('click', function () {
        var totalCards = feedbackCards.length;
        if (totalCards <= feedbackVisibleCards) return;

        var currentLogicalIndex = ((feedbackIndex - feedbackVisibleCards) % totalCards + totalCards) % totalCards;
        var delta = dotIndex - currentLogicalIndex;

        if (delta > totalCards / 2) delta -= totalCards;
        if (delta < -totalCards / 2) delta += totalCards;

        moveFeedbackTo(feedbackIndex + delta);
      });
    });

    /* ---------- Arraste com mouse ou toque ---------- */
    feedbackTrack.addEventListener('pointerdown', function (event) {
      if (feedbackCards.length <= feedbackVisibleCards) return;

      feedbackIsDragging = true;
      feedbackDragMoved = false;
      feedbackDragStartX = event.clientX;
      feedbackDragCurrentX = event.clientX;
      feedbackDragStartTransform = -feedbackIndex * getFeedbackStep();

      feedbackRail.style.transition = 'none';
      feedbackTrack.setPointerCapture(event.pointerId);
      resetFeedbackTimer();
    });

    feedbackTrack.addEventListener('pointermove', function (event) {
      if (!feedbackIsDragging) return;

      feedbackDragCurrentX = event.clientX;
      var deltaX = feedbackDragCurrentX - feedbackDragStartX;

      if (Math.abs(deltaX) > 5) {
        feedbackDragMoved = true;
      }

      feedbackRail.style.transform = 'translate3d(' + (feedbackDragStartTransform + deltaX) + 'px, 0, 0)';
    });

    function finishFeedbackDrag() {
      if (!feedbackIsDragging) return;

      feedbackIsDragging = false;
      var deltaX = feedbackDragCurrentX - feedbackDragStartX;
      var threshold = Math.min(90, feedbackTrack.clientWidth * 0.18);

      if (Math.abs(deltaX) >= threshold) {
        moveFeedbackTo(feedbackIndex + (deltaX < 0 ? 1 : -1));
      } else {
        moveFeedback(true);
        resetFeedbackTimer();
      }
    }

    feedbackTrack.addEventListener('pointerup', finishFeedbackDrag);
    feedbackTrack.addEventListener('pointercancel', finishFeedbackDrag);
    feedbackTrack.addEventListener('lostpointercapture', finishFeedbackDrag);

    /* ---------- Pausa o clique de links durante um arraste ---------- */
    feedbackTrack.addEventListener('click', function (event) {
      if (!feedbackDragMoved) return;
      event.preventDefault();
      event.stopPropagation();
      feedbackDragMoved = false;
    }, true);

    /* ---------- Recalcula o carrossel ao redimensionar a tela ---------- */
    var feedbackResizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(feedbackResizeTimer);

      feedbackResizeTimer = setTimeout(function () {
        var previousVisibleCards = feedbackVisibleCards;
        updateFeedbackCardSize();

        if (previousVisibleCards !== feedbackVisibleCards) {
          buildFeedbackLoop();
        } else {
          moveFeedback(false);
        }

        resetFeedbackTimer();
      }, 150);
    });

    updateFeedbackCardSize();
    buildFeedbackLoop();
    updateFeedbackDots();
    resetFeedbackTimer();
  }

});
