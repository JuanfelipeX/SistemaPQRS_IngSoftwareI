const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const PQRSModel = require("../model/pqrs"); //aqui se usa para mostralo en postman
const PQRSController = require("../controllers/pqrsController"); //aqui se usa para mostrarlo en la terminal de VSC

/*
router.get("/user", (req, res) => {
    PQRSModel
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
*/

router.get("/pqrs", PQRSController);

module.exports = router;