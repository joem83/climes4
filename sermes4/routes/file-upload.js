var express = require('express');

var multer = require("multer");
var router = express.Router();

var fs = require("fs");
//var gm = require("gm").subClass({ imageMagick: true });
var path = require("path");
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './sermes4/public/images/');
    },
    filename: function(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
            var err = new Error();
            err.code = 'filetype';
            return cb(err);
        }
        cb(null, Date.now() + '-' + file.originalname);
    }
});

var upload = multer({ 
    storage: storage,
    limits: { fileSize: 10000000 }
}).single('myfile');


router.post('/', function(req, res, next){
upload(req,res, function(err){
    if (err) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            res.json({ success: false, message: 'File too large, over 10mb'});
        } else if (err.code === 'filetype') {
            res.json({ success: false, message: 'File not supported, only png, jpg, jpeg'});
        } else{
            console.log(err);
            res.json({ success: false, message: 'File not uploaded'});
        }
    }else {
        if (!req.file) {
            res.json({ success: false, message: 'no file selected'});
        } else {
            res.json({ success: true, message: 'Uploaded!'});
        }
    }
});

}); 

module.exports = router;
