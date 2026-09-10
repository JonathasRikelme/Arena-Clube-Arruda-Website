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

/* ---------- Renderiza os dados de uma unidade na tela ---------- */
function renderUnit(unitId) {
  var data = unitsData[unitId];
  if (!data) return; // proteção: id inexistente não quebra o site

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
    Usado nos cards de esporte, "por dentro da arena", equipe,
    eventos, pódio, depoimentos e CTA.
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
    Aqui começa o JS da parte de equipes, segue o mesmo padrão do código acima, mas com algumas alterações
    ====================================================*/

    var teamData = {
  1: {
    number: '01',
    name: 'Bruno Eduardo',
    role: 'Sócio Administrador &nbsp;•&nbsp; Fundador',
    bio: 'Bruno Eduardo criou a Arena Clube Arruda em 2024 movido por uma paixão simples: futevôlei. Jogador ele mesmo, sabe exatamente o que faz uma quadra boa e o que faz a galera voltar toda semana. É conhecido por receber cada cliente como se fosse da casa.',
    photo: 'Assets/Images/Equipe/retrato-homem.png' 
  },
  2: {
    number: '07',
    name: 'Renata Queiroz',
    role: 'Gerente &nbsp;•&nbsp; Líder',
    bio: 'Renata atua como gerente da Arena Clube Arruda, cuidando de perto da organização e do funcionamento do espaço. Atenta a cada detalhe, busca garantir que jogadores e clientes tenham uma experiência confortável e bem atendida. Seu jeito acolhedor e organizado ajuda a manter a Arena sempre pronta para receber a galera.', 
    photo: 'Assets/Images/Equipe/retrato-mulher.png' 
  },
  3: {
    number: '09',
    name: 'Celso Murilo',
    role: 'Professor &nbsp;•&nbsp; Vôlei',
    bio: 'Celso é professor de vôlei na Arena Clube Arruda e transforma sua experiência com o esporte em aprendizado dentro da quadra. Apaixonado pelo vôlei, acompanha de perto a evolução de cada aluno, trabalhando técnica, disciplina e, principalmente, o prazer de jogar. Para ele, cada treino é uma oportunidade de evoluir e se divertir.', 
    photo: 'Assets/Images/Equipe/retrato-homem-negro.png' // TODO: quando tiver a foto real, colocar aqui a url() dela
  }
};

function renderTeamMember(memberId) {
  var data = teamData[memberId];
  if (!data) return; // proteção: id inexistente não quebra o site

  document.getElementById('teamBioNumber').textContent = data.number;
  document.getElementById('teamBioName').textContent = data.name;
  document.getElementById('teamBioRole').innerHTML = data.role;

  // Texto de fallback caso a bio ainda não tenha sido preenchida
  document.getElementById('teamBioText').textContent =
    data.bio || 'Em breve mais informações sobre esse integrante da equipe.';

  var photoEl = document.getElementById('teamPhoto');
  if (data.photo) {
    // Se já existir uma foto real cadastrada, troca o fundo pra ela
    photoEl.style.backgroundImage = 'url(' + data.photo + ')';
    photoEl.style.backgroundSize = 'cover';
    photoEl.style.backgroundPosition = 'center';
  } else {
    // Sem foto cadastrada ainda: volta pro placeholder roxo padrão
    photoEl.style.backgroundImage = '';
  }
}

/* ---------- Lista da equipe (clique troca foto + bio) ---------- */
var teamItems = document.querySelectorAll('.team__item');
var teamPhotoEl = document.getElementById('teamPhoto');
var teamBioEl = document.querySelector('.team__bio');
var TEAM_FADE_MS = 200; // mesmo raciocínio do UNIT_FADE_MS: um pouco mais rápido que --dur-base

/* ---------- Move o indicador verde até o membro ativo ---------- */
function moveTeamIndicator(activeItem) {
  if (!activeItem || !activeItem.parentElement) return;
  activeItem.parentElement.style.setProperty('--team-indicator-height', activeItem.offsetHeight + 'px');
  activeItem.parentElement.style.setProperty('--team-indicator-y', activeItem.offsetTop + 'px');
}

teamItems.forEach(function (item) {
  item.addEventListener('click', function () {
    // Evita refazer o crossfade se a pessoa clicar em quem já está ativo
    if (item.classList.contains('is-active')) return;

    teamItems.forEach(function (i) {
      i.classList.remove('is-active');
    });
    item.classList.add('is-active');
    moveTeamIndicator(item);

    // Crossfade: some com a foto/bio atuais, troca os dados por baixo
    // do fade, e revela de novo — evita a troca seca de antes
    if (teamPhotoEl) teamPhotoEl.classList.add('is-fading');
    if (teamBioEl) teamBioEl.classList.add('is-fading');

    setTimeout(function () {
      renderTeamMember(item.dataset.member);
      if (teamPhotoEl) teamPhotoEl.classList.remove('is-fading');
      if (teamBioEl) teamBioEl.classList.remove('is-fading');
    }, TEAM_FADE_MS);
  });
});

// Garante que o Bruno Eduardo já apareça correto ao carregar a página
if (teamItems.length) {
  moveTeamIndicator(document.querySelector('.team__item.is-active') || teamItems[0]);
}

// Reposiciona o indicador quando a largura/altura da lista mudar em um resize
var teamIndicatorResizeTimer;
window.addEventListener('resize', function () {
  clearTimeout(teamIndicatorResizeTimer);
  teamIndicatorResizeTimer = setTimeout(function () {
    moveTeamIndicator(document.querySelector('.team__item.is-active'));
  }, 150);
});
renderTeamMember('1');

/* ---------- Vídeos dos cards de eventos (lazy load no clique) ---------- */
//Cada card com vídeo só carrega o arquivo de vídeo de verdade quando
//o usuário clica na capa , só a imagem de capa (leve)
//é exibida. Isso evita baixar todos os vídeos só por carregar a página.
var videoMediaBoxes = document.querySelectorAll('.event-card--video .event-card__media');

videoMediaBoxes.forEach(function (mediaBox) {
  mediaBox.addEventListener('click', function () {
    var videoSrc = mediaBox.dataset.video;
    if (!videoSrc) return; // proteção: sem caminho de vídeo, não faz nada

    // Pausa qualquer outro vídeo que já esteja tocando, pra não ter audio duplicado de dois videos rodando
    document.querySelectorAll('.event-card__media video').forEach(function (v) {
      v.pause();
    });

    // Cria o elemento <video> de verdade e substitui a capa por ele.
    // Usamos duas <source>: mp4 (compatibilidade universal, essencial
    // pro Safari/iOS, que não entende webm) e webm (arquivo menor,
    // usado pelos navegadores que suportam). O navegador escolhe
    // sozinho qual consegue tocar — se um formato não existir, ele
    // simplesmente ignora e tenta o próximo, sem quebrar nada.
    var video = document.createElement('video');
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true; // evita abrir em tela cheia sozinho no iOS

    var sourceMp4 = document.createElement('source');
    sourceMp4.src = videoSrc;
    sourceMp4.type = 'video/mp4';
    video.appendChild(sourceMp4);

    var sourceWebm = document.createElement('source');
    sourceWebm.src = videoSrc.replace(/\.mp4$/i, '.webm');
    sourceWebm.type = 'video/webm';
    video.appendChild(sourceWebm);

    mediaBox.innerHTML = ''; // remove a imagem de capa, a tag "Vídeo" e o botão de play
    mediaBox.appendChild(video);
    video.play();
  });
});