const singup = require("../model/user");

//mostrar
module.exports.mostrar = (req, res) => {
    singup.find({}, (error, datos) => {
        if (error) {
            return res.status(500).json({
                message: "error al mostrar el singup",
            });
        }
        return res.render("../public/views/singup", { datos: datos });
        //console.log(datos)
    });
};