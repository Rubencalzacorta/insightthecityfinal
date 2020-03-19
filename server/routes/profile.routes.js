const express = require("express");
const router = express.Router();
const User = require("../models/User");
const MapGraph = require("../models/MapGraph");
const Project = require("../models/Publication")


router.get("/:id", (req, res, next) => {


    User.findById(req.params.id)
        .populate("maps")
        .populate("projects")
        .then(newUser => res.status(200).json(newUser))
        .catch(err => console.log("error retrieving the user data"))
})



router.post("/update", (req, res, next) => {
    console.log(req.body)

    User.findByIdAndUpdate(req.body._id, req.body, { new: true })
        .then(updatedUser => {
            console.log(updatedUser)
            User.findById(updatedUser._id).populate("maps").populate("projects")
        })
        .then(populatedUser => res.status(200).json(populatedUser))
        .catch(err => console.log("error retrieving the user data", err))
})


router.post("/addmap", (req, res, next) => {


    User.findByIdAndUpdate(req.user.id, { $push: { maps: req.body._id } }, { new: true })
        .then(updatedUser => res.status(200).json(updatedUser))
        .catch(err => console.log("error retrieving the user data", err))
})


router.post("/removemap", (req, res, next) => {

    User.findByIdAndUpdate(req.user.id, { $pull: { maps: req.body.id } }, { new: true })
        .then(updatedUser => res.status(200).json(updatedUser))
        .catch(err => console.log("error retrieving the user data", err))
})


router.post("/addproject", (req, res, next) => {

    const newProject = {
        $push: {
            projects: req.body.id
        }
    }

    User.findByIdAndUpdate(req.user.id, newProject, { new: true })
        .then(updatedUser => res.status(200).json(updatedUser))
        .catch(err => console.log("error retrieving the user data", err))
})


router.post("/removeproject", (req, res, next) => {
    const deletedProject = {
        $pull: {
            projects: req.body.id
        }
    }

    User.findByIdAndUpdate(req.user.id, deletedProject, { new: true })
        .then(updatedUser => res.status(200).json(updatedUser))
        .catch(err => console.log("error retrieving the user data", err))

})


module.exports = router;