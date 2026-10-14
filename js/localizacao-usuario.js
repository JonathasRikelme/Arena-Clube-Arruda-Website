/* Geolocalização compartilhada pelos botões Como chegar das unidades e da Taias. */
(function () {
  'use strict';

  if (window.arenaGeolocationState) return;

  var locationState = window.arenaGeolocationState = {
    status: 'pending',
    coords: null
  };

  function buildMapLocationUrl(destination) {
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(destination);
  }

  function buildDirectionsUrl(destination, coords) {
    var origin = coords.latitude + ',' + coords.longitude;
    return 'https://www.google.com/maps/dir/?api=1&origin=' + encodeURIComponent(origin) +
      '&destination=' + encodeURIComponent(destination);
  }

  window.arenaMapLocationUrl = buildMapLocationUrl;

  // O botão da unidade ativa já contém o destino cadastrado em unidades.js.
  var directionsBtn = document.getElementById('locationDirectionsBtn');
  if (directionsBtn) {
    directionsBtn.addEventListener('click', function (event) {
      var destination = '';
      try {
        destination = new URL(directionsBtn.href, window.location.href).searchParams.get('destination') || '';
      } catch (error) {
        destination = '';
      }

      if (!destination) {
        event.preventDefault();
        return;
      }

      directionsBtn.href = locationState.status === 'available' && locationState.coords
        ? buildDirectionsUrl(destination, locationState.coords)
        : (directionsBtn.dataset.mapLocationUrl || buildMapLocationUrl(destination));
    });
  }

  if (!navigator.geolocation || typeof navigator.geolocation.getCurrentPosition !== 'function') {
    locationState.status = 'unavailable';
    return;
  }

  try {
    navigator.geolocation.getCurrentPosition(function (position) {
      var coords = position && position.coords;
      if (!coords || !Number.isFinite(coords.latitude) || !Number.isFinite(coords.longitude)) {
        locationState.status = 'unavailable';
        locationState.coords = null;
        return;
      }

      locationState.coords = { latitude: coords.latitude, longitude: coords.longitude };
      locationState.status = 'available';
    }, function () {
      locationState.coords = null;
      locationState.status = 'unavailable';
    }, { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 });
  } catch (error) {
    locationState.coords = null;
    locationState.status = 'unavailable';
  }
})();
