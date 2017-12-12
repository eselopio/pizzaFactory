import rest from './request';

export let findAllIngredients= () => {
    return rest({url:"http://localhost:4000/pizza/ingredients"})
        .then(data => data =JSON.parse(data))
}