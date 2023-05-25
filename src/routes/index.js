const express = require('express'); 

const usuariosRouter = require('./usuarios.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/usipapirest/v1', router); 
  router.use('/usuarios', usuariosRouter);
}

module.exports = routerApi;
