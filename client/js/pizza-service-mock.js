const masses = [
  {
    "id": "1",
    "name": "traditional"
  },
  {
    "id":"2",
    "name": "extra thin"
  },
  {
    "id":"3",
    "name": "double mass"
  }
];

const ingredients = [
    {
      "id": "1",
      "name": "tomato",
      "price": 300
    },
    {
      "id": "2",
      "name": "onion",
      "price": 300
    },
    {
      "id": "3",
      "name": "cheese",
      "price": 300
    },
    {
      "id": "4",
      "name": "Beef",
      "price": 400
    },
    {
      "id": "5",
      "name": "Pork",
      "price": 400
    },
    {
      "id": "6",
      "name": "Bacon",
      "price": 500
    },
];

module.exports ={
  findAllIngredients: ()=>{
    return new Promise(resolve => resolve(ingredients));   
  },
  findAllMasses: ()=> {
    return new Promise(resolve => resolve(masses));
  }
};


// export let findAllIngredients= () =>{
//   return new Promise(resolve => resolve(ingredients));   
// } 



  