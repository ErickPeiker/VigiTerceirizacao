//Importação de bibliotecas
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Configuração de banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {useFindAndModify: false, useNewUrlParser: true});
requireDir('./src/models');

//Apontamento de roteamento e portas
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', require('./src/routes'));
app.listen(3001);