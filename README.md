# Interface layout

## Pré-requisitos:

- Você deve ter o `nodejs` instalado no seu sistema operacional
- Para melhor desfruto da aplicação utiliza a ferramenta `angular-cli`

## Execução

- Na primeira vez em que for abrir o projeto entre na pasta interface: `cd interface`
- Rode o comando `npm install` (se estiver em um ambiente mac ou linux, execute o comando como `sudo npm install`)
- Todas as dependencias serão instaladas
- Agora com as dependências instaladas excute o comando `ng serve` dentro da pasta interface.

(Talvez possa acontecer um erro de compilação com o `node-sass` devido ao npm não conseguir realizar a instalação do mesmo. No meu caso resolvi executando o seguinte comando: `npm install --save-dev  --unsafe-perm node-sass` ou para linux: `sudo npm install --save-dev  --unsafe-perm node-sass`)

- Se dessa vez o erro não ocorrer você pode acessar a porta localhost:4200 no seu browser, que por padrão o `ng serve` faz um build de desenvolvimento para você verificar sua aplicação, sempre recompilando quando um arquivo muda.

## Explicação

- Criei o projeto utilizando a nomenclatura BEM, o Angular framework, separei a aplicação em componentes e módulos.

- Basicamente ela faz a busca de dados de uma api e exibe na tela, sendo atualizada conforme as interações do usuário com o sistema.
