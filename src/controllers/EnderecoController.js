const mongoose = require('mongoose');
const Endereco = mongoose.model('Endereco');

module.exports = {

    async index(req, res) {
        const enderecos = await Endereco.find();
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