const express = require("express");
const router = express.Router();
const MapGraph = require("../models/MapGraph");
const User = require("../models/User");
const Note = require("../models/Note");


// router.get("/:id", (req, res, next) => {
//     User.findById(req.params.id)
//         .then(newUser => res.status(200).json(newUser))
//         .catch(err => console.log("error retrieving the user data"))
// })



router.post("/create", (req, res, next) => {

    Note.create({ ...req.body })
        .then(newNote => {
            console.log(newNote)
            res.status(200).json(newNote)
        })
        .catch(err => console.log("error retrieving the user data", err))
})


module.exports = router;