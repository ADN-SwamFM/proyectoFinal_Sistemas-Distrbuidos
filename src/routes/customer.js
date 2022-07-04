const express = require('express');
//Almacena rutas y las extrae
const router = express.Router();

const customerController = require('../controllers/customerController');

//URLS que el servidor manejara
router.get('/', customerController.list);
router.post('/add', customerController.enviar);
router.get('/delete/:idMedicamento', customerController.delete);

router.get('/update/:idMedicamento', customerController.edit);
router.post('/update/:idMedicamento', customerController.update);

module.exports = router;