<h1>Books and Reviews API - Serverless Framework Node Express API</h1>

<p>Esse é o repositório para o back-end do projeto Books and Reviews.</p>
<p>Foi criada uma API Rest com Node Express.</p>

<h2>Tecnologias utilizadas</h2>
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>Mongoose (mongoDB)</li>
</ul>

<h2>Estrutura do projeto</h2>

<p>A estrutura de pastas do projeto é explicada a seguir:</p>

<table border="1" >
  <thead align="left">
    <tr>
      <th> Nome </th>
      <th> Descrição </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> <strong>app.ts</strong> </td>
      <td> Entrada da aplicação, contém as rotas e conexão ao banco de dados. </td>
    </tr>
    <tr>
      <td> <strong>node_modules</strong> </td>
      <td> Contém todas as dependências npm </td>
    </tr>
    <tr>
      <td> <strong>src </strong></td>
      <td> Contém os diretórios src/__tests__, src/books, src/db, src/reviews e src/utils </td>
    </tr>
    <tr>
      <td><strong> src/db </strong></td>
      <td> Contém o diretório db/seeder e os arquivos:<br>
           mongo.connection.ts (para acessar o dotenv e fazer a conexão e desconexão do banco de dados)<br>
           e mongo.seeder.ts (chama a função seeder)
      </td>
    </tr>
    <tr>
      <td> <strong>src/db/seeder</strong> </td>
      <td> Contém o diretório seeder/__mocks__ e o arquivo seeder.ts (para realizar um processo de seeding inicial) </td>
    </tr>
    <tr>
      <td><strong> src/db/seeder/__mocks__</strong> </td>
      <td> Contém os arquivos:<br>
           books.seeder.ts (cria um novo book)
           e reviews.seeder.ts(cria um novo review)
      </td>
    </tr>
    <tr>
      <td>____________________</td>
      <td>____________________________________________________________________________________________________________________________</td>
    </tr>
    <tr>
      <td><strong> **src/books ** </strong></td>
      <td> Contém todo o domínio de books com seus respectivos:<br> controllers, models, repositories, services, factory, routes, __mocks__ e utils.</td>
    </tr>
    <tr>
      <td> <strong>src/books/__mocks__ </strong></td>
      <td> Contém todos os mocks da entidade books.</td>
    </tr>
    <tr>
      <td> <strong>src/books/controllers </strong></td>
      <td> Contém o controller de books com os métodos: getAll, getById, create, update e updateStatus. Acompanha arquivo de testes de controller.</td>
    </tr>
    <tr>
      <td> <strong>src/books/factories </strong></td>
      <td> Contém função booksFactory, responsável por instanciar repository, service e controller. Acompanha arquivo de testes de factory.</td>
    </tr>
    <tr>
      <td> <strong>src/books/models </strong></td>
      <td> Contém o Schema para a model de books e cria Model da aplicação. Acompanha arquivo de testes de models.</td>
    </tr>
    <tr>
      <td> <strong>src/books/repository</strong> </td>
      <td> Contém classe BooksRepository: repositório com os métodos getAll, getById, create, update e updateStatus. Acompanha arquivo de testes de repository.</td>
    </tr>
    <tr>
      <td> <strong>src/books/service</strong></td>
      <td> Contém classe BooksService: serviço com os métodos getAll, getById, create, update e updateStatus.Acompanha arquivo de testes de service.</td>
    </tr>
    <tr>
      <td> <strong>src/books/routes</strong>	</td>
      <td> Contém todas as rotas de requisiçoes de books</td>
    </tr>
    <tr>
      <td><strong> src/books/utils	</strong></td>
      <td> Contém 1 arquivo: <br>
      books.body.validator.ts (para validar os body's de books). Acompanha arquivo de testes de bodyValidator.</td>
    </tr>
    <tr>
      <td>____________________</td>
      <td>____________________________________________________________________________________________________________________________</td>
    </tr>
    <td> <strong>**src/reviews **</strong> </td>
      <td> Contém todo o domínio de reviews com seus respectivos:<br> controllers, models, repositories, services, factory, routes, __mocks__ e utils.</td>
    </tr>
    <tr>
      <td><strong> src/reviews/__mocks__ </strong></td>
      <td> Contém todos os mocks da entidade reviews.</td>
    </tr>
    <tr>
      <td><strong> src/reviews/controllers</strong> </td>
      <td> Contém o controller de reviews com os métodos: getAll, getById, create e update. Acompanha arquivo de testes de controller.</td>
    </tr>
    <tr>
      <td> <strong>src/reviews/factories </strong></td>
      <td> Contém função reviewsFactory, responsável por instanciar repository, service e controller. Acompanha arquivo de testes de factory.</td>
    </tr>
    <tr>
      <td> <strong>src/reviews/models </strong></td>
      <td> Contém o Schema para a model de reviews e cria Model da aplicação. Acompanha arquivo de testes de models.</td>
    </tr>
    <tr>
      <td><strong> src/reviews/repository</strong> </td>
      <td> Contém classe ReviewsRepository: repositório com os métodos getAll, getById, create e update. Acompanha arquivo de testes de repository.</td>
    </tr>
    <tr>
      <td><strong> src/reviews/service</strong>	</td>
      <td> Contém classe ReviewsService: serviço com os métodos getAll, getById, creat e update. Acompanha arquivo de testes de service.</td>
    </tr>
    <tr>
      <td><strong> src/reviews/routes	</strong></td>
      <td> Contém todas as rotas de requisiçoes de reviews</td>
    </tr>
    <tr>
      <td><strong> src/reviews/utils</strong>	</td>
      <td> Contém 1 arquivo: <br>
        review.body.validator.ts (para validar os body's de reviews). Acompanha arquivo de testes de bodyValidator.</td>
    </tr>
    <tr>
      <td>-------------------------------</td>
      <td>------------------------------------------------------------------------------------------------------------------</td>
    </tr>
    <tr>
      <td><strong> package.json</strong>	</td>
      <td> Contém todas as dependências instaladas assim como os scripts da aplicação e bibliotecas</td>
    </tr>
    <tr>
      <td><strong> src/utils</strong>	</td>
      <td> Contém 3 arquivos: <br>
        1. error.handler.ts (para validar error's). Acompanha arquivo de teste.  <br>
        2. status.code.ts (para concentrar os status e mensagens da aplicação). Acompanha arquivo de teste. <br>
        3. id.validator.ts (para validar ID). Acompanha arquivo de teste. <br>
      </td>
    </tr> 
    <tr>
      <td><strong> src/__tests__</strong>	</td>
      <td> Contém 1 arquivo: <br>
        1. integration.review.spec.ts (para fazer teste de integração de todos os metodos da aplicação). <br>
      </td>
    </tr> 
  </tbody>
</table>


