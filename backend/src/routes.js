const express = require('express');
const OngValidateStore = require('./validators/OngValidator');
const { 
  IncidentValidateShow, 
  IncidentValidateDelete, 
  IncidentValidateIndex, 
  IncidentValidateStore 
} = require('./validators/IncidentValidator');


const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngValidateStore, OngController.store);

routes.get('/incidents', IncidentValidateIndex, IncidentController.index);
routes.get('/incidents/ong', IncidentValidateShow, IncidentController.show);
routes.post('/incidents', IncidentValidateStore, IncidentController.store);
routes.delete('/incidents/:id', IncidentValidateDelete, IncidentController.delete);


module.exports = routes;
