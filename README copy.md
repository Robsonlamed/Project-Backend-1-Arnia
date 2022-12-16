<h1 align="center"> Books and Reviews API - Serverless Framework Node Express API </h1>



Esse é o repositório para o back-end do projeto Books and Reviews.
Foi criada uma API Rest com Node Express.

Tecnologias utilizadas
  Node.js
  Express
  Mongoose (mongoDB)

Estrutura do projeto

A estrutura de pastas do projeto é explicada a seguir:

Nome	Descrição
handler.js	Entrada da aplicação, contém as rotas e conexão ao banco de dados.
node_modules	Contém todas as dependências npm
src	Contém os diretórios src/db, src/posts e src/utils
src/db	Contém arquivo seeder.js, para realizar um processo de seeding inicial
**src/posts **	Contém todo o domínio de Posts: com seus respectivos controllers, models, repositories, services, dtos, factory e middlewares.
src/posts/mocks	Contém todos os mocks da aplicação.
src/posts/controllers	Contém o controller de Posts com os métodos: getAll, getById, create, update e delete. Acompanha arquivo de testes de controller.
src/factories	Contém função postFactory, responsável por instanciar repository, service e controller.
src/middlewares	Contém funções de validação de "title" e "content" recebidos das requisições, assim como função para retornar erros de Promise.
src/models	Contém o Schema para a model de posts e cria Model da aplicação.
src/repositories	Contém classe PostRepository: repositório com os métodos getAll, getById, create, update e delete.
package.json	Contém todas as dependências instaladas assim como os scripts da aplicação
src/utils	Contém 3 arquivos: 1. json.validator.js para validar JSONs, 2. status.code.js para concentrar os status e mensagens da aplicação. 3. testes de status.code.js
serverless.yml	Declara o serviço serverless, define o cloud provider (AWS) e funções e eventos a serem executados no deploy