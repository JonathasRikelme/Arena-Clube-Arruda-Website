/* =====================================================
   MAIN.JS.
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Menu mobile (hamburguer) ---------- */
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Fecha o menu ao clicar em algum link (melhora a navegação mobile)
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

/* ---------- Dados de cada unidade ---------- */
//Caro Dev que está mexendo no meu códigho quiser adicionar mais unidades, basta seguir o mesmo padrão do objeto abaixo,
// incrementando a chave (1, 2, 3...) e preenchendo os dados correspondentes.
var unitsData = {
  1: {
    name: 'Unidade Rua do Machado', //Nome da unidade
    address: 'R. do Machado, 312 - Arruda, Recife - PE', //Endereço da unidade
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.7655180535558!2d-34.892129425594106!3d-8.02309718008273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab190052afd05b%3A0xb6b749f7075a0b21!2sArena%20clube%20Arruda!5e0!3m2!1spt-BR!2sbr!4v1788634782089!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
    //Mapa incorporado da unidade 1 (Rua do Machado)
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Arena+Clube+Arruda+Rua+do+Machado',
    //URL do Google Maps para direções da unidade 1 (Rua do Machado)
    courts: [
      { label: 'Vôlei / Futevôlei', count: 3 }, //informação de quantas quadras tem de cada tipo na unidade 1 (Rua do Machado)
      { label: 'Futebol Socity', count: 1 }
    ],
    amenities: ['Vestiarios com chuveiros', 'Lanchonete', 'Espaço para lazer'], // Destaques da unidade 1 (Rua do Machado)
    appName: 'Recplay', // APP DE REPLAY
    appCourts: ['Quadra 1 - 018187c', 'Quadra 2 - 018453b', 'Quadra 3 - 019452a'],// Código das quadras no app de replay
    hours: [
      { day: 'Seg - Sex', time: '06:00 - 23:00' }, // Horarios da unidade 1 (Rua do Machado)
      { day: 'Sábado', time: '07:00 - 00:00' },
      { day: 'Domingo', time: 'DayUse' }
    ]
  },
  2: { //==========================
      //Dados da Unidade 2 (Rua da Regeneração)
      //==========================
    name: 'Unidade Rua da Regeneração', //Nome da unidade 
    address: 'R. da Regeneração, 1241 - Arruda, Recife - PE, 52120-335', //Endereço da unidade
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d596.610755275096!2d-34.883028483948294!3d-8.022449898129864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1909c3c88a75%3A0x9443138ee04a39c7!2sArena%20clube%20arruda%202!5e0!3m2!1spt-BR!2sbr!4v1788636502382!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
    //Mapa incorporado da unidade 2 (Rua da Regeneração)
    directionsUrl: 'https://www.google.com/maps/dir/-8.0084992,-34.8749824/Arena+clube+arruda+2,+ao+lado+do+bar+vermelho+-+R.+da+Regeneração,+1241+-+Arruda,+Recife+-+PE,+52120-335/@-8.0163572,-34.8879838,15z/data=!4m15!4m14!1m6!3m4!1m2!1d-34.8819676!2d-8.0237933!3s0x7ab186a3244a7d9:0x7b1bcf398c1d65fd!4e1!1m5!1m1!1s0x7ab1909c3c88a75:0x9443138ee04a39c7!2m2!1d-34.8825893!2d-8.0224421!3e9?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D',
    //URL do Google Maps para direções da unidade 2 (Rua da Regeneração)
    courts: [
      { label: 'Vôlei / Futevôlei', count: 2 } //informação de quantas quadras tem de cada tipo na unidade 2 (Rua da Regeneração)
    ],
    amenities: ['Vestiarios com chuveiros', 'Hamburgueria', 'Espaço para lazer'], // Destaques da unidade confirmar
    appName: 'Thow', // APP DE REPLAY
    appCourts: ['Quadra 1 - 000000a', 'Quadra 2 - 000000b'], // Código das quadras no app de replay
    hours: [
      { day: 'Seg - Sex', time: '06:00 - 22:00' }, // Horarios da unidade
      { day: 'Sábado', time: '08:00 - 18:00' },
      { day: 'Domingo', time: 'DayUse' }
    ]
  }
};

/* ---------- Dados dos espaços de cada unidade ---------- */
var spacesData = {
  1: [
    {
      image: 'Assets/Images/Spaces/Unidade 1/Quadra-Coberta.webp',
      alt: 'Quadra Coberta',
      title: 'Quadra Coberta',
      description: 'Choveu? Sem problema. A quadra é coberta e o jogo continua.'
    },
    {
      image: 'Assets/Images/Spaces/Unidade 1/Espaço-Society.webp',
      alt: 'Society',
      title: 'Society',
      description: 'Gramado sintético pronto pra reunir a galera, treinar ou jogar aquele amistoso.'
    },
    {
      image: 'Assets/Images/Spaces/Unidade 1/Lazer-Lanchonete.webp',
      alt: 'Lanchonete e Espaço de Lazer',
      title: 'Lanchonete e Espaço de Lazer',
      description: 'Terminou o jogo? Agora é hora de comer, conversar e ficar por aqui.'
    }
  ],
  2: [
    {
      image: 'Assets/Images/Spaces/Unidade 2/quadra-1-unindade2.png',
      alt: 'Quadra 1 da Unidade 2',
      title: 'Quadra 1',
      description: 'Espaço de areia preparado para reunir a galera, treinar e aproveitar a partida com toda a estrutura da Unidade 2.'
    },
    {
      image: 'Assets/Images/Spaces/Unidade 2/quadra-2-unidade2.png',
      alt: 'Quadra 2 da Unidade 2',
      title: 'Quadra 2',
      description: 'Mais uma opção de quadra de areia para jogar, competir e curtir o esporte em um ambiente pensado para a sua experiência.'
    },
    {
      image: 'Assets/Images/Spaces/Unidade 2/lanchonete-hamburgueria.png',
      alt: 'Hamburgueria e Espaço de Lazer da Unidade 2',
      title: 'Hamburgueria e Espaço de Lazer',
      description: 'Depois da partida, é hora de relaxar, reunir a galera e aproveitar a hamburgueria, o bar e o espaço de lazer da Unidade 2.'
    }
  ]
};

/* ---------- Renderiza os espaços conforme a unidade selecionada ---------- */
function renderSpaces(unitId) {
  var spacesGrid = document.querySelector('.spaces__grid');
  var spacesSubtitle = document.getElementById('spacesSubtitle');
  var spaces = spacesData[unitId];

  if (!spacesGrid || !spaces) return;

  if (spacesSubtitle) {
    spacesSubtitle.textContent = 'Conheça o nosso espaço da Unidade ' + unitId + '.';
  }

  spacesGrid.innerHTML = spaces.map(function (space) {
    return '<article class="space-card reveal">' +
      '<div class="space-card__media"><img src="' + space.image + '" loading="lazy" alt="' + space.alt + '"></div>' +
      '<div class="space-card__tag">' +
        '<h3>' + space.title + '</h3>' +
        '<p>' + space.description + '</p>' +
      '</div>' +
    '</article>';
  }).join('');

  // Os cards são recriados ao trocar de unidade, então precisam ser
  // registrados novamente no mesmo IntersectionObserver do restante do site.
  var newRevealCards = spacesGrid.querySelectorAll('.reveal');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    newRevealCards.forEach(function (el) {
      el.classList.add('is-visible');
    });
  } else if (typeof revealObserver !== 'undefined') {
    newRevealCards.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Na renderização inicial, o observer é criado logo depois deste código.
    // O próximo frame garante que os cards permaneçam disponíveis para observação.
    window.requestAnimationFrame(function () {
      if (typeof revealObserver === 'undefined') return;
      spacesGrid.querySelectorAll('.reveal:not(.is-visible)').forEach(function (el) {
        revealObserver.observe(el);
      });
    });
  }
}

