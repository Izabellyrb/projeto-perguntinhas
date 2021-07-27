const express = require('express') // importando express
const questionController = require('./controllers/questionController') // importando o questioncontroller
const roomController = require('./controllers/roomController') // importando o roomcontroller

const route = express.Router() // indica que a const route guarda as funcionalidades de rotas que o express tem

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))  // criando rota do dominio (/) p qndo acionar o servidor, abrir o index c/ renderização da part enter-room
route.get('/create-pass', (req, res) => res.render("index", {page:'create-pass'})) // ... abrir o index com a renderização da part create-pass

route.post('/create-room', roomController.create) // enviando dados para criar sala
route.get('/room/:room', roomController.open) // rota de direcionamento para sala
route.post('/enter-room', roomController.enter) // enviando nº da sala para entrar nela

route.post('/question/create/:room', questionController.create) // rota onde sala será criada

// Formato que formulário da modal vai passar as infomações 
route.post('/question/:room/:question/:action', questionController.index)// -> ':' indica que nao se sabe o conteudo que será solicitado

module.exports = route // exportando este arquivo para o server