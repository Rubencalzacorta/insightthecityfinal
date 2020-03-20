const express = require("express");
const router = express.Router();
const MapGraph = require("../models/MapGraph");
const User = require("../models/User");
const Note = require("../models/Note");
const Publication = require("../models/Publication");


// router.get("/:id", (req, res, next) => {
//     User.findById(req.params.id)
//         .then(newUser => res.status(200).json(newUser))
//         .catch(err => console.log("error retrieving the user data"))
// })


router.post("/create", (req, res, next) => {
    Publication.create({ ...req.body })
        .then(newPublication => res.status(200).json(newPublication))
        .catch(err => console.log("error creating project data", err))
})

router.get("/:id", (req, res, next) => {
    Publication.findById(req.params.id)
        .populate("creator")
        .populate("maps")
        .then(thePublication => {

            console.log(thePublication)
            res.status(200).json(thePublication)
        })
        .catch(err => console.log("error retrieving the project data", err))
})

router.post("/addTeamMember", (req, res, next) => {

    const newTeamMember = {
        $push: {
            team: req.body.memberId
        }
    }

    Publication.findByIdAndUpdate(req.body.projectId, newTeamMember, { new: true })
        .then(updatedProject => res.status(200).json(updatedProject))
        .catch(err => console.log("error retrieving the user data", err))

})

router.post("/updatemain", (req, res, next) => {

    const { _id, name, opportunity, proposal } = req.body

    Publication.findByIdAndUpdate(_id, { name, opportunity, proposal }, { new: true })
        .populate("creator")
        .populate("maps")
        .then(updatedProject => {
            console.log(updatedProject)
            res.status(200).json(updatedProject)
        })
        .catch(err => console.log("error retrieving the user data", err))
})


router.post("/removeproject", (req, res, next) => {
    Publication.findByIdAndDelete(req.body.id)
        .then(deletedMap => res.status(200).json(deletedMap))
        .catch(err => console.log("error eliminando el projecto", err))
})


router.post("/addmap", (req, res, next) => {

    Publication.findByIdAndUpdate(req.body.projectId, { $push: { maps: req.body.mapId } }, { new: true })
        .then(updatedUser => res.status(200).json(updatedUser))
        .catch(err => console.log("error sumando mapa de proyecto", err))
})


router.post("/removemap", (req, res, next) => {

    Publication.findByIdAndUpdate(req.body.projectId, { $pull: { maps: req.body.mapId } }, { new: true })
        .then(updatedUser => res.status(200).json(updatedUser))
        .catch(err => console.log("error borrando mapa de proyecto", err))
})


router.post("/addpictures", (req, res, next) => {


    console.log("----------------------esto es add pictures req.body", req.body)
    Publication.findByIdAndUpdate(req.body.projectId, { $push: { images: req.body.images } }, { new: true })
        .then(updatedUser => res.status(200).json(updatedUser))
        .catch(err => console.log("error sumando mapa de proyecto", err))
})


router.post("/removepictures", (req, res, next) => {

    Publication.findByIdAndUpdate(req.body.projectId, { $pull: { images: req.body.url } }, { new: true })
        .then(updatedUser => res.status(200).json(updatedUser))
        .catch(err => console.log("error borrando mapa de proyecto", err))
})

module.exports = router;