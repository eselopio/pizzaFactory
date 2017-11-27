'use strict';

let express = require('express');
let controller = autoload('./app/controlllers/pizzaController');

let router = express.Router();

router.get('/ingredients', controller.listIngredients);
router.get('/masses', controller.listMasses);

module.exports = router;
