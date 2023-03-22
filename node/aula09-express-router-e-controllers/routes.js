const express = require('express');
const route = express.Router();

const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController')

// Rotas da home:
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato:
route.get('/contato', contatoController.paginaContato) 

module.exports = route;