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


// router.post("/getmap", (req, res, next) => {

//     MapGraph.findById(req.body)
//         .then(foundMap => {
//             console.log(foundMap)
//             res.status(200).json(foundMap)
//         })
//         .catch(err => console.log("error buscando el mapa", err))


// })

// router.get("/getusermaps", (req, res, next) => {

//     console.log(req)

//     // MapGraph.findById(req.body)
//     //     .then(foundMap => {
//     //         console.log(foundMap)
//     //         res.status(200).json(foundMap)

//     //     })
//     //     .catch(err => console.log("error buscando el mapa", err))


// })







// router.post("/update", (req, res, next) => {
//     console.log(req.body)

//     User.findByIdAndUpdate(req.body._id, req.body)
//         .then(newUser => res.status(200).json(newUser))
//         .catch(err => console.log("error retrieving the user data", err))
// })

module.exports = router;