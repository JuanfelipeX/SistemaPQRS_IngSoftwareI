const express = require("express");
const app = express();

app.set("view engine", "ejs"); /* setear el motor de plantillas*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/", function(req, res) {
    respuesta = {
        codigo: 200,
        mensaje: "Punto de inicio",
    };
    res.send(respuesta);
});

app.listen(3000, () => {
    console.log(
        "El servidor esta inicializado en el puerto 3000, http://localhost:3000 "
    );
});