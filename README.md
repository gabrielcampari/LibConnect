<<<<<<< HEAD
# LibConnect

### Especificações:

Um API RESTFUL de uma biblioteca de livros feita em Node.JS integrada a um banco de dados NOSQL de mongoDB em nuvem.

> O que é rest? Rest é a representação de estado de transferência onde representa um padrão para API's web com protocolo HTTP.
> E o que são API's, essas por sua vez são interfaces usadas na programação. 

A API Rest desse software será uma biblioteca virtual para o armazenamento de livros e retirada(alugar) de livros, além de outras funções http.

### Construção do software: 

Por ser escolhido o node e JS para a criação do projeto, iremos iniciar utilizando nosso terminal para inserir o código a seguir, assim criando nosso package.json. (Caso não tenha instalado em sua máquina, deverá baixar o node para utilização do mesmo e o editor de código usado foi o visual studio code).

~~~terminal
npm init -y 
~~~ 

Após isso, foi criado nosso `server.js` para iniciarmos a criação do servidor local para uso de comandos http solicitando e enviando informações para o banco de dados. 

Aqui iniciamos nosso servidor HTTP para solicitação e envio de dados online, através de requisições e resposta. Utilizamos a porta 3000 como endereço local para desenvolver a aplicação, assim solicitando requisições e enviando dados. 

Para iniciarmos nosso servidor, utilizamos o nodemon para assim ele gerenciar o servidor sem ter que iniciar e derrubar o servidor a todo momento. 

Para instalação:
~~~terminal
npm install nodemon@3.0.1
~~~ 

Assim, para iniciar o servidor basta utilizar o comando `npm run dev`. 

Após isso, utilizamos o framework Express(Express é um framework web para Node.js que simplifica o desenvolvimento de aplicações web e APIs). Para isso iremos instalar no terminal do vscode usando o comando `npm install express@4.18.1`. 

>Por que o express? Pois ele é o servidor mais famoso de Node.js em uso de servidores HTTP assim utilizaremos ele para melhor funcionalidade e eficâcia do código. 

Foi criado um basta src para arquivos de nossa API e dentro dela foi criada a app.js para iniciarmos o Express. Assim dentro de nosso app.js foi criado um array para books(nome substituto de produtos) com as informações: _id, nome, descricao, preco, qtd_estoque, criado_em. Dentro do app.js foi inserido os métodos para funcionalidades de HTTP onde dessa forma conseguimos realizar todas as operações do CRUD, onde app.get podemos solicitar dados, app.post inserimos dados, app.put ou app.patch para alterar e app.delete para deletar um dado. Em nosso app.js usamos os métodos htpp de GET, POST, UPDATE e DELETE, para realizarmos as requisições desejadas. Para realizarmos as demonstrações dos testes fizemos no Postman. Onde testamos, todos os métodos HTTP junto de nossas funções contruídas no app.js com cada um. 

>Mas por que os dados não ficam salvos? Pois os dados sem uma integração ao banco de dados apenas armazena dados em memória cache, o que não é o desejado, então por isso foi integrado o software à um banco nosql chamado mongodb. 

Como escolhemos o mongodb para ser nosso banco de dados, vamos usar ele via nuvem, onde usamos o MongoDB Atlas, para criar uma database lá, basta criar uma conta, configurar de acordo com suas necessidades e iniciar um cluster. 

Para instalar em sua máquina e configurar junto de sua API, utilize o seguinte código: 

~~~terminal
npm install mongodb
~~~ 

Será liberado um caminho para integração do banco e você deverá substituir a senha do admin apenas, o nosso utiliza:  

mongodb+srv://admin:uscs2024@cluster0.9ovlrlr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

Sendo os dados: 

nome do banco: livraria
nome: admin - 	
atlasAdmin@admin
senha: uscs2024

Com o ID do project: 665b630d294da13b7573479d

Um IP de: 0.0.0.0/0 foi inserido para obter acesso de qualquer lugar ao banco de dados. 

Após isso deve se instalar: 

~~~terminal
npm install mongoose@7.3.4
~~~ 

Assim se estabelecendo uma conexão com o banco de dados e a API através do dbConnect.js e as funções de conexão do mongoose. Para criarmos valores e coleções foi inserido em Usuario.js e Livro.js com seus tipos e requisitos. E as rotas foram colocadas nas pasta routes, liberando espaço em apps e melhorando o código. 

Após isso sempre que iniciar o `npm run dev`, o Servidor estará online e a conexão será estabelecida assim estando pronto para operação!

=======
# LibConnect

### This is a API-Restuful made in nodeJS, with a mongo data base

> 
>>>>>>> d0c92e235d41d689d46219ef47c34003ab5ca290
