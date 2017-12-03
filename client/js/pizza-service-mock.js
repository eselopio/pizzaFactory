let ingredients = [
    {
      "id": 1,
      "name": "tomato"
    },
    {
      "id": 2,
      "name": "onion"
    },
    {
      "id": 3,
      "name": "cheese"
    }
  ];

export let findAllIngredients= () => new Promise(resolve => resolve(ingredients));   
  