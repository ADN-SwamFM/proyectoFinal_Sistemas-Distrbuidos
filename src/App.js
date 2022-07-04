const express = require('express');
//Une directorios
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myConnection');

const app = express();

//IMPORTANDO RUTAS
const customerRoutes = require('./routes/customer');

app.set('port', process.env.PORT || 3000);
//Motor de plantillas (Vistas)
app.set('view engine', 'ejs');
//Donde se encuentra la vista
//Dirname nos da la ruta de acuerdo en donde se ejecute el archivo
app.set('views',path.join(__dirname,'views'));

// MIDDLEWARES --> Se ejecutan antes que lleguen las peticiones de lo usuarios
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'swampert24',
    port: 3306,
    database: 'servidor'
}, 'single'));
//Desde el metodo express estamos requiriendo un metodo que permitira
//entender todos los datos que vengan del formulario
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/', customerRoutes);

//ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});