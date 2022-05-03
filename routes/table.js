const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const userModel = require("../model/user"); //aqui se usa para mostralo en postman
const userController = require("../controllers/userController"); //aqui se usa para mostrarlo en la terminal de VSC
const tableController = require("../controllers/tableController");

/*
router.get("/user", (req, res) => {
    userModel
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
*/

router.get("/table", tableController.mostrar);

module.exports = router;