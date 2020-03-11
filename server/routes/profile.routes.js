const express = require("express");
const router = express.Router();
const User = require("../models/User");
const MapGraph = require("../models/MapGraph");


router.get("/:id", (req, res, next) => {


    User.findById(req.params.id)
        .populate("maps")
        .populate("projects")
        .then(newUser => res.status(200).json(newUser))
        .catch(err => console.log("error retrieving the user data"))
})



router.post("/update", (req, res, next) => {
    console.log(req.body)

    User.findByIdAndUpdate(req.body._id, req.body)
        .then(newUser => res.status(200).json(newUser))
        .catch(err => console.log("error retrieving the user data", err))
})


router.post("/addmap", (req, res, next) => {


    User.findByIdAndUpdate(req.user.id, { $push: { maps: req.body._id } })
        .then(updatedUser => res.status(200).json(updatedUser))
        .catch(err => console.log("error retrieving the user data", err))
})

router.post("/addproject", (req, res, next) => {

    const newProject = {
        $push: {
            projects: req.body.id
        }
    }

    User.findByIdAndUpdate(req.user.id, newProject)
        .then(updatedUser => res.status(200).json(updatedUser))
        .catch(err => console.log("error retrieving the user data", err))
})

module.exports = router;