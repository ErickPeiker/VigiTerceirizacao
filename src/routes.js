const express = require('express');
const routes = express.Router();

const EnderecoController = require('./controllers/EnderecoController');

routes.get("/enderecos",  EnderecoController.index);
routes.get("/enderecos/:id",  EnderecoController.show);
routes.put("/enderecos/:id",  EnderecoController.update);
routes.post("/enderecos",  EnderecoController.store);
routes.delete("/enderecos/:id",  EnderecoController.destroy);


module.exports = routes;