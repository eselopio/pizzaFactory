# Pizza Factory :pizza:

![](http://www.pngmart.com/files/1/Pepperoni-Pizza.png)

Esta app se contruye fundamentalmente en **ES6** :heart: 

Estructura :pizza:
---------
```json
/app
	/client
		/build
		/css
		/js
			/main.js
			/pizza-service-mock.js
			/pizza-service.js
			/request.js
		/index.html
	/controllers
		/pizzaController.js 
	/routes 
		/pizzaRoute.js
	/services
		/pizzaService.js 
	Router.js 
/config
	config.js 
	middleware.js
/test 
/utils
	autoload.js
server.js 
db.json(Nuestra base de datos estatica)
```
Instalación :pizza:
-------
 1. Clona el repo :metal:

    <code>git clone https://github.com/eselopio/pizzaFactory.git</code>

2. Descarga las dependencias :zap:

    <code>npm install</code>

Start PizzaBackend Nodejs :pizza:
-------
*development*

No tenemos base de datos asi que ocupamos json-server :tada: 

<code>npm run json:server</code>

Para arrancar el proyecto con nodemon y se refresqué automáticamente los cambios.

<code>npm run-script dev</code>

Algunos EndPoints :pizza: :

<code>http://localhost:4000/pizza/ingredients</code>

<code>http://localhost:4000/pizza/masses</code>


Start PizzaFront Es6* :pizza:
-------

<code>npm install </code>

<code>npm run webpack </code>

<code>npm run start </code>


*testing* :pizza:
-------
[ ] pendiente

<code>npm test</code>

Para los test utilizamos:

 - Mocha
 - Chai
 - Chai-http

