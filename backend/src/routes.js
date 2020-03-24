const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/incidents', IncidentController.index);
routes.get('/incidents/ong', IncidentController.show);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;
