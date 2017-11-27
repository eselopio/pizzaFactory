'use strict';

let pizzaServices = autoload('./app/services/pizzaService');

let controller = {
    listIngredients: (req, res) =>{
        pizzaServices.listIngredients()
            .then(ingredients =>{
                res.send(ingredients)
            });
    },
    listMasses: (req, res) =>{
        pizzaServices.listMasses()
            .then(masses =>{
                res.send(masses)
            });
    }
};

module.exports = controller;


