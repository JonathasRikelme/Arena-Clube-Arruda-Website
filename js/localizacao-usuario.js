/* Evita o salto para o topo caso os dados da unidade ainda não tenham sido carregados. */
(function () {
  'use strict';

  var directionsBtn = document.getElementById('locationDirectionsBtn');
  if (!directionsBtn) return;

  directionsBtn.addEventListener('click', function (event) {
    if (!directionsBtn.getAttribute('href') || directionsBtn.getAttribute('href') === '#') {
      event.preventDefault();
    }
  });
})();
