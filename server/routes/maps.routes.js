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


    MapGraph.create({ ...req.body })
        .then(newMap => {
            console.log(newMap)
            res.status(200).json(newMap)
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

router.get("/getmap/:id", (req, res, next) => {


    MapGraph.findById(req.params.id)
        // .populate("notes")
        .populate("creator")
        .then(foundMap => {
            // console.log(foundMap)
            res.status(200).json(foundMap)
        })
        .catch(err => console.log("------------------------error buscando el mapa", err))

})

router.post("/getmap/:id", (req, res, next) => {

    const { demografic, googleKWords, lng, lat, zoom } = req.body

    MapGraph.findByIdAndUpdate(req.params.id, { demografic, googleKWords, lng, lat, zoom })

        .then(foundMap => {
            // console.log(foundMap)
            res.status(200).json(foundMap)
        })
        .catch(err => console.log("------------------------error buscando el mapa", err))

})

// router.post("/addnote", (req, res, next) => {

//     MapGraph.findByIdAndUpdate(req.body.creator, { $push: { maps: req.body._id } })
//         .then(updatedUser => res.status(200).json(updatedUser))
//         .catch(err => console.log("error retrieving the user data", err))
// })
//     .catch(err => console.log("error buscando el mapa", err))


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