/* =====================================================
   HISTORICO.JS
   ===================================================== */

/* ---------- Dados de cada evento, organizados por ano ----------
   Caro Dev pra adicionar um
   evento novo, basta acrescentar um item aqui seguindo o mesmo
   formato. (veja o TODO em showMedia). */
var historicoData = [
  {
    id: 'e2023-1',
    year: 2023,
    category: 'torneio',
    categoryLabel: 'Torneio',
    title: 'Amistoso de Pré-inauguração',
    date: '14 out 2023',
    location: 'Rua do Machado',
    photos: 10,
    videos: 0,
    text: 'Primeiro racha na quadra ainda em fase de acabamento, só com a galera mais próxima.',
    fullDescription: 'Antes mesmo da inauguração oficial, reunimos alguns times parceiros pra testar a quadra nova e colher feedback antes de abrir as portas pra todo mundo. Foi puro futevôlei entre amigos, com direito a churrasco no fim do dia.',
    media: [
      { type: 'image', label: 'Foto 1' },
      { type: 'image', label: 'Foto 2' }
    ]
  },
  {
    id: 'e2023-2',
    year: 2023,
    category: 'confraternizacao',
    categoryLabel: 'Confraternização',
    title: 'Confraternização de Fim de Ano',
    date: '16 dez 2023',
    location: 'Rua do Machado',
    photos: 15,
    videos: 0,
    text: 'Última confraternização antes da abertura oficial, com a equipe e os primeiros parceiros da arena.',
    fullDescription: 'Fechamos 2023 reunindo quem ajudou a colocar a Arena Clube Arruda de pé: equipe, fornecedores e os primeiros times que confiaram na gente. Uma noite de comida boa, papo reto e muita expectativa pro ano que estava por vir.',
    media: [
      { type: 'image', label: 'Foto 1' },
      { type: 'image', label: 'Foto 2' },
      { type: 'image', label: 'Foto 3' }
    ]
  },
  {
    id: 'e2024-1',
    year: 2024,
    category: 'confraternizacao',
    categoryLabel: 'Confraternização',
    title: 'Inauguração da Arena',
    date: '12 mar 2024',
    location: 'Rua do Machado',
    photos: 18,
    videos: 0,
    text: 'A abertura oficial da Arena Clube Arruda, com direito a corte da fita e casa cheia.',
    fullDescription: 'O dia em que abrimos as portas de verdade. Corte de fita, apresentação das quadras, jogos de exibição e uma casa lotada pra conhecer a estrutura nova. O começo de tudo o que viria depois.',
    media: [
      { type: 'image', label: 'Foto 1' },
      { type: 'image', label: 'Foto 2' },
      { type: 'image', label: 'Foto 3' }
    ]
  },
  {
    id: 'e2024-2',
    year: 2024,
    category: 'torneio',
    categoryLabel: 'Torneio',
    title: 'Torneio de Abertura',
    date: '22 jun 2024',
    location: 'Rua do Machado',
    photos: 24,
    videos: 2,
    text: 'Primeiro torneio oficial da arena, com times de vôlei e futevôlei disputando o título inaugural.',
    fullDescription: 'Com a arena já rodando redondo, chegou a hora do primeiro torneio de verdade: dois dias de disputa entre times de vôlei e futevôlei, taça pro campeão e a quadra lotada de torcida do início ao fim.',
    media: [
      { type: 'video', label: 'Vídeo 1' },
      { type: 'image', label: 'Foto 1' },
      { type: 'image', label: 'Foto 2' }
    ]
  },
  {
    id: 'e2024-3',
    year: 2024,
    category: 'confraternizacao',
    categoryLabel: 'Confraternização',
    title: 'Festa Junina na Arena',
    date: '15 jul 2024',
    location: 'Rua do Machado',
    photos: 30,
    videos: 0,
    text: 'Quadrilha, comida típica e muita animação pra celebrar o São João dentro da arena.',
    fullDescription: 'Trocamos a bola pela quadrilha por uma noite: decoração junina, comidas típicas na lanchonete e roupa de matuto pra quem quisesse entrar no clima. Uma pausa gostosa no meio da temporada de jogos.',
    media: [
      { type: 'image', label: 'Foto 1' },
      { type: 'image', label: 'Foto 2' }
    ]
  },
  {
    id: 'e2024-4',
    year: 2024,
    category: 'torneio',
    categoryLabel: 'Torneio',
    title: 'Copa Fim de Ano',
    date: '14 dez 2024',
    location: 'Rua do Machado',
    photos: 40,
    videos: 3,
    text: 'Fechamento de temporada com a Copa Fim de Ano, reunindo os melhores times do ano na quadra.',
    fullDescription: 'O torneio que fechou o primeiro ano de vida da arena com chave de ouro: fase de grupos ao longo de duas semanas, mata-mata direto no domingo, e premiação pros três primeiros colocados.',
    media: [
      { type: 'video', label: 'Vídeo 1' },
      { type: 'video', label: 'Vídeo 2' },
      { type: 'image', label: 'Foto 1' }
    ]
  },
  {
    id: 'e2025-1',
    year: 2025,
    category: 'aniversario',
    categoryLabel: 'Aniversário',
    title: 'Aniversário de 1 Ano',
    date: '12 mar 2025',
    location: 'Rua do Machado',
    photos: 52,
    videos: 4,
    text: 'A arena completou 1 ano com jogos exibição, sorteios e bolo pra toda a galera.',
    fullDescription: 'Comemoramos o primeiro ano de arena com um dia inteiro de programação: jogos de exibição pela manhã, sorteio de camisas e mensalidades à tarde, e bolo gigante pra fechar a festa com a galera que faz parte dessa história desde o início.',
    media: [
      { type: 'video', label: 'Vídeo 1' },
      { type: 'image', label: 'Foto 1' },
      { type: 'image', label: 'Foto 2' },
      { type: 'image', label: 'Foto 3' }
    ]
  },
  {
    id: 'e2025-2',
    year: 2025,
    category: 'torneio',
    categoryLabel: 'Torneio',
    title: 'Torneio de Futevôlei',
    date: '10 mai 2025',
    location: 'Rua do Machado',
    photos: 28,
    videos: 0,
    text: 'Duplas de futevôlei disputando ponto a ponto num dos torneios mais concorridos do ano.',
    fullDescription: 'Formato de duplas, disputa ponto a ponto e uma lista de inscritos que lotou em poucos dias. Um dos torneios de futevôlei mais concorridos que já rolaram na arena.',
    media: [
      { type: 'image', label: 'Foto 1' },
      { type: 'image', label: 'Foto 2' }
    ]
  },
  {
    id: 'e2025-3',
    year: 2025,
    category: 'confraternizacao',
    categoryLabel: 'Confraternização',
    title: 'Confraternização de Verão',
    date: '20 jul 2025',
    location: 'Rua da Regeneração',
    photos: 22,
    videos: 0,
    text: 'Tarde de sol, música e hambúrguer da Taias pra celebrar o meio de ano na Unidade 2.',
    fullDescription: 'Primeira confraternização grande na Unidade 2: tarde de sol, som ao vivo, e o cardápio completo da Hamburgueria Taias liberado pra galera que passou por lá naquele sábado.',
    media: [
      { type: 'image', label: 'Foto 1' },
      { type: 'image', label: 'Foto 2' }
    ]
  },
  {
    id: 'e2025-4',
    year: 2025,
    category: 'torneio',
    categoryLabel: 'Torneio',
    title: 'Copa Arruda',
    date: '09 nov 2025',
    location: 'Rua do Machado',
    photos: 60,
    videos: 5,
    text: 'A maior copa já organizada pela arena, com times de fora do bairro também disputando o título.',
    fullDescription: 'A Copa Arruda cresceu tanto que passou a receber times de fora do bairro. Duas semanas de fase de grupos, mata-mata disputado até o fim e a maior premiação já entregue por um torneio da arena.',
    media: [
      { type: 'video', label: 'Vídeo 1' },
      { type: 'video', label: 'Vídeo 2' },
      { type: 'image', label: 'Foto 1' }
    ]
  },
  {
    id: 'e2026-1',
    year: 2026,
    category: 'torneio',
    categoryLabel: 'Torneio',
    title: 'Torneio de Vôlei - Etapa de Fevereiro',
    date: '16 fev 2026',
    location: 'Rua do Machado',
    photos: 42,
    videos: 3,
    text: 'Times de quatro, dois dias de jogos e a Arena Clube Arruda lotada no sábado.',
    fullDescription: 'Etapa de abertura da temporada 2026: times de quatro jogadores, dois dias de jogos corridos e uma quadra lotada do início ao fim do sábado. Primeira de várias etapas programadas pro ano.',
    media: [
      { type: 'video', label: 'Vídeo 1' },
      { type: 'image', label: 'Foto 1' },
      { type: 'image', label: 'Foto 2' }
    ]
  },
  {
    id: 'e2026-2',
    year: 2026,
    category: 'aniversario',
    categoryLabel: 'Aniversário',
    title: 'Aniversário de 2 Anos',
    date: '12 mar 2026',
    location: 'Rua do Machado',
    photos: 58,
    videos: 6,
    text: 'Dois anos de arena celebrados com torneio relâmpago, música ao vivo e bolo gigante.',
    fullDescription: 'A festa de 2 anos veio com torneio relâmpago pela manhã, música ao vivo durante a tarde toda e um bolo gigante partido no fim do dia com todo mundo que passou pela arena nesses dois anos.',
    media: [
      { type: 'video', label: 'Vídeo 1' },
      { type: 'video', label: 'Vídeo 2' },
      { type: 'image', label: 'Foto 1' },
      { type: 'image', label: 'Foto 2' }
    ]
  },
  {
    id: 'e2026-3',
    year: 2026,
    category: 'confraternizacao',
    categoryLabel: 'Confraternização',
    title: 'Confraternização da Galera',
    date: '28 abr 2026',
    location: 'Rua da Regeneração',
    photos: 21,
    videos: 0,
    text: 'Encontro informal entre os times fixos da Unidade 2, regado a hambúrguer e resenha.',
    fullDescription: 'Um encontro mais informal, sem torneio nem premiação — só os times fixos da Unidade 2 se reunindo pra comer o hambúrguer da Taias e trocar resenha depois de mais uma temporada de jogos.',
    media: [
      { type: 'image', label: 'Foto 1' },
      { type: 'image', label: 'Foto 2' }
    ]
  },
  {
    id: 'e2026-4',
    year: 2026,
    category: 'torneio',
    categoryLabel: 'Torneio',
    title: 'Copa Arruda 2026',
    date: '09 jun 2026',
    location: 'Rua do Machado',
    photos: 76,
    videos: 8,
    text: 'Maior edição da Copa Arruda até hoje, com transmissão ao vivo das semifinais.',
    fullDescription: 'A edição 2026 da Copa Arruda bateu recorde de inscritos e, pela primeira vez, teve as semifinais transmitidas ao vivo pra quem não pôde estar na arena. Duas semanas de fase de grupos e uma final decidida nos pênaltis.',
    media: [
      { type: 'video', label: 'Vídeo 1' },
      { type: 'video', label: 'Vídeo 2' },
      { type: 'image', label: 'Foto 1' },
      { type: 'image', label: 'Foto 2' }
    ]
  }
];

document.addEventListener('DOMContentLoaded', function () {

  var currentYear = null; // definido logo abaixo com o ano mais recente
  var currentCategory = 'todos';

  var yearTabsEl = document.getElementById('yearTabs');
  var yearIndicatorEl = document.getElementById('yearIndicator');
  var categoryFiltersEl = document.getElementById('categoryFilters');
  var gridEl = document.getElementById('historicoGrid');
  var emptyStateEl = document.getElementById('emptyState');
  var statEventsEl = document.getElementById('statEvents');
  var statPhotosEl = document.getElementById('statPhotos');
  var statVideosEl = document.getElementById('statVideos');

  /* ---------- Monta os botões de ano a partir dos dados (do mais recente pro mais antigo) ---------- */
  function buildYearTabs() {
    var years = [];
    historicoData.forEach(function (item) {
      if (years.indexOf(item.year) === -1) years.push(item.year);
    });
    years.sort(function (a, b) { return b - a; }); // mais recente primeiro

    years.forEach(function (year, i) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'h-years__year' + (i === 0 ? ' is-active' : '');
      btn.textContent = year;
      btn.dataset.year = year;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');

      btn.addEventListener('click', function () {
        document.querySelectorAll('.h-years__year').forEach(function (b) {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');
        moveYearIndicator(btn);

        currentYear = Number(btn.dataset.year);
        render();
      });

      yearTabsEl.appendChild(btn);
    });

    currentYear = years[0]; // ano mais recente selecionado por padrão
  }

  /* ---------- Move o indicador (pill) verde até o ano ativo ---------- */
  function moveYearIndicator(activeTab) {
    if (!yearIndicatorEl || !activeTab) return;
    yearIndicatorEl.style.width = activeTab.offsetWidth + 'px';
    yearIndicatorEl.style.transform = 'translateX(' + activeTab.offsetLeft + 'px)';
  }

  /* ---------- Filtro por categoria ---------- */
  categoryFiltersEl.querySelectorAll('.h-filter').forEach(function (btn) {
    btn.addEventListener('click', function () {
      categoryFiltersEl.querySelectorAll('.h-filter').forEach(function (b) {
        b.classList.remove('is-active');
      });
      btn.classList.add('is-active');
      currentCategory = btn.dataset.category;
      render();
    });
  });

  /* ---------- Gera o card de um evento (mesmo layout de .event-card, com o badge de categoria e o botão "Ver evento") ---------- */
  function buildCard(item) {
    var article = document.createElement('article');
    article.className = 'event-card reveal' + (item.videos > 0 ? ' event-card--video' : '');

    var mediaHtml = '<div class="event-card__media">';
    mediaHtml += '<span class="event-card__badge">' + item.categoryLabel + '</span>';
    if (item.videos > 0) {
      mediaHtml += '<span class="event-card__video-tag">Vídeo</span>';
      mediaHtml += '<span class="event-card__play" aria-hidden="true">&#9658;</span>';
    }
    mediaHtml += '<span class="event-card__placeholder">' + item.title.charAt(0) + '</span>';
    mediaHtml += '</div>';

    var bodyHtml =
      '<div class="event-card__body">' +
        '<p class="event-card__meta"><span>' + item.date + '</span><span>' + item.location + '</span></p>' +
        '<h3 class="event-card__title">' + item.title + '</h3>' +
        '<p class="event-card__text">' + item.text + '</p>' +
        '<button class="event-card__link" type="button">Ver evento <span aria-hidden="true">&#8594;</span></button>' +
      '</div>';

    article.innerHTML = mediaHtml + bodyHtml;
    article.querySelector('.event-card__link').addEventListener('click', function () {
      openLightbox(item);
    });

    return article;
  }

  /* ---------- Renderiza o grid + o contador, de acordo com o ano/categoria selecionados ---------- */
  function render() {
    var filtered = historicoData.filter(function (item) {
      var matchesYear = item.year === currentYear;
      var matchesCategory = currentCategory === 'todos' || item.category === currentCategory;
      return matchesYear && matchesCategory;
    });

    gridEl.innerHTML = '';
    filtered.forEach(function (item) { gridEl.appendChild(buildCard(item)); });

    emptyStateEl.hidden = filtered.length > 0;

    // Contador sempre reflete o ANO inteiro (não só o filtro de categoria),
    // pra dar a real dimensão do acervo daquele ano
    var yearItems = historicoData.filter(function (item) { return item.year === currentYear; });
    var totalPhotos = yearItems.reduce(function (sum, item) { return sum + item.photos; }, 0);
    var totalVideos = yearItems.reduce(function (sum, item) { return sum + item.videos; }, 0);

    statEventsEl.textContent = yearItems.length;
    statPhotosEl.textContent = totalPhotos;
    statVideosEl.textContent = totalVideos;

    observeReveals();
  }

  /* ---------- Reveal on scroll (mesmo motor usado no projeto principal) ---------- */
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function observeReveals() {
    var revealElements = gridEl.querySelectorAll('.reveal');

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function (el) { observer.observe(el); });
  }

  /* =====================================================
     LIGHTBOX (aberto pelo botão "Ver evento")
     ===================================================== */
  var lightboxEl = document.getElementById('lightbox');
  var lightboxBackdrop = document.getElementById('lightboxBackdrop');
  var lightboxClose = document.getElementById('lightboxClose');
  var lightboxTitle = document.getElementById('lightboxTitle');
  var lightboxDate = document.getElementById('lightboxDate');
  var lightboxDesc = document.getElementById('lightboxDesc');
  var lightboxMedia = document.getElementById('lightboxMedia');
  var lightboxThumbs = document.getElementById('lightboxThumbs');
  var lightboxPrev = document.getElementById('lightboxPrev');
  var lightboxNext = document.getElementById('lightboxNext');

  var activeItem = null;
  var activeMediaIndex = 0;

  function openLightbox(item) {
    activeItem = item;
    activeMediaIndex = 0;

    lightboxTitle.textContent = item.title;
    lightboxDate.textContent = item.date + ' · ' + item.location;
    // Descrição mais detalhada do evento (diferente do resumo curto do card)
    lightboxDesc.textContent = item.fullDescription || item.text;

    lightboxThumbs.innerHTML = '';
    item.media.forEach(function (media, i) {
      var thumb = document.createElement('button');
      thumb.type = 'button';
      thumb.className = 'h-lightbox__thumb' + (i === 0 ? ' is-active' : '');
      thumb.textContent = media.type === 'video' ? '\u25B6' : (i + 1);
      thumb.addEventListener('click', function () { showMedia(i); });
      lightboxThumbs.appendChild(thumb);
    });

    showMedia(0);
    lightboxEl.hidden = false;
    document.body.style.overflow = 'hidden'; // trava o scroll da página com o lightbox aberto
  }

  function closeLightbox() {
    lightboxEl.hidden = true;
    activeItem = null;
    document.body.style.overflow = '';
  }

  /* ---------- Mostra a mídia do índice recebido (com wrap: depois da última volta pra primeira) ---------- */
  function showMedia(index) {
    if (!activeItem) return;
    var total = activeItem.media.length;
    activeMediaIndex = ((index % total) + total) % total;
    var media = activeItem.media[activeMediaIndex];

    // Sem arquivo real ainda: mostra um placeholder com o rótulo.
    // TODO: quando tiver os arquivos reais, trocar por:
    //   <img src="..."> pra foto, ou <video src="..." controls> pra vídeo.
    lightboxMedia.innerHTML =
      '<span class="h-lightbox__media-placeholder">' +
        (media.type === 'video' ? '&#9658; ' : '') + media.label +
      '</span>';

    lightboxThumbs.querySelectorAll('.h-lightbox__thumb').forEach(function (thumb, i) {
      thumb.classList.toggle('is-active', i === activeMediaIndex);
    });
  }

  lightboxPrev.addEventListener('click', function () { showMedia(activeMediaIndex - 1); });
  lightboxNext.addEventListener('click', function () { showMedia(activeMediaIndex + 1); });
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', function (event) {
    if (lightboxEl.hidden) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') showMedia(activeMediaIndex - 1);
    if (event.key === 'ArrowRight') showMedia(activeMediaIndex + 1);
  });

  /* ---------- Inicialização ---------- */
  buildYearTabs();
  render();

  // Posiciona o indicador do ano depois que a fonte Oswald carregar
  // (senão o offsetWidth do botão pode ser calculado com o texto no
  // tamanho errado)
  window.addEventListener('load', function () {
    moveYearIndicator(document.querySelector('.h-years__year.is-active'));
  });

  var yearIndicatorResizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(yearIndicatorResizeTimer);
    yearIndicatorResizeTimer = setTimeout(function () {
      moveYearIndicator(document.querySelector('.h-years__year.is-active'));
    }, 150);
  });
});
