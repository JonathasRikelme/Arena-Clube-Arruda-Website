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

