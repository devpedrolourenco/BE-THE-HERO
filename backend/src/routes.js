
const express = require('express');

const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);


module.exports = routes;




/*const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection')

const routes = express.Router();

routes.post('/ongs', async (request, response) => {
   const {name, email, whatsapp, city, uf} = request.body;
   
   const id =  crypto.randomBytes(4).toString('HEX');

   await connection('ongs').insert({
       id,
       name,
       email,
       whatsapp,
       city,
       uf,
   });
    return response.json({ id });

});

module.exports = routes;*/