const app = require('../server');

//Ejercuta servidor HTTP
const server=required('HTTP').server(app);
const port=3002;

//Ejecutando el servidor
server.listen(port);
console.log('Running on port $(port)' );