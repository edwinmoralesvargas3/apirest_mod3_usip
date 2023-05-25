const { Usuario, UsuarioSchema } = require('./usuarios.model');

function setupModels(sequelize) {
    Usuario.init(UsuarioSchema, Usuario.config(sequelize));
}

module.exports = setupModels;
