# Como Publicar no GitHub Pages (Para Leigos)

Este guia ensina como editar os arquivos diretamente pelo site do GitHub e manter a sua página (GitHub Pages) sempre atualizada de forma automática. Você **não precisa** baixar nenhum programa ou saber usar linhas de comando!

## Passo 1: Acesse seu Repositório no GitHub

1. Faça login na sua conta do [GitHub](https://github.com/).
2. Abra o repositório deste projeto (ex: `seu-usuario/mdn_calculator`).

## Passo 2: Editando os Arquivos

Sempre que precisar alterar algum valor de receita ou parceiro, faça o seguinte:

1. Na lista de arquivos do seu repositório, clique na pasta `data`.
2. Clique no arquivo que deseja editar (ex: `materials.js`).
3. No canto superior direito da caixa de código, clique no ícone de **lápis** (Edit this file).
4. Faça as alterações necessárias no código, conforme ensinado no guia de [Como Alterar Valores](Como-Alterar-Valores.md).

## Passo 3: Salvando as Alterações (Fazer um "Commit")

Após editar, você precisa salvar a versão nova:

1. Clique no botão verde **Commit changes...** (geralmente no topo à direita).
2. Uma janelinha vai abrir. Onde diz "Commit message", escreva um resumo do que você fez (ex: "Atualizado o preço da sucata").
3. Abaixo, pode deixar a opção "Commit directly to the `main` branch" marcada.
4. Clique novamente no botão verde **Commit changes**.

## Passo 4: Esperando o GitHub Pages Atualizar

O projeto já está configurado para o GitHub Pages.
Isso significa que **toda vez** que você altera e salva (faz um commit) um arquivo na pasta principal (`main`), o GitHub automaticamente começa a atualizar o site.

1. Para ver se já atualizou, clique na aba **Actions** no topo do repositório.
2. Você verá uma "bolinha amarela" girando indicando que o site está sendo montado.
3. Quando ficar com um "check" (✔️) verde, significa que a atualização terminou!
4. Acesse o link do seu site (geralmente `https://seu-usuario.github.io/mdn_calculator`) e aperte `F5` ou `Ctrl + R` (ou limpe o cache) para ver as novidades.

## Configuração Inicial do Pages (Se o site ainda não existir)

Se o projeto acabou de ser criado e o site ainda não está no ar, ative-o assim:

1. Vá na aba **Settings** do repositório.
2. No menu lateral esquerdo, clique em **Pages**.
3. Na seção "Build and deployment", em **Source**, certifique-se que está "Deploy from a branch".
4. Em **Branch**, selecione `main` (ou `master`) e a pasta `/ (root)`.
5. Clique em **Save**.
6. Aguarde alguns minutos e o link do seu site vai aparecer no topo desta mesma página!
