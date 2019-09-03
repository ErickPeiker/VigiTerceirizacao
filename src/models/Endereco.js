const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
let Schema = mongoose.Schema;

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

EnderecoSchema.plugin(mongoosePaginate);
mongoose.model('Endereco', EnderecoSchema );