//npm start
const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');
const routes = express.Router();
const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs',OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);




/**routes.get('/ongs', async(request, response)=>{
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
});*/

/*
routes.post('/ongs' , async (request, response) => {


    /**const {name, email, whatsapp, city, uf} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('ongs').insert({
        id,name, email, whatsapp, city, uf,
    })
   return response.json({id});
*/
  /** const data = request.body;
   console.log(data);
   return response.json();
   */
   /** const body = request.body;
    console.log(body);
     return response.json({
         evento: 'semana omnistack',
         aluno:'Americo'
     }); */
 //});
 
 module.exports = routes;