const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const singupController = require("../controllers/singupController"); //aqui se usa para mostrarlo en la terminal de VSC

/*
router.get("/signup", (req, res) => {
    PQRSModel
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
*/

//Crear todos los PQRs (GET)
router.get("/singup", singupController.mostrar);


module.exports = router;