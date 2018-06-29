const express = require('express');
const route = express.Router();

const cliente = require('../controllers/cliente.controller');

route.get('/', cliente.getClientes);
route.post('/',cliente.createCliente);
route.get('/:id',cliente.getCliente);
route.put('/:id',cliente.actualizarCliente);
route.delete('/:id',cliente.deleteCliente);

module.exports = route;