// importamos el modulo express | al ejecutar express esto me devuelve un objeto que es el servidor
const express = require("express");
const app = express();

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

// servidor o app quiero que escuches en el puerto 3000 y cuando inicies ejecuta el mensaje por consola
app.listen(3000, () => {
  console.log(
    "Servidor express disponible en el puerto " + "http://localhost:3000/"
  );
});
