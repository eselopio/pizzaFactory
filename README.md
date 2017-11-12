# Pizza Factory :pizza:

![Alt Text](https://github.com/{user}/{repo}/raw/master/path/to/image.gif)

Esta app se contruye fundamentalmente en **ES6** :heart: 

Estructura
---------
```json
/app
	/controllers 
	/routes 
	/services 
	Router.js 
/config
	config.js 
/test 
/utils
server.js 
```
Instalación
-------
 1. Clona el repo :metal:

    <code>git clone https://github.com/eselopio/pizzaFactory.git</code>

2. Descarga las dependencias :zap:

    <code>npm install</code>

Start 

*development*

No tenemos base de datos asi que ocupamos json-server :tada:
<code>npm run json:server</code>

Para arrancar el proyecto con nodemon y se refresqué automáticamente los cambios 
<code>npm run-script dev</code>

*testing*
-------
<code>npm test</code>

For Testing we use:

 - Mocha
 - Chai
 - Chai-http

