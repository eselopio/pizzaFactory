import find from 'lodash/find';
import * as services from "./pizza-service-mock";

const listPrices = 0;

class ModuloPizzaFront {
    constructor(elements, total){
        this.init();
        this.configFiltros();
        this.findIngredients();
        this.findMasses();
        this.configSelects(elements = {});
        this.listPrices = []; 
        this.totalPizza = total;
    }
    init(){
        Promise.all([
            this.findIngredients,
            this.findMasses,
        ]).then(values => {
            return this.configFiltros;
        });
    }
    configFiltros(){
        const mPizza = this;
        return new Promise((resolve, reject) =>{
                document.addEventListener('DOMContentLoaded', ()=> {

                    var multipleDefault = new Choices(document.getElementById('choices-multiple-ingredients'), {
                      delimiter: ',',
                      editItems: true,
                      maxItemCount: 5,
                      removeItemButton: true
                    });
                    var multipleDefaultMasses = new Choices(document.getElementById('choices-multiple-masses'), {
                        delimiter: ',',
                        editItems: true,
                        maxItemCount: 1,
                        removeItemButton: true
                    });

                    multipleDefault.passedElement.addEventListener('addItem',(event) => {
                        let i = find(mPizza.listPrices, (o)=>{ 
                            return o.id == event.detail.value 
                        });
                        mPizza.totalPizza = mPizza.totalPizza + i.price;
                        document.getElementById("totalPizza").innerHTML = parseInt(mPizza.totalPizza);
                      }, false);

                      multipleDefault.passedElement.addEventListener('removeItem', (event) => {
                        let i = find(mPizza.listPrices, (o)=> {
                             return o.id == event.detail.value
                        });
                        mPizza.totalPizza = mPizza.totalPizza - i.price;
                        document.getElementById("totalPizza").innerHTML = parseInt(mPizza.totalPizza);
                      }, false);
                    
                  });

                resolve();
        });
    }
    configSelects(elements){
        let select ="";
            elements.forEach((element, index)=>{
                select += `
                    <option value=${element.id} >
                        ${element.name}
                    </option>`;
            });
        return(select);
    }
    findIngredients(){
        return services.findAllIngredients()
        .then(ingredients => {
            this.listPrices = ingredients;
            this.totalPizza = 0;
            document.getElementById("choices-multiple-ingredients").innerHTML = this.configSelects(ingredients);
        })
        .catch(error => console.log("error :", error));
    }
    findMasses(){
        return services.findAllMasses()
        .then(masses => {
            document.getElementById("choices-multiple-masses").innerHTML = this.configSelects(masses);
        })
        .catch(error=> console.log("error: ", error));
    }
}

var a = new ModuloPizzaFront({},0);
a.init();

