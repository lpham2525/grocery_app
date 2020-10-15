// Will need to add the rest of the routes, easily adaptable from the previous iteration

var db =require('../models');

module.exports = (app) => {

    app.post("/api/users", function (req, res) {
        console.log(req.body, "at routes")
        db.users.create({
            username: req.body.username
        })
    })

};