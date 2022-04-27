const pqrs = require("../model/pqrs");

//mostrar
module.exports = (req, res) => {
    pqrs.find({}, (error, pqrss) => {
        if (error) {
            return res.status(500).json({
                message: "error al mostrar los pqrs",
            });
        }
        return res.render("../public/views/PQRS");
    });
};