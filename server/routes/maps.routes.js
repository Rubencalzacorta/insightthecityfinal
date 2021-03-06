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

    MapGraph.create({ ...req.body, creator: req.user.id })
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

    const { googleKWords, lng, lat, zoom, active, searchPoints } = req.body

    MapGraph.findByIdAndUpdate(req.params.id, { googleKWords, lng, lat, zoom, active, searchPoints }, { new: true })

        .then(foundMap => {
            console.log(foundMap)
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


router.post("/removemap", (req, res, next) => {
    MapGraph.findByIdAndDelete(req.body.id)
        .then(deletedMap => res.status(200).json(deletedMap))
        .catch(err => console.log("error eliminando el mapa", err))
})

module.exports = router;