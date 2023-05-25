const { Sequelize } = require('sequelize');

const  { config } = require('../config/config');
const setupModels = require('./../db/models');
  

 const sequelize = new Sequelize(
    config.dbName, // name database
    config.dbUser, // user database
    config.dbPassword, // password database
    {
      host: config.dbHost,
      dialect: 'postgres' 
    }
  );

  
sequelize.sync();
setupModels(sequelize);

  const coneccion = new Sequelize(
    config.dbName, // name database
    config.dbUser, // user database
    config.dbPassword, // password database
    {
      host: config.dbHost,
      dialect: 'postgres' 
    }
  );


module.exports = sequelize;