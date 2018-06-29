const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const {mongoose} =  require('./database');


//configuracion
app.set('port', process.env.PORT || 3000);
//middle
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));



//rutas
app.use('/api/clientes',require('./routes/cliente.routes'));



//arrancar server
app.listen(app.get('port'),() => {
    console.log('Server on port:',app.get('port'));
});