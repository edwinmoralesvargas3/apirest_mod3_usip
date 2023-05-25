//import { coneccion } from '../libs/sequelize.js';
const UsuariosService = require('../services/usuarios.service');
const service = new UsuariosService();

const create = async ( req, res ) => {
    try { 
        const response = await service.create(req.body);
        res.json({ success: true, data: response});
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const get = async ( req, res ) => {
    try {
        const response = await service.find();
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const getEstado = async ( req, res ) => {
    try {
//      const response = await service.getEstado("SELECT * FROM usuarios");
            //const response='probando edwin;'
            const response='{\'nameSystem\':\'USIP-MOD3-APIREST,\' version\':\'0.01,\' developer\':\'Edwin Javier Morales Vargas,\'  email\':\'edwinmoralesvargas\'}'
            res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}


const getById = async ( req, res ) => {
    try {
        const { id } = req.params;
        const response = await service.findOne(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id,body);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const _delete = async (req, res) => {
    try {
        const { id } = req.params; 
        const response = await service.delete(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports = {
    create, get, getById, update, _delete, getEstado
};
