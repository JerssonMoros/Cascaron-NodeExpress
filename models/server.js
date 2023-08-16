const express = require('express');
const cors = require('cors');

require('dotenv').config();

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api'
        // Middlewares
        this.middlewares();

        // Rutas de la app
        this.routes();        
    }

    middlewares(){
        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }
    routes(){
        this.app.use(this.usuariosRoutePath, require('../routes/user'))
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }
};

module.exports = Server;

