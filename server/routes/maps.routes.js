const express = require("express");
const router = express.Router();
const MapGraph = require("../models/MapGraph");


// router.get("/:id", (req, res, next) => {
//     User.findById(req.params.id)
//         .then(newUser => res.status(200).json(newUser))
//         .catch(err => console.log("error retrieving the user data"))
// })



router.post("/create", (req, res, next) => {


    MapGraph.create({ ...req.body })
        .then(newMap => {
            console.log(newMap)
            res.status(200).json(newMap)
        })
        .catch(err => console.log("error retrieving the user data", err))
})


// router.post("/update", (req, res, next) => {
//     console.log(req.body)

//     User.findByIdAndUpdate(req.body._id, req.body)
//         .then(newUser => res.status(200).json(newUser))
//         .catch(err => console.log("error retrieving the user data", err))
// })

module.exports = router;