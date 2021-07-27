const express = require('express') // importar express
const route = require('./route') // importar arquivo de rotas do site
const path = require('path')

const server = express()  // criar servidor

server.set('view engine', 'ejs')  // indicando que o responsável pela view engine é a ejs

server.use(express.static("public")) // indicando que o express vai usar o conteudo estatico da pasta public (conteudo de acesso publico)

server.set('views', path.join(__dirname, 'views')) // juntando o path (o caminho do projeto no pc) com a pasta views 

server.use(express.urlencoded({extended: true})) // midwer: pega o conteudo do form, decodifica e passa para o controller

server.use(route) // usando o arquivo route no express

server.listen(3030, () => console.log("RODANDO")) // funcionalidade do express para indicar porta 


