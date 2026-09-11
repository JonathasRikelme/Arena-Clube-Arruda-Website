# Arena Clube Arruda

Website institucional da **Arena Clube Arruda**, desenvolvido para apresentar a estrutura da arena, esportes, unidades, equipe, eventos, depoimentos e canais de contato.

O projeto foi desenvolvido com foco em uma experiência visual moderna, responsiva e com microinterações suaves, mantendo a identidade visual da Arena.

---

## Sobre o projeto

A proposta do site é funcionar como uma apresentação digital da Arena Clube Arruda, permitindo que o visitante:

- conheça os esportes oferecidos;
- visualize as unidades e suas informações;
- conheça os espaços da arena;
- conheça a equipe;
- acompanhe eventos e torneios;
- veja depoimentos de alunos;
- entre em contato para reservar uma quadra.

O projeto utiliza uma estrutura **Front-End sem framework**, com HTML, CSS e JavaScript.

---

## Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **Google Fonts**
  - Oswald
  - Barlow
- **Google Maps Embed**
- CSS Grid e Flexbox
- Media Queries
- Intersection Observer API
- Pointer Events API

---

## Estrutura do projeto

```text
Arena-Clube-Arruda/
│
├── Assets/
│   ├── Favicons/
│   ├── Images/
│   │   ├── Capas De Videos/
│   │   ├── Equipe/
│   │   ├── Eventos/
│   │   ├── FeedBack/
│   │   ├── Podium/
│   │   ├── Spaces/
│   │   └── Sports/
│   └── Videos/
│
├── css/
│   ├── base.css
│   ├── header.css
│   ├── hero.css
│   ├── sports.css
│   ├── location.css
│   ├── spaces.css
│   ├── team.css
│   ├── events.css
│   ├── podium.css
│   ├── FeedBacks.css
│   ├── cta.css
│   ├── footer.css
│   └── responsive.css
│
├── js/
│   └── main.js
│
├── index.html
└── README.md
```

---

## Seções do site:

### Hero

Seção principal de apresentação da Arena, com imagem de fundo, chamada principal e botões de ação.

### Esportes

Apresenta os principais esportes disponíveis na Arena:

- Vôlei
- Futebol Society
- Futevôlei

### Localização / Unidades

Permite alternar entre as unidades da Arena.

Cada unidade possui seus próprios dados, armazenados no `main.js`, incluindo:

- nome;
- endereço;
- mapa;
- quantidade de quadras;
- comodidades;
- aplicativo de replay;
- horários;
- link para obter direções.

A troca entre unidades possui **crossfade** para evitar uma mudança brusca de conteúdo.

### Espaços

Apresenta visualmente os espaços da Arena através de cards com imagens e informações sobre cada ambiente.

### Equipe

Apresenta os integrantes da equipe com:

- número;
- nome;
- função;
- foto;
- biografia.

A lista possui um **indicador verde deslizante vertical**, inspirado no comportamento do indicador utilizado na seção de unidades.

A troca de integrante também utiliza um **crossfade** entre foto e biografia.

### Eventos e torneios

Exibe eventos realizados pela Arena.

Os cards podem conter imagens ou vídeos.

Os vídeos são carregados somente quando o usuário interage com o card, evitando o carregamento de todos os arquivos pesados logo na abertura da página.

Em tela cheia, os vídeos utilizam `object-fit: contain` para que o conteúdo completo fique visível.

### Pódio

Seção destinada aos destaques e resultados de eventos/torneios.

### Feedback / Recado dos alunos

Carrossel de depoimentos com:

- 6 comentários;
- 3 cards visíveis no desktop convencional;
- 4 cards em telas 2K e 4K;
- 2 cards em tablet;
- 1 card em mobile;
- navegação por setas;
- navegação por indicadores;
- autoplay após 5 segundos sem interação;
- reset do contador após interação;
- suporte a arraste com mouse/toque;
- loop infinito real;
- transição horizontal suave.

O carrossel utiliza clones internos para manter a continuidade visual e impedir aquele salto perceptível ao passar do último depoimento para o primeiro.

### CTA

Chamada final para contato e reserva.

### Footer

Contém informações da Arena, unidades, contatos e crédito de desenvolvimento.

---

## Sistema de responsividade

A responsividade é organizada principalmente no arquivo:

```text
css/responsive.css
```

A estrutura possui breakpoints específicos para:

- Tablet: até `1024px`
- Mobile: até `640px`
- Full HD: a partir de `1920px`
- 2K: a partir de `2560px`
- 4K: a partir de `3840px`

As telas grandes possuem ajustes específicos de:

- largura dos containers;
- tipografia;
- espaçamentos;
- tamanho dos cards;
- botões;
- grids;
- conteúdo das seções;
- carrossel de feedback.

O comportamento mobile é mantido separado para evitar que ajustes destinados a monitores grandes prejudiquem smartphones.

---

## Sistema de animações

As animações do projeto utilizam variáveis centralizadas no `base.css`:

```css
--ease-out
--ease-bounce
--dur-fast
--dur-base
--dur-slow
```

Isso mantém uma identidade consistente entre as microinterações.

### Reveal on Scroll

Elementos com a classe:

```html
class="reveal"
```

entram na tela utilizando o `IntersectionObserver` do JavaScript.

Também existem variações:

```html
reveal--left
reveal--right
```

para entradas laterais.

Alguns grids possuem efeito de **stagger**, fazendo cada elemento aparecer com um pequeno atraso em relação ao anterior.

### Indicador das unidades

O indicador verde das abas de unidades é movimentado pelo JavaScript utilizando a posição e largura reais da aba ativa.

### Indicador da equipe

A equipe utiliza o mesmo conceito visual, porém com movimento **vertical**.

O JavaScript calcula:

- altura do item ativo;
- posição vertical;
- reposicionamento durante resize.

### Hover dos cards

Cards de diferentes seções possuem microinterações de elevação e/ou zoom suave.

### Acessibilidade de movimento

O projeto respeita:

```css
@media (prefers-reduced-motion: reduce)
```

reduzindo animações e transições quando o usuário prefere menos movimento.

---

## JavaScript

O arquivo principal é:

```text
js/main.js
```

Ele centraliza a lógica interativa da página.

Entre suas responsabilidades estão:

- menu mobile;
- dados e troca de unidades;
- indicador das unidades;
- crossfade da localização;
- carrossel infinito de feedback;
- autoplay dos depoimentos;
- navegação por setas;
- navegação por dots;
- drag/swipe dos depoimentos;
- indicador vertical da equipe;
- troca de integrantes;
- crossfade da equipe;
- reveal on scroll;
- lazy load dos vídeos de eventos;
- reprodução dos vídeos.

O código é organizado por blocos de comentários para facilitar futuras manutenções.

---

## Carrossel de feedback

O carrossel possui uma lógica de loop baseada em clones dos cards originais.

A quantidade de cards visíveis é definida dinamicamente:

```text
Mobile       → 1
Tablet       → 2
Desktop      → 3
2K / 4K      → 4
```

O usuário pode interagir através de:

- seta anterior;
- seta próxima;
- dots;
- arraste horizontal.

Qualquer interação reinicia o temporizador de 5 segundos.

Se não houver interação, o próximo depoimento é exibido automaticamente.

---

## Organização do CSS

Cada seção possui seu próprio arquivo para facilitar manutenção:

| Arquivo | Responsabilidade |
|---|---|
| `base.css` | Reset, variáveis, tipografia, botões e animações genéricas |
| `header.css` | Cabeçalho e navegação |
| `hero.css` | Hero |
| `sports.css` | Esportes |
| `location.css` | Unidades e localização |
| `spaces.css` | Espaços da Arena |
| `team.css` | Equipe |
| `events.css` | Eventos e vídeos |
| `podium.css` | Pódio |
| `FeedBacks.css` | Depoimentos e carrossel |
| `cta.css` | CTA final |
| `footer.css` | Rodapé |
| `responsive.css` | Responsividade geral |

---

## Como executar localmente

Como o projeto é composto por HTML, CSS e JavaScript puro, não existe dependência de Node.js ou framework para executar a página.

### Opção 1 — Live Server

Abra o projeto no VS Code e utilize a extensão **Live Server**.

Depois abra o endereço fornecido pelo Live Server.

### Opção 2 — Servidor local

Também é possível utilizar qualquer servidor HTTP local.

Por exemplo, com Python:

```bash
python -m http.server
```

Depois acesse:

```text
http://localhost:8000
```

É recomendado utilizar um servidor local em vez de abrir o `index.html` diretamente pelo navegador, especialmente por causa de recursos externos e comportamento de alguns navegadores.

---

## Desenvolvimento

O projeto foi desenvolvido para a **Arena Clube Arruda** como um projeto comercial real, com foco em:

- apresentação profissional;
- responsividade;
- experiência do usuário;
- microinterações;
- organização do código;
- facilidade de manutenção;
- adaptação para diferentes resoluções.

---

## Desenvolvedor

**Jonathas Rikelme**

Desenvolvedor Front-End / Estudante de Análise e Desenvolvimento de Sistemas.

GitHub: `github.com/JonathasRikelme`

---

## Status

**Em desenvolvimento / evolução contínua.**

O projeto pode receber novas informações, imagens, eventos, integrantes, unidades e ajustes visuais conforme as necessidades da Arena Clube Arruda.
