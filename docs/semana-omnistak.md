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