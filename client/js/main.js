// XMLHttpRequest wrapper using callbacks
function rs(obj, successHandler, errorHandler) {
    let xhr = new XMLHttpRequest();
    xhr.open(obj.method || "GET", obj.url);

    if (obj.headers) {
        Object.keys(obj.headers).forEach((key) => {
            xhr.setRequestHeader(key, obj.headers[key]);
        });
    }
    xhr.onload = ()=> {
        if (xhr.status >= 200 && xhr.status < 300) {
            successHandler(xhr.response);
        } else {
            errorHandler(xhr.statusText);
        }
    };
    xhr.onerror = ()=>{
        errorHandler(xhr.statusText);
    };
    xhr.send(obj.body);
}

rs({url:"http://localhost:4000/pizza/ingredients"},
   (data) =>{
     let ingredients = JSON.parse(data);
     let html = "";

     ingredients.forEach((ingredient)=>{
      html += `<div><img src="" /><div> ${ingredient.name} <p> id : ${ingredient.id} </p></div></div>`;
     });
     document.getElementById("list").innerHTML = html;
   },
   (error) => {
     console.log(error);
   }
);