/* ---------- Renderiza os dados de uma unidade na tela ---------- */
function renderUnit(unitId) {
  var data = unitsData[unitId];
  if (!data) return; // proteção: id inexistente não quebra o site

  // Espaços e subtítulo da seção "Por dentro da arena"
  renderSpaces(unitId);

  // Nome e endereço
  document.getElementById('locationUnitName').textContent = data.name;
  document.getElementById('locationAddress').textContent = data.address;

  // Mapa (iframe do Google Maps daquela unidade)
  document.getElementById('locationMap').innerHTML = data.mapEmbed || '';

  // Botão "Como chegar?"
  var directionsBtn = document.getElementById('locationDirectionsBtn');
  if (directionsBtn) directionsBtn.setAttribute('href', data.directionsUrl || '#');

  // Lista de quadras (label + quantidade)
  document.getElementById('locationCourts').innerHTML = data.courts.map(function (c) {
    return '<li><span>' + c.label + '</span><strong>' + c.count + '</strong></li>';
  }).join('');

  // Lista de comodidades (vestiário, lanchonete, etc)
  document.getElementById('locationAmenities').innerHTML = data.amenities.map(function (a) {
    return '<li>' + a + '</li>';
  }).join('');

  // Nome do app + códigos de cada quadra no app
  var appHtml = '<li><strong>APP:</strong> ' + data.appName + '</li>';
  appHtml += data.appCourts.map(function (c) { return '<li>' + c + '</li>'; }).join('');
  document.getElementById('locationApp').innerHTML = appHtml;

  // Horários de funcionamento
  document.getElementById('locationHours').innerHTML = data.hours.map(function (h) {
    return '<li><span>' + h.day + '</span><strong>' + h.time + '</strong></li>';
  }).join('');
}

/* ---------- Abas "Unidade 1 / Unidade 2" ---------- */
var unitTabs = document.querySelectorAll('.location__tab');
var unitTabIndicator = document.getElementById('locationTabIndicator');
var locationMapEl = document.getElementById('locationMap');
var locationInfoEl = document.querySelector('.location__info');
var UNIT_FADE_MS = 200; // precisa bater com --dur-base (300ms) só um pouco mais rápido, pra não deixar "vácuo" antes do fade-in

/* ---------- Move o indicador (pill) verde até a aba ativa ---------- */
function moveUnitIndicator(activeTab) {
  if (!unitTabIndicator || !activeTab) return;
  unitTabIndicator.style.width = activeTab.offsetWidth + 'px';
  unitTabIndicator.style.transform = 'translateX(' + activeTab.offsetLeft + 'px)';
}

unitTabs.forEach(function (tab) {
  tab.addEventListener('click', function () {
    // Desativa todas as abas antes de ativar a clicada
    unitTabs.forEach(function (t) {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
    });

    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');
    moveUnitIndicator(tab);

    // Crossfade: esconde mapa + informações, troca os dados por baixo
    // do fade, e revela de novo — evita a troca "seca" de conteúdo
    if (locationMapEl) locationMapEl.classList.add('is-fading');
    if (locationInfoEl) locationInfoEl.classList.add('is-fading');

    setTimeout(function () {
      renderUnit(tab.dataset.unit);
      if (locationMapEl) locationMapEl.classList.remove('is-fading');
      if (locationInfoEl) locationInfoEl.classList.remove('is-fading');
    }, UNIT_FADE_MS);
  });
});

// Garante que a Unidade 1 já apareça renderizada ao carregar a página
renderUnit('1');

// Posiciona o indicador embaixo da aba ativa inicial. Um pequeno atraso
// garante que a fonte Oswald (que muda a largura do texto) já carregou
// e o offsetWidth calculado está correto — sem isso, o indicador podia
// nascer com a largura errada se a fonte ainda não tivesse aplicado.
window.addEventListener('load', function () {
  moveUnitIndicator(document.querySelector('.location__tab.is-active'));
});

// Reposiciona o indicador se a tela for redimensionada (o padding das
// abas é proporcional/clamp, então a largura muda com o viewport)
var unitIndicatorResizeTimer;
window.addEventListener('resize', function () {
  clearTimeout(unitIndicatorResizeTimer);
  unitIndicatorResizeTimer = setTimeout(function () {
    moveUnitIndicator(document.querySelector('.location__tab.is-active'));
  }, 150);
});



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
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
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

      feedbackTimer = setTimeout(function () {
        moveFeedbackTo(feedbackIndex + 1);
      }, 5000);
    }

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

/*====================================================
    Header: encolhe e ganha sombra depois de rolar a página
    ====================================================*/
var siteHeaderEl = document.querySelector('.site-header');
var HEADER_SCROLL_THRESHOLD = 80; // pixels rolados até o header "encolher"

if (siteHeaderEl) {
  var headerScrollTicking = false; // evita empilhar vários requestAnimationFrame por scroll

  function updateHeaderScrollState() {
    siteHeaderEl.classList.toggle('is-scrolled', window.scrollY > HEADER_SCROLL_THRESHOLD);
    headerScrollTicking = false;
  }

  window.addEventListener('scroll', function () {
    if (headerScrollTicking) return; // já tem um frame agendado, não precisa agendar outro
    headerScrollTicking = true;
    window.requestAnimationFrame(updateHeaderScrollState);
  });

  // Estado correto já na primeira renderização (ex: usuário recarrega a
  // página no meio do scroll, ou volta com o botão "voltar" do navegador)
  updateHeaderScrollState();
}

/*====================================================
    Reveal on scroll: anima a entrada de qualquer elemento
    com a classe .reveal quando ele aparece na tela.
    Usado nos cards de esporte, "por dentro da arena",
    hamburgueria, eventos, pódio, depoimentos e CTA.
    ====================================================*/
var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var revealElements = document.querySelectorAll('.reveal');

if (prefersReducedMotion) {
  // Quem prefere menos animação não deveria ficar esperando um scroll
  // pra ver o conteúdo: mostra tudo de uma vez, sem transição (o CSS
  // já zera a duração das transições nesse caso também).
  revealElements.forEach(function (el) {
    el.classList.add('is-visible');
  });
} else if ('IntersectionObserver' in window) {
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target); // anima só uma vez por elemento
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });
} else {
  // Navegador muito antigo sem suporte a IntersectionObserver: melhor
  // mostrar o conteúdo direto do que arriscar ele ficar invisível pra sempre
  revealElements.forEach(function (el) {
    el.classList.add('is-visible');
  });
}

/*====================================================
    Hamburgueria Taias
    Dados, carrossel, autoplay e sincronização do produto
    ====================================================*/

var taiasProducts = [
  {
    name: 'Taias X-Tudo',
    description: 'Pão brioche, blend 120g, ovo, bacon, calabresa, mussarela, salada, molho especial e cebola caramelizada.',
    price: 'R$ 29,90',
    image: 'Assets/Images/Hamburguers/hamburguer-taias-x-tudo.webp'
  },
  {
    name: 'Taias Duplo',
    description: 'Pão brioche, 2 blends 120g, mussarela, salada, molho especial e cebola caramelizada.',
    price: 'R$ 27,90',
    image: 'Assets/Images/Hamburguers/hamburguer-taias-duplo.webp'
  },
  {
    name: 'Taias Cheddar',
    description: 'Pão brioche, blend 120g, cheddar, salada, molho especial e cebola caramelizada.',
    price: 'R$ 24,90',
    image: 'Assets/Images/Hamburguers/hamburguer-taias-cheddar.webp'
  },
  {
    name: 'Taias Bacon',
    description: 'Pão brioche, blend 120g, mussarela, bacon, salada, molho especial e cebola caramelizada.',
    price: 'R$ 26,90',
    image: 'Assets/Images/Hamburguers/hamburguer-taias-bacon.webp'
  },
  {
    name: 'Taias Calabresa',
    description: 'Pão brioche, blend 120g, calabresa, mussarela, salada, molho especial e cebola caramelizada.',
    price: 'R$ 22,90',
    image: 'Assets/Images/Hamburguers/hamburguer-taias-calabresa.webp'
  },
  {
    name: 'Taias Sertanejo',
    description: 'Pão brioche, blend 120g, carne de sol desfiada, queijo coalho, mussarela, salada, molho especial e cebola caramelizada.',
    price: 'R$ 32,90',
    image: 'Assets/Images/Hamburguers/hamburguer-taias-sertanejo.webp'
  },
  {
    name: 'Taias Burger',
    description: 'Pão brioche, blend 120g, mussarela, salada, molho especial e cebola caramelizada.',
    price: 'R$ 19,90',
    image: 'Assets/Images/Hamburguers/hamburguer-taias-burger.webp'
  }
];

var taiasTrack = document.getElementById('taiasTrack');
var taiasPrev = document.getElementById('taiasPrev');
var taiasNext = document.getElementById('taiasNext');
var taiasDots = document.getElementById('taiasDots');
var taiasName = document.getElementById('taiasProductName');
var taiasNumber = document.getElementById('taiasProductNumber');
var taiasDescription = document.getElementById('taiasProductDescription');
var taiasPrice = document.getElementById('taiasProductPrice');
var taiasLocationBtn = document.getElementById('taiasLocationBtn');

if (taiasTrack && taiasProducts.length) {
  var taiasIndex = 0;
  var taiasPhysicalIndex = 1; // primeiro produto real; índice 0 é o clone do último
  var taiasTimer = null;
  var taiasTransitionMs = 550;
  var taiasAnimating = false;
  var taiasDragStartX = 0;
  var taiasDragCurrentX = 0;
  var taiasDragging = false;

  /* ---------- Cria os slides usando os assets reais ---------- */
  function buildTaiasTrack() {
    taiasTrack.innerHTML = '';

    var slides = [taiasProducts[taiasProducts.length - 1]].concat(taiasProducts, [taiasProducts[0]]);
    slides.forEach(function (product, slideIndex) {
      var slide = document.createElement('div');
      slide.className = 'taias__slide';
      slide.setAttribute('aria-hidden', slideIndex === 1 ? 'false' : 'true');

      var image = document.createElement('img');
      image.src = product.image;
      image.alt = product.name + ' da Hamburgueria Taias';
      image.loading = slideIndex === 1 ? 'eager' : 'lazy';
      image.decoding = 'async';
      image.draggable = false;

      slide.appendChild(image);
      taiasTrack.appendChild(slide);
    });

    taiasPhysicalIndex = 1;
    taiasTrack.style.transition = 'none';
    taiasTrack.style.transform = 'translate3d(-100%, 0, 0)';
  }

  /* ---------- Atualiza o conteúdo textual do produto ativo ---------- */
  function renderTaiasProduct() {
    var product = taiasProducts[taiasIndex];
    if (!product) return;

    taiasNumber.textContent = String(taiasIndex + 1).padStart(2, '0');
    taiasName.textContent = product.name;
    taiasDescription.textContent = product.description;
    taiasPrice.textContent = product.price;

    var dots = taiasDots.querySelectorAll('.taias__dot');
    dots.forEach(function (dot, index) {
      var active = index === taiasIndex;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  }

  /* ---------- Cria os indicadores ---------- */
  function buildTaiasDots() {
    taiasProducts.forEach(function (product, index) {
      var dot = document.createElement('button');
      dot.className = 'taias__dot' + (index === 0 ? ' is-active' : '');
      dot.type = 'button';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', 'Ir para ' + product.name);
      dot.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
      dot.addEventListener('click', function () {
        goToTaias(index, true);
      });
      taiasDots.appendChild(dot);
    });
  }

  /* ---------- Reinicia o autoplay após qualquer interação ---------- */
  function resetTaiasTimer() {
    clearInterval(taiasTimer);
    taiasTimer = setInterval(function () {
      if (!taiasDragging) goToTaias(taiasIndex + 1, false);
    }, 7000);
  }

  /* ---------- Faz a troca horizontal do produto ---------- */
  function goToTaias(targetIndex, manual) {
    // Qualquer interação manual reinicia o contador, mesmo se uma transição
    // anterior ainda estiver terminando.
    if (manual) resetTaiasTimer();
    if (taiasAnimating) return;

    var total = taiasProducts.length;
    var normalizedTarget = (targetIndex + total) % total;
    var direction = normalizedTarget > taiasIndex ? 1 : -1;

    if (normalizedTarget === taiasIndex) return;

    // Dots podem apontar para qualquer produto. Nesse caso, posicionamos
    // diretamente no slide físico correspondente; setas/autoplay continuam
    // avançando apenas um item por vez.
    if (Math.abs(targetIndex - taiasIndex) > 1 && Math.abs(targetIndex - taiasIndex) < total - 1) {
      taiasIndex = normalizedTarget;
      taiasPhysicalIndex = taiasIndex + 1;
    } else if (targetIndex >= total) {
      taiasIndex = 0;
      taiasPhysicalIndex += 1;
    } else if (targetIndex < 0) {
      taiasIndex = total - 1;
      taiasPhysicalIndex -= 1;
    } else {
      taiasIndex = normalizedTarget;
      taiasPhysicalIndex += direction;
    }

    taiasAnimating = true;
    renderTaiasProduct();
    taiasTrack.style.transition = 'transform ' + taiasTransitionMs + 'ms cubic-bezier(0.16, 1, 0.3, 1)';
    taiasTrack.style.transform = 'translate3d(-' + (taiasPhysicalIndex * 100) + '%, 0, 0)';

    if (manual) resetTaiasTimer();
  }

  /* ---------- Corrige silenciosamente os clones nas extremidades ---------- */
  taiasTrack.addEventListener('transitionend', function () {
    taiasAnimating = false;

    if (taiasPhysicalIndex === 0) {
      taiasPhysicalIndex = taiasProducts.length;
      taiasTrack.style.transition = 'none';
      taiasTrack.style.transform = 'translate3d(-' + (taiasPhysicalIndex * 100) + '%, 0, 0)';
    } else if (taiasPhysicalIndex === taiasProducts.length + 1) {
      taiasPhysicalIndex = 1;
      taiasTrack.style.transition = 'none';
      taiasTrack.style.transform = 'translate3d(-100%, 0, 0)';
    }
  });

  taiasNext.addEventListener('click', function () {
    goToTaias(taiasIndex + 1, true);
  });

  taiasPrev.addEventListener('click', function () {
    goToTaias(taiasIndex - 1, true);
  });

  /* ---------- Swipe/drag no carrossel ---------- */
  taiasTrack.addEventListener('pointerdown', function (event) {
    taiasDragging = true;
    taiasDragStartX = event.clientX;
    taiasDragCurrentX = event.clientX;
    taiasTrack.setPointerCapture(event.pointerId);
    taiasTrack.style.transition = 'none';
  });

  taiasTrack.addEventListener('pointermove', function (event) {
    if (!taiasDragging) return;
    taiasDragCurrentX = event.clientX;
    var deltaX = taiasDragCurrentX - taiasDragStartX;
    taiasTrack.style.transform = 'translate3d(calc(-' + (taiasPhysicalIndex * 100) + '% + ' + deltaX + 'px), 0, 0)';
  });

  function finishTaiasDrag() {
    if (!taiasDragging) return;
    var deltaX = taiasDragCurrentX - taiasDragStartX;
    taiasDragging = false;

    if (Math.abs(deltaX) > 50) {
      goToTaias(taiasIndex + (deltaX < 0 ? 1 : -1), true);
    } else {
      taiasTrack.style.transition = 'transform ' + taiasTransitionMs + 'ms cubic-bezier(0.16, 1, 0.3, 1)';
      taiasTrack.style.transform = 'translate3d(-' + (taiasPhysicalIndex * 100) + '%, 0, 0)';
      resetTaiasTimer();
    }
  }

  taiasTrack.addEventListener('pointerup', finishTaiasDrag);
  taiasTrack.addEventListener('pointercancel', finishTaiasDrag);

  buildTaiasTrack();
  buildTaiasDots();
  renderTaiasProduct();
  resetTaiasTimer();
}
