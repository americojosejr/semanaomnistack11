const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors(
    //{ origin: 'http://meuapp.com'}
    ));
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * get busca lista uma informaçao do back end
 * post cria ums informaçao no back end
 * put altera uma inforemaçao no back end
 * delete deleta uma informação no back end
 */
/**
 * tipos de parametro
 * query params: parametros nomeados enviados na rota apos "?" (filtro, paginação)
 * route params: parârametros utilizados para identificar recursos
 */
/**
 * sql: mysql, sqllite, postgresql, oracle. microsoft sql server
 * nosql: mongodb, couchdb, etc
 */
/**
 * driver: select * from users
 * query buider : table('users).select('*') where()
 */
