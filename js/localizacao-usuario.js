/* ============================================================
   LOCALIZAÇÃO DO USUÁRIO — COMO CHEGAR

   1. Solicita a localização quando o site é aberto.
   2. Se o usuário permitir, guarda a localização.
   3. Se o usuário negar, não solicita novamente.
   4. "Como chegar":
      - localização disponível → traça a rota;
      - localização indisponível → abre apenas a Arena no Maps.
   ============================================================ */

(function () {
  'use strict';

  const directionsBtn = document.getElementById('locationDirectionsBtn');

  if (!directionsBtn) return;


  /* ============================================================
     CONFIGURAÇÕES
     ============================================================ */

  // Fallback: localização da Arena no Google Maps
  const ARENA_MAPS_URL =
    'https://maps.app.goo.gl/47o9qKFpYMKkZ3Zu6';


  /* ============================================================
     ESTADO DA LOCALIZAÇÃO
     ============================================================ */

  let localizacaoUsuario = null;

  /*
    Estados:

    'carregando'   → navegador ainda está buscando
    'disponivel'   → localização foi obtida
    'indisponivel' → usuário negou ou ocorreu algum erro
  */

  let estadoLocalizacao = 'carregando';


  /* ============================================================
     SOLICITAR LOCALIZAÇÃO AO ABRIR O SITE
     ============================================================ */

  function solicitarLocalizacao() {

    if (!navigator.geolocation) {

      estadoLocalizacao = 'indisponivel';

      return;
    }


    navigator.geolocation.getCurrentPosition(

      // SUCESSO
      function (position) {

        localizacaoUsuario = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };

        estadoLocalizacao = 'disponivel';

        console.log('Localização do usuário obtida.');
      },


      // ERRO / NEGOU A LOCALIZAÇÃO
      function (error) {

        localizacaoUsuario = null;

        estadoLocalizacao = 'indisponivel';

        console.log(
          'Localização indisponível:',
          error.message
        );
      },


      // CONFIGURAÇÕES
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }

    );
  }


  /* ============================================================
     PEGAR A UNIDADE SELECIONADA
     ============================================================ */

  function obterDestino() {

    const addressElement =
      document.getElementById('locationAddress');

    if (!addressElement) {
      return '';
    }

    return addressElement.textContent.trim();
  }


  /* ============================================================
     ABRIR SOMENTE A LOCALIZAÇÃO DA ARENA
     ============================================================ */

  function abrirLocalizacaoArena() {

    window.open(
      ARENA_MAPS_URL,
      '_blank',
      'noopener,noreferrer'
    );
  }


  /* ============================================================
     ABRIR ROTA ATÉ A UNIDADE
     ============================================================ */

  function abrirRota() {

    const destination = obterDestino();

    if (!localizacaoUsuario || !destination) {

      abrirLocalizacaoArena();

      return;
    }


    const latitude =
      localizacaoUsuario.latitude;

    const longitude =
      localizacaoUsuario.longitude;


    const routeUrl =
      'https://www.google.com/maps/dir/?api=1' +
      '&origin=' +
      latitude +
      ',' +
      longitude +
      '&destination=' +
      encodeURIComponent(destination);


    window.open(
      routeUrl,
      '_blank',
      'noopener,noreferrer'
    );
  }


  /* ============================================================
     BOTÃO "COMO CHEGAR"
     ============================================================ */

  directionsBtn.addEventListener(
    'click',
    function (event) {

      event.preventDefault();


      /*
        IMPORTANTE:

        Aqui NÃO solicitamos localização.

        A solicitação já aconteceu quando o site abriu.
      */


      // Localização já foi obtida
      if (estadoLocalizacao === 'disponivel') {

        abrirRota();

        return;
      }


      /*
        Localização foi negada,
        navegador não suporta ou ocorreu algum erro.

        Nesse caso abre somente a Arena.
      */

      if (estadoLocalizacao === 'indisponivel') {

        abrirLocalizacaoArena();

        return;
      }


      /*
        Caso o usuário clique enquanto o navegador
        ainda estiver processando a permissão.

        Não fazemos uma nova solicitação.

        Apenas abrimos a localização da Arena.
      */

      if (estadoLocalizacao === 'carregando') {

        abrirLocalizacaoArena();

        return;
      }

    }
  );


  /* ============================================================
     INICIAR AO ABRIR O SITE
     ============================================================ */

  solicitarLocalizacao();

})();