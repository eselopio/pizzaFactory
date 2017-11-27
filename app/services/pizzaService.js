'use strict';
const axios = require('axios');

let services = {
   listIngredients: () =>{
    return axios.get(`http://localhost:3000/ingredients/`)
        .then(resp => resp.data);
   },
   listMasses: ()=>{
    return axios.get(`http://localhost:3000/masses/`)
        .then(resp => resp.data);
   }
};

module.exports = services;


