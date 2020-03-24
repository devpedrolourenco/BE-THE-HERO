# SEMANA OMNISTACK
 
Como desenvolvedor web precisamos saber JavaScript.
 
Depois de 2015 JS passou por várias mudanças que tornou ela muito poderosa, e todos os anos vem atualizando.
 
## O QUE E BACKEND e FRONTEND ?
 
>Back-end e a parte que o usuário não enxerga.
 
<img src="/docs/img/01.png">
 
Para comunicar com o Front tanto web, services mobiles, e serviços externos usamos o **JSON (JAVASCRIPT OBJECT NOTATION)**, que é uma estrutura de dados, ou seja basicamente é uma maneira de representar dados através de uma estrutura.
 
<img src="/docs/img/02.png">

## CRIANDO O PROJETO COM NODE.JS
 
1. Criando uma pasta dentro do projeto chamada **backend**
2. Dentro da pasta backend irá executar o comando:
 
```
npm init -y
```
3. Após isso iremos reparar que foi criado um package.json
4. Após isso vamos instalar o express, o express ele é um framework que ajuda nas rotas da aplicação e ele também é conhecido como um microframework, afinal ele tem pouquíssimas funcionalidades dele, o restante devemos programar por nós mesmo. Usamos o comando abaixo para instalar ele:
 
```
npm install express
```
Se olharmos no package.json foi criado junto com o express a seguinte notação.
 
```JSON
 "dependencies": {
   "express": "^4.17.1"
 }
```
5. Em seguida criamos o arquivo index.js

**QUANDO QUERO IMPORTAR ALGO PARA DENTRO DO NODE USAMOS:**

```js
const nomeDaVariavel = o quer quer importar
```

## ENTENDENDO O REACT

<img src="/docs/img/03.png">

<img src="/docs/img/04.png">

## CRIANDO O REACT 

Uma maneira simples e usar uma ferramenta criada pelo facebook chamada Create React app que ja cria toda a estrutura de um projeto react.

```zsh
$ npx create-react-app frontend
```

## ENTENDENDO REACTNATIVE 

<img src="/docs/img/05.png">

<img src="/docs/img/06.png">

<img src="/docs/img/07.png">

<img src="/docs/img/08.png">


# CRIANDO A BASE DA APLICAÇÃO 
 
 
MÉTODOS HTTP
 
- GET: Buscar uma informação no back-end
- POST: Criar uma informação no back-end
- PUT: Alterar uma informação no back-end
- Delete: Deletar uma informação no back-end
 
 
 
 - TIPOS DE PAR METROS:
  
 - Query Params: Parâmetros nomeados na rota enviados na rota após o símbolo de "?"(filtros, paginação.)
 
 - Route Params: Parâmetros utilizados para identificar recursos.
   
 - Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
  
 
 

PARA NÃO FICAR REINICIANDO INSTALAMOS O NODEMOS

```bash
npm install nodemon -D

```
Porque -D? nesse caso ele cria apenas como uma dependencia no package.json onde iremos ver apenas como dev, ou seja usado apenas em ambiente de desenvolvimento, ja que em producao executaremos o node apenas 1x e nao precisaremos ficar monitorando.


E como fazemos para executar o nodemon automatico, se formos em package.json iremos reparar que tera uma aba scripts, para criar um scripts personalizados ou seja irei criar um script personalizado chamado start

## BANCO DE DADOS

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft, SQL server
 * 
 * NoSQL: mongoDB, CouchDB, etc.
 */

Podemos usar duas abordagens usando o:

Driver do banco: onde iremos escrever no codigo ex. ```(SELECT * FROM users)```

ou

Query Builder:onde iremos escrever no codigo ja em JS ex.  ``` table(‘users’).select(‘*’).where(); ```

para usar a **Query Builder** usaremos o http://knexjs.org/


no caso o processo de instalação e explicado no próprio site do projeto. 

Para iniciar a conexão com banco de dados vamos iniciar com o comando.

```
$ npx knex init
```

ENTIDADES DA APLICAÇÃO PARA O BD:

Entidade chamada ONG
Entidade chamado: caso (incident)

FUNCIONALIDADES

login ong
logout ong
cadastro ong
cadastrar novos casos
deletar novos casos
listar casos específicos de uma ong

listar todos os casos (app)
entrar em contato com a ong.


Para criar e armazenar um histórico das tabelas, podemos usar uma api chamada migrations também do KNEXJS. 
