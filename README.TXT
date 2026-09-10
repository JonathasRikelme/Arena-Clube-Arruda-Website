Arena Clube Arruda

Site institucional da Arena Clube Arruda — quadras de vôlei, futevôlei e futebol society — desenvolvido em HTML, CSS e JavaScript puro, a partir de um wireframe do Figma (versões desktop e mobile).

-------------- Estrutura do projeto --------------
projeto/
│
├── index.html
│
├── css/
│   ├── base.css          # reset, variáveis CSS, tipografia e classes gerais
│   ├── header.css        # cabeçalho e navegação
│   ├── hero.css          # seção de destaque principal
│   ├── sports.css        # "Três esportes, um lugar"
│   ├── location.css      # "Escolha sua unidade" (mapa, abas, horários)
│   ├── spaces.css        # "Por dentro da arena"
│   ├── team.css          # "Quem toca a arena"
│   ├── events.css        # "Oque rolou por aqui" (eventos/torneios)
│   ├── podium.css        # "Campeões dos últimos torneios"
│   ├── testimonials.css  # "Recado dos alunos"
│   ├── cta.css           # chamada final para ação
│   ├── footer.css        # rodapé
│   └── responsive.css    # regras de responsividade (tablet e mobile)
│
└── js/
    └── main.js           # menu mobile, abas de unidade, seleção de equipe, carrossel
-------------- Identidade visual --------------
Elemento	Valor
Fundo claro	
#D9D9D9
Verde principal	
#2B6E45
Verde vivo (CTA)	
#22D66C
Branco	
#FFFFFF
Preto / escuro	
#18181B
Fonte de título	Oswald
Fonte de texto	Barlow

Todos os locais que teriam fotografias reais (hero, cards de esporte, "por dentro da arena", equipe, eventos, pódio, avatares) estão marcados com a classe .placeholder-img (roxo), prontos para receber as imagens definitivas. O mapa usa um placeholder amarelo até a integração real com o Google Maps.


-------------- Funcionalidades já implementadas em JS --------------

Menu mobile: abre/fecha o menu hamburguer (ativo também no tablet).
Abas de unidade (Unidade 1 / Unidade 2): trocam dinamicamente nome, endereço, mapa (iframe), quadras, comodidades, app e horários, a partir de um objeto de dados (unitsData) em main.js.
Lista da equipe: clique em um membro atualiza o destaque visual.
Carrossel de depoimentos: setas de navegação (anterior/próximo).

-------------- Animações --------------

Header: encolhe e ganha sombra depois de ~80px de scroll (classe .is-scrolled, aplicada via JS com throttle por requestAnimationFrame). Logo diminui junto. Links do menu ganham um underline animado no hover.

Hero: eyebrow, título, texto e botões entram em cascata (fade + slide) assim que a página carrega, via CSS puro (@keyframes + animation-delay), sem depender de JS.

Reveal on scroll: classe utilitária .reveal (+ variações .reveal--left / .reveal--right) aplicada nos cards de esporte, "por dentro da arena", equipe, eventos, pódio, depoimentos e CTA. Um único IntersectionObserver em main.js adiciona .is-visible quando o elemento entra na tela (uma vez só, com pequeno atraso em cascata nos grids via nth-child). Se prefers-reduced-motion estiver ativo no sistema do usuário, o JS pula o observer e mostra tudo direto, sem esperar o scroll.

Hovers: zoom sutil na imagem + elevação nos cards de esporte e evento; elevação simples nos cards de "por dentro da arena" e pódio; todo botão do site (.btn) ganhou elevação + sombra no hover, mesmo os que antes não tinham nenhum feedback. Todos os hovers "decorativos" (zoom, elevação de card) são protegidos por @media (hover: hover), pra não ficarem "grudados" depois de um toque no celular.

Abas de unidade: o fundo verde sólido da aba ativa virou um indicador (pill) que desliza suavemente entre as abas (.location__tab-indicator, posicionado via JS). Trocar de unidade agora faz um crossfade no mapa e nas informações (fade-out -> troca os dados -> fade-in) em vez da troca seca de antes.

Equipe: mesma lógica de crossfade ao clicar em outro membro (fade-out da foto/bio -> troca os dados -> fade-in).

Pódio: usa uma curva de easing com leve "overshoot" (--ease-bounce) na entrada, diferente do restante do site, reforçando a sensação de comemoração.

Eventos: ícone de play com um pulse contínuo e discreto, chamando atenção pros cards de vídeo.

CTA final: botão de WhatsApp com pulse contínuo e sutil (pausa no hover).

Todas as durações/curvas de easing ficam centralizadas em variáveis CSS no topo de base.css (--dur-fast/base/slow, --ease-out, --ease-bounce) — pra ajustar a velocidade das animações do site inteiro, basta mexer ali.

-------------- Como rodar localmente --------------

Não há build nem dependências é só abrir o index.html no navegador, ou servir a pasta com qualquer servidor estático:

bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .

Depois acesse http://localhost:8000.

-------------- Responsividade --------------

O layout foi construído em três larguras:

Desktop (a partir de 1025px): layout completo conforme o wireframe original.
Tablet (até 1024px): grids em 2 colunas e menu hamburguer.
Mobile (até 640px): colunas únicas, botões em largura total, e pequenos ajustes de ordem/conteúdo específicos do wireframe mobile (ex: apenas 3 cards de evento visíveis, ordem mapa → abas → informações na seção de localização).
-------------- Tecnologias --------------
HTML5 semântico
CSS3 (Grid, Flexbox, variáveis CSS, clip-path para os efeitos de "papel rasgado")
JavaScript puro (sem frameworks ou bibliotecas)