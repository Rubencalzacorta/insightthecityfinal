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



router.get("/getmap/:id", (req, res, next) => {

    MapGraph.findById(req.params.id)
        .populate("creator")
        .populate("notes")
        .then(foundMap => {
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

router.post("/addnote", (req, res, next) => {

    const newNote = {
        $push: {
            notes
                : req.body.noteId
        }
    }

    MapGraph.findByIdAndUpdate(req.body.mapId, newNote, { new: true }).populate("notes")
        .then(updatedMap => res.status(200).json(updatedMap))
        .catch(err => console.log("error retrieving the user data", err))

})


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