import * as services from "./pizza-service";

services.findAllIngredients()
    .then(ingredients => {
        console.log("ingredientes",ingredients);
        let html = "";
            ingredients.forEach((ingredient)=>{
                html += `
                        <div
                            ><img src="" />
                            <div> ${ingredient.name} 
                                <p> id : ${ingredient.id} </p>
                            </div>
                        </div>`;
                });
             document.getElementById("list").innerHTML = html;
    })
    .catch(error => console.log(error));