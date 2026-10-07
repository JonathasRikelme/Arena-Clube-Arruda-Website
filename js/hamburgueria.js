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
      dot.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  /* ---------- Cria os indicadores ---------- */
  function buildTaiasDots() {
    taiasProducts.forEach(function (product, index) {
      var dot = document.createElement('button');
      dot.className = 'taias__dot' + (index === 0 ? ' is-active' : '');
      dot.type = 'button';
      dot.setAttribute('aria-label', 'Ir para ' + product.name);
      dot.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
      dot.addEventListener('click', function () {
        goToTaias(index, true);
      });
      taiasDots.appendChild(dot);
    });
  }

  /* ---------- Reinicia o autoplay após qualquer interação ---------- */
  function resetTaiasTimer() {
    clearTimeout(taiasTimer);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.hidden || taiasTrack.matches(':hover') || taiasTrack.contains(document.activeElement)) return;
    taiasTimer = setTimeout(function () {
      if (!taiasDragging) goToTaias(taiasIndex + 1, false);
      resetTaiasTimer();
    }, 7000);
  }

  taiasTrack.addEventListener('pointerenter', function () { clearTimeout(taiasTimer); });
  taiasTrack.addEventListener('pointerleave', resetTaiasTimer);
  taiasTrack.addEventListener('focusin', function () { clearTimeout(taiasTimer); });
  taiasTrack.addEventListener('focusout', function () { window.setTimeout(resetTaiasTimer, 0); });
  document.addEventListener('visibilitychange', resetTaiasTimer);

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
  taiasTrack.addEventListener('transitionend', function (event) {
    if (event.target !== taiasTrack || event.propertyName !== 'transform') return;
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
