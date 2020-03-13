
const express = require('express');
const router = express.Router();

const uploader = require('../configs/cloudinary.configs');


router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {

    console.log("llego la foto")

    if (!req.file) {
        next(new Error('No file uploaded!'));
        return;
    }

    res.json({ secure_url: req.file.secure_url });
})

module.exports = router;

//// Uploader array para varias fotos