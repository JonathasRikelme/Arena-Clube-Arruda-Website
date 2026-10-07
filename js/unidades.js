/* Dados e interações das unidades e dos espaços. */
document.addEventListener('DOMContentLoaded', function () {
/* ---------- Dados de cada unidade ---------- */
//Caro Dev que está mexendo no meu códigho quiser adicionar mais unidades, basta seguir o mesmo padrão do objeto abaixo,
// incrementando a chave (1, 2, 3...) e preenchendo os dados correspondentes.
var unitsData = {
  1: {
    name: 'Unidade Rua do Machado', //Nome da unidade
    address: 'R. do Machado, 312 - Arruda, Recife - PE', //Endereço da unidade
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.7655180535558!2d-34.892129425594106!3d-8.02309718008273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab190052afd05b%3A0xb6b749f7075a0b21!2sArena%20clube%20Arruda!5e0!3m2!1spt-BR!2sbr!4v1788634782089!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
    //Mapa incorporado da unidade 1 (Rua do Machado)
    //URL do Google Maps para direções da unidade 1 (Rua do Machado)
    courts: [
      { label: 'Vôlei / Futevôlei', count: 3 }, //informação de quantas quadras tem de cada tipo na unidade 1 (Rua do Machado)
      { label: 'Futebol Society', count: 1 }
    ],
    amenities: ['<strong>Destaques:</strong>','Quadra Coberta', 'Lanchonete', 'Espaço para lazer', 'Vestiários com chuveiros'], // Destaques da unidade 1 (Rua do Machado)
    appName: 'Replay Sports', // APP DE REPLAY
    appCourts: ['Quadra Coberta - Quadra 1 ou 18181a','Campo câmera 1 - Quadra 2 ou 18181b', 'Campo câmera 2 - Quadra 3 ou 18181c', 'Quadra do treiler - Quadra 4 ou 18181d', 'Quadra do treiler 2 -Quadra 5 ou 18181c'],// Código das quadras no app de replay
    hours: [
      { day: 'Todos os dias', time: '06:00 - 00:00' },
      { day: 'Day use', time: 'Consulte a disponibilidade das quadras' }
    ]
  },
  2: { //==========================
      //Dados da Unidade 2 (Rua da Regeneração)
      //==========================
    name: 'Unidade Rua da Regeneração', //Nome da unidade 
    address: 'R. da Regeneração, 1241 - Arruda, Recife - PE, 52120-335', //Endereço da unidade
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d596.610755275096!2d-34.883028483948294!3d-8.022449898129864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1909c3c88a75%3A0x9443138ee04a39c7!2sArena%20clube%20arruda%202!5e0!3m2!1spt-BR!2sbr!4v1788636502382!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
    //Mapa incorporado da unidade 2 (Rua da Regeneração)
    //URL do Google Maps para direções da unidade 2 (Rua da Regeneração)
    courts: [
      { label: 'Vôlei / Futevôlei', count: 2 } //informação de quantas quadras tem de cada tipo na unidade 2 (Rua da Regeneração)
    ],
    amenities: ['<strong>Destaques:</strong>','Hamburgueria', 'Estacionamento'], // Destaques da unidade confirmar
    appName: 'Recplay', // APP DE REPLAY
    appCourts: ['Pesquisar por Arena Clube Arruda'], // Código das quadras no app de replay
    hours: [
      { day: 'Todos os dias', time: '06:00 - 00:00' },
      { day: 'Day use', time: 'Consulte a disponibilidade das quadras' }
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
      image: 'Assets/Images/Spaces/Unidade 1/Espaco-Society.webp',
      alt: 'Society',
      title: 'Society',
      description: 'Gramado sintético pronto pra reunir a galera, treinar ou jogar aquele amistoso.'
    },
    {
      image: 'Assets/Images/Spaces/Unidade 1/Espaco-Lazer.webp',
      alt: 'Lanchonete e Espaço de Lazer',
      title: 'Lanchonete e Espaço de Lazer',
      description: 'Terminou o jogo? Agora é hora de comer, conversar e ficar por aqui.'
    }
  ],
  2: [
    {
      image: 'Assets/Images/Spaces/Unidade 2/quadra-1-unindade2.webp',
      alt: 'Quadra 1 da Unidade 2',
      title: 'Quadra 1',
      description: 'Espaço de areia preparado para reunir a galera, treinar e aproveitar a partida com toda a estrutura da Unidade 2.'
    },
    {
      image: 'Assets/Images/Spaces/Unidade 2/quadra-2-unidade2.webp',
      alt: 'Quadra 2 da Unidade 2',
      title: 'Quadra 2',
      description: 'Mais uma opção de quadra de areia para jogar, competir e curtir o esporte em um ambiente pensado para a sua experiência.'
    },
    {
      image: 'Assets/Images/Spaces/Unidade 2/lanchonete-hamburgueria.webp',
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
  if (directionsBtn) directionsBtn.href = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(data.address);

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
      t.tabIndex = -1;
    });

    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');
    tab.tabIndex = 0;
    var locationPanel = document.getElementById('locationPanel');
    if (locationPanel) locationPanel.setAttribute('aria-labelledby', tab.id);
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
  tab.addEventListener('keydown', function (event) {
    var index = Array.prototype.indexOf.call(unitTabs, tab);
    var nextIndex = index;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % unitTabs.length;
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + unitTabs.length) % unitTabs.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = unitTabs.length - 1;
    else return;
    event.preventDefault();
    unitTabs[nextIndex].focus();
    unitTabs[nextIndex].click();
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

});
