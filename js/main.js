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

unitTabs.forEach(function (tab) {
  tab.addEventListener('click', function () {
    // Desativa todas as abas antes de ativar a clicada
    unitTabs.forEach(function (t) {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
    });

    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');

    // Atualiza toda a seção com os dados da unidade selecionada
    renderUnit(tab.dataset.unit);
  });
});

// Garante que a Unidade 1 já apareça renderizada ao carregar a página
renderUnit('1');

  /* ---------- Lista da equipe (troca o membro em destaque) ---------- */
  var teamItems = document.querySelectorAll('.team__item');

  teamItems.forEach(function (item) {
    item.addEventListener('click', function () {
      teamItems.forEach(function (i) {
        i.classList.remove('is-active');
      });
      item.classList.add('is-active');
      // Observação: aqui futuramente pode-se atualizar a foto
      // e a biografia de acordo com o membro selecionado.
    });
  });

  /* ---------- Setas do carrossel de depoimentos ---------- */
  var track = document.getElementById('testimonialsTrack');
  var prevBtn = document.querySelector('.testimonials__arrow--prev');
  var nextBtn = document.querySelector('.testimonials__arrow--next');

  if (track && prevBtn && nextBtn) {
    var scrollAmount = 320;

    prevBtn.addEventListener('click', function () {
      track.scrollBy({ left: -scrollAmount });
    });

    nextBtn.addEventListener('click', function () {
      track.scrollBy({ left: scrollAmount });
    });
  }

});
