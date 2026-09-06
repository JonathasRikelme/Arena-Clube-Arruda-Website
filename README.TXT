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
Placeholder foto	
#7B2CBF (roxo)
Placeholder mapa	
#FFD700 (amarelo)
Fonte de título	Oswald
Fonte de texto	Barlow

Todos os locais que teriam fotografias reais (hero, cards de esporte, "por dentro da arena", equipe, eventos, pódio, avatares) estão marcados com a classe .placeholder-img (roxo), prontos para receber as imagens definitivas. O mapa usa um placeholder amarelo até a integração real com o Google Maps.

-------------- Funcionalidades já implementadas em JS --------------
Menu mobile: abre/fecha o menu hamburguer (ativo também no tablet).
Abas de unidade (Unidade 1 / Unidade 2): trocam dinamicamente nome, endereço, mapa (iframe), quadras, comodidades, app e horários, a partir de um objeto de dados (unitsData) em main.js.
Lista da equipe: clique em um membro atualiza o destaque visual.
Carrossel de depoimentos: setas de navegação (anterior/próximo).

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