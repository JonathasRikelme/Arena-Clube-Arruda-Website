# Arena Clube Arruda

Website institucional da **Arena Clube Arruda**, desenvolvido com foco em apresentação comercial, experiência do usuário, responsividade e microinterações.

O projeto é um **Front-End sem framework**, utilizando HTML5, CSS3 e JavaScript Vanilla.

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- CSS Grid e Flexbox
- Media Queries
- Intersection Observer API
- Pointer Events API
- Google Fonts (Oswald e Barlow)
- Google Maps Embed

## Estrutura

```text
Arena-Clube-Arruda/
├── Assets/
│   ├── Favicons/
│   ├── Images/
│   │   ├── Capas De Videos/
│   │   ├── Eventos/
│   │   ├── FeedBack/
│   │   ├── Hamburguers/
│   │   ├── Podium/
│   │   ├── Spaces/
│   │   └── Sports/
│   └── Videos/
├── css/
│   ├── base.css
│   ├── header.css
│   ├── hero.css
│   ├── sports.css
│   ├── location.css
│   ├── spaces.css
│   ├── hamburgueria.css
│   ├── events.css
│   ├── podium.css
│   ├── FeedBacks.css
│   ├── cta.css
│   ├── footer.css
│   └── responsive.css
├── js/
│   ├── site.js
│   ├── navegacao.js
│   ├── unidades.js
│   ├── depoimentos.js
│   ├── hamburgueria.js
│   ├── eventos.js
│   ├── podium.js
│   └── localizacao-usuario.js
├── index.html
├── 404.html
├── robots.txt
├── DEPLOY.md
└── README.md
```

## Seções

### Hero

Apresentação principal da Arena, com chamada, descrição e ações de reserva.

### Esportes

Apresentação das modalidades oferecidas pela Arena, incluindo Vôlei, Futebol Society, Futevôlei e Beach Tennis.

### Localização / Unidades

Sistema de seleção entre as duas unidades. Os dados ficam centralizados em `unitsData` no `js/unidades.js`, incluindo endereço, mapa, quadras, comodidades, horários e aplicativo de replay.

A troca de unidade utiliza crossfade e o indicador verde acompanha a aba ativa. O link de rota acompanha a unidade selecionada e não solicita geolocalização automaticamente.

### Espaços

Cards apresentando os principais ambientes da Arena.

### Hamburgueria Taias

Seção comercial da **Hamburgueria Taias**, localizada dentro da Unidade 2 da Arena.

O conteúdo apresenta os produtos na seguinte ordem:

1. X-Tudo
2. Duplo
3. Cheddar
4. Bacon
5. Calabresa
6. Sertanejo
7. Burger

A seção utiliza um carrossel com:

- navegação por setas;
- indicadores (dots);
- autoplay a cada 7 segundos;
- reset do temporizador após interação;
- swipe/drag;
- loop infinito sem salto visual;
- sincronização entre imagem, nome, descrição e preço.

Os dados dos produtos ficam centralizados em `js/hamburgueria.js`, facilitando futuras alterações.

O botão **Comprar** possui um `TODO` diretamente no HTML para inserção manual do link externo de vendas da Taias. O botão **Localização** reutiliza o link da Unidade 2 já existente em `unitsData`.

As imagens dos hambúrgueres utilizadas no carrossel foram convertidas para **WebP** e redimensionadas para reduzir o peso dos assets e melhorar o carregamento.

### Eventos e Torneios

Cards com eventos e torneios da Arena. Os cards de vídeo carregam o vídeo somente após a interação do usuário, mantendo apenas a capa inicialmente.

### Pódio

Destaques dos campeões dos torneios apresentados no site.

### Feedback / Recado dos alunos

Carrossel infinito de depoimentos com navegação por setas e dots, autoplay, reset após interação, drag/swipe e quantidade de cards adaptada ao tamanho da tela.

### CTA e Footer

Área final de contato/reserva e informações institucionais da Arena.

## Responsividade

A responsividade é centralizada principalmente em `css/responsive.css`.

Breakpoints utilizados no projeto:

- até `1199px` — tablet e notebook compacto;
- até `640px` — mobile;
- a partir de `1920px` — Full HD;
- a partir de `2560px` — 2K;
- a partir de `3840px` — 4K.

As regras de telas grandes possuem ajustes específicos de tipografia, containers, espaçamentos, cards e componentes. As regras mobile permanecem separadas para evitar interferência entre os diferentes formatos.

## Animações

As animações utilizam variáveis centralizadas em `base.css`:

```css
--ease-out
--ease-bounce
--dur-fast
--dur-base
--dur-slow
```

O projeto possui, entre outros recursos:

- reveal on scroll com `IntersectionObserver`;
- microinterações de botões e cards;
- crossfade na troca de unidades;
- indicador deslizante das unidades;
- carrossel infinito de feedback;
- carrossel infinito da Hamburgueria Taias;
- suporte a `prefers-reduced-motion`.

## JavaScript

Os scripts são separados por responsabilidade e carregados na ordem necessária pelo `index.html`, mantendo JavaScript Vanilla e sem framework.

Entre suas responsabilidades estão:

- `navegacao.js`: menu mobile e fechamento com Escape;
- `unidades.js`: dados e troca de unidades, indicador, crossfade e renderização dos espaços;
- `depoimentos.js`: carrossel, autoplay e gestos dos feedbacks;
- `hamburgueria.js`: carrossel, autoplay, swipe e dados dos produtos Taias;
- `site.js`: header e reveal on scroll;
- `eventos.js`: filtros, expansão/recolhimento dos eventos e reprodução dos vídeos após interação;
- `podium.js`: alternância das categorias do pódio;
- `localizacao-usuario.js`: proteção do link de rota enquanto a unidade é renderizada.

## Boas práticas

- Separação de responsabilidades entre HTML, CSS e JavaScript.
- Dados dinâmicos centralizados em estruturas JavaScript.
- Reutilização de dados existentes, evitando duplicação.
- Uso de `loading="lazy"` em imagens apropriadas.
- Uso de WebP para imagens pesadas da Hamburgueria Taias.
- Uso de `decoding="async"` nas imagens do carrossel.
- `rel="noopener noreferrer"` em links externos abertos com `target="_blank"`.
- Proteções no JavaScript para evitar erros quando elementos ou dados não existem.
- Suporte a acessibilidade e redução de movimento.

## Execução local

O projeto não exige Node.js ou framework para funcionar.

A maneira recomendada é abrir o projeto através de um servidor local, como o **Live Server** do VS Code.

Também é possível utilizar Python:

```bash
python -m http.server
```

Depois, acessar:

```text
http://localhost:8000
```

## Publicação na internet

O projeto é um site estático e pode ser hospedado em um serviço de hospedagem estática ou servidor web. O guia de publicação está em `DEPLOY.md`. URL canônica, imagem absoluta para compartilhamento e sitemap devem ser preenchidos depois que o domínio final estiver definido.

O botão **Comprar** da Hamburgueria ainda precisa do URL real de vendas antes da publicação; ele está marcado no HTML com `TODO`.

## Desenvolvedor

**Jonathas Rikelme**

GitHub: `github.com/JonathasRikelme`

## Status

Projeto em desenvolvimento/evolução contínua para a **Arena Clube Arruda**.
