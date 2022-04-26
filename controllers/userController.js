const user = require("../model/user")

//mostrar
module.exports = (req, res) => {
    user.find({}, (error, users) => {
        if (error) {
            return res.status(500).json({
                message: "error al mostrar los users"
            })

        }
        console.log(users)
    })
}