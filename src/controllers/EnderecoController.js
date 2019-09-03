const mongoose = require('mongoose');
const Endereco = mongoose.model('Endereco');

module.exports = {

    async index(req, res) {
        const { page = 1} = req.query;
        const enderecos = await Endereco.paginate({}, {page, limit:10});
        return res.json(enderecos);
    },

    async show(req, res) {
        const endereco = await Endereco.findById(req.params.id);
        return res.json(endereco);
    },

    async store(req, res) {
        const endereco = await Endereco.create(req.body);
        return res.json(endereco);
    },

    async update(req, res) {
        //Com paramêtro new = true, retornará a versão atualizada do endereço
        const endereco = await Endereco.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(endereco);
    },

    async destroy(req, res) {
        await Endereco.findByIdAndRemove(req.params.id);
        return res.send();
    }

}