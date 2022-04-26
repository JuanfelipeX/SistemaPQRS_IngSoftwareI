const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/*
router.get("/user", (req, res) => {
    userController
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
*/

router.get("/user", userController)

module.exports = router;