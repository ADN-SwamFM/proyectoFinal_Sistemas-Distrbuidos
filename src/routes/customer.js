const express = require('express');
//Almacena rutas y las extrae
const router = express.Router();

const customerController = require('../controllers/customerController');

//URLS que el servidor manejara
router.get('/', customerController.list);
router.post('/add', customerController.enviar);
router.get('/delete/:id_chat', customerController.delete);

router.get('/update/:id_chat', customerController.edit);
router.post('/update/:id_chat', customerController.update);

module.exports = router;