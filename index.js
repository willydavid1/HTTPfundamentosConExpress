// importamos el modulo express | al ejecutar express esto me devuelve un objeto que es el servidor
const express = require("express");
const bodyParser = require("body-parser"); //importamos el modulo body parser para poder leer el body de las peticiones
const app = express();

// para poder leer lo que va en el body de las peticiones de los formularios | application/x-www-form-urlencoded usamos body parser o express.json para leer los json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());


// Procesa parametros del "Query String" (son parametros que se pasan a la URL) /?nombre=willy & => para separar los parametros
app.get("/", (req, res) => {
  res.send(`Hola ${req.query.nombre || "anonimo"}, soy un servidor!`);
});

// rutas dinamicas, sin necesidad de usar "Query String"
app.get("/usuario/:usuario/:cedula", (req, res) => {
  // responde en el body de la peticion HTTP esto
  res.send(
    `Hola ${req.params.usuario}, ${req.params.cedula}. soy un servidor!`
  );
});

// rutas dinamicas con parametros adicionales de "Query String"
app.get("/autores/:autor", (req, res) => {
  res.send(`Autor ${req.params.autor}, año: ${req.query.año || "no definido como 'Query String' " }`);
});

// servidor cuando recibas una peticion get en la ruta /json, ejecuta el callback y como respuesta le voy a enviar un json (ese metodo json recibe un objeto)
app.get("/json", (req, res) => {
  res.json( {
    hola: "hola mundo"
  } )
})

// ruta que vamos a recibir lo que nos manda el cliente por el metodo POST
app.post("/responder_encuesta", (req, res) => {
    console.log(req.body) // veo lo que me envia en el body de la peticion

    res.send("Respuesta del server!")
})



// servidor o app quiero que escuches en el puerto 3000 y cuando inicies ejecuta el mensaje por consola
app.listen(3000, () => {
  console.log(
    "Servidor express disponible en el puerto " + "http://localhost:3000/"
  );
});
