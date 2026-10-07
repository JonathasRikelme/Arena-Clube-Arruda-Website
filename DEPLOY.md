# Publicação e domínio próprio

O projeto é um site estático: não precisa de servidor de aplicação, banco de dados, Node.js ou processo que fique rodando. Depois de publicado em uma hospedagem estática, o provedor serve os arquivos continuamente e mantém o site disponível conforme o plano e o status da conta.

## Arquivos que devem ser publicados

Publique o conteúdo inteiro desta pasta, preservando a estrutura:

- `index.html` e `404.html` na raiz;
- pastas `Assets/`, `css/` e `js/`;
- `robots.txt` na raiz.

Não publique a pasta `.git` nem arquivos temporários do editor.

## Passos de publicação

1. Escolha uma hospedagem de site estático e envie a pasta do projeto ou conecte o repositório Git.
2. Defina `index.html` como página de entrada. Configure `404.html` como página de erro 404 se o provedor não fizer isso automaticamente.
3. Abra a URL temporária fornecida pelo provedor e confira navegação, imagens, vídeos, filtros, mapas, formulários/links e layout em celular e desktop.
4. Adicione o domínio próprio no painel da hospedagem. O provedor informará os registros DNS necessários para o domínio raiz e, se desejado, `www`.
5. Cadastre esses registros no painel onde o domínio foi registrado. Aguarde a propagação DNS e a emissão do certificado HTTPS pelo provedor.
6. Escolha uma versão principal do endereço (com ou sem `www`) e configure redirecionamento permanente da outra para ela.
7. Com o domínio final definido, complete os itens de SEO abaixo e envie o sitemap ao Google Search Console.

Antes do lançamento, substitua também o `TODO` do botão **Comprar** na seção Hamburgueria pelo endereço real de pedidos. Se a página de pedidos ainda não existir, o botão deve ser removido ou ocultado até ela estar pronta.

Os nomes e valores dos registros DNS variam entre provedores; use os valores exibidos no painel da hospedagem escolhida. Não há credenciais nem registros DNS específicos incluídos neste projeto.

## Configurações dependentes do domínio

O domínio ainda não foi colocado, então não há URLs fictícias embutidas. Quando a URL pública estiver definida:

- adicione `<link rel="canonical" href="https://DOMINIO/">` ao `<head>` de `index.html`;
- defina `og:url` e `og:image` com URLs absolutas públicas; use uma imagem de compartilhamento adequada (idealmente 1200 × 630 px);
- atualize `robots.txt` com a linha `Sitemap: https://DOMINIO/sitemap.xml`;
- crie `sitemap.xml` com a URL canônica final e envie-a ao Search Console;
- verifique propriedade do domínio no Search Console e solicite indexação da página inicial.

## Atualizações e disponibilidade

Após cada atualização, publique novamente a raiz do projeto ou faça push para a branch conectada à hospedagem. Para que o site continue no ar, mantenha o domínio renovado, a conta de hospedagem ativa e o DNS apontando para o provedor. A indexação por buscadores pode levar tempo e não pode ser garantida apenas pelo código.
