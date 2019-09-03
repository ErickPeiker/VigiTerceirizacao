var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const EnderecoSchema = new mongoose.Schema({
    rua : {
        type: String,
        required: true,
    },
	numero : {
        type: String,
        required: true,
    },
	bairro : {
        type: String,
        required: true,
    },
	cep : {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Endereco', EnderecoSchema );