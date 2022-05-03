const table = require("../model/pqrs");

//mostrar
module.exports.mostrar = (req, res) => {
    table.find({}, (error, datos) => {
        if (error) {
            return res.status(500).json({
                message: "error al mostrar la table",
            });
        }
        return res.render("../public/views/table", { datos: datos });
        //console.log(datos)
    });
};