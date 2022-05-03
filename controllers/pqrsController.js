const pqrs = require("../model/pqrs");

//mostrar
module.exports.mostrar = (req, res) => {
    pqrs.find({}, (error, datos) => {
        if (error) {
            return res.status(500).json({
                message: "error al mostrar los pqrs",
            });
        }
        return res.render("../public/views/PQRS", { datos: datos });
        //console.log(datos)
    });
};