var express = require('express');
var router = express.Router();

var ItemsModel = require('../models/items');

/* GET allItems page. */
router.get('/', function (req, res, next) {
   // console.log("user"+req.user);
    
    ItemsModel
    .find({})
    .populate('category', 'name')
    .exec(function (err, data) {
        res.json({ page: 'GET allItemss page', data });
    });
});

/* GET Item page. */
router.get('/:id', function (req, res, next) {
    ItemsModel
    .findOne({ _id: req.params.id })
    .populate('category', 'name')
    .exec(function (err, data) {
        res.json({ page: 'GET item page', data });
    });
});

/* POST Item page. */
router.post('/add', function (req, res, next) {
    var {name, category, price, imagepath} = req.query;
    var newItem = new ItemsModel({ name, category, price, imagepath });
    newItem.save((err, data) => {
        res.json({ page: 'POST newTask page', data });
    })
});

/* PUT Item page. */
router.put('/:id', function (req, res, next) {
    var id = req.params.id;
    console.log(id);
    ItemsModel
    .findOne({_id: id})
    .exec(function (err, data) {
        console.log(data);
        data.name=req.query.name;
        data.category=req.query.category;
        data.price=req.query.price;
        data.imagepath=req.query.imagepath;
        console.log(data);
        data.save();
        res.json({ page: 'PUT Item page', data });
    });
});

module.exports = router;
