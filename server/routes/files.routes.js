
const express = require('express');
const router = express.Router();

const uploader = require('../configs/cloudinary.configs');


router.post('/upload', uploader.array("imageUrl"), (req, res, next) => {


    console.log("ESTOY EN EL BAAACKK ------------------------------k", req.file)

    if (!req.file) {
        next(new Error('No file uploaded!----EN EL BAAAAAAACK', req.file));
        return;
    }


    const uploadFiles = req.files.map(elm => elm.secure_url)
    res.json({ secure_url: uploadFiles });

})

module.exports = router;
