var express = require('express');
var router = express.Router();
var CartsModel = require('../models/cart');

/* GET allcarts page. */
router.get('/', function (req, res, next) {
   // console.log(CartsModel);
    CartsModel
    .find({})
    .populate('userid')
    .exec(function (err, data) {
        console.log(data);
        res.json({ page: 'GET allCarts page', data });
    });
});

/* GET Item page. */
router.get('/:id', function (req, res, next) {
    CartsModel
    .findOne({ _id: req.params.id })
    .populate('userid')
    .exec(function (err, data) {
       // console.log(data);
        res.json({ page: 'GET item page', data });
    });
});

/* POST Item page. */
router.post('/add', function (req, res, next) {
    var {userid, dateCreated} = req.query;
    var newItem = new CartsModel({ userid, dateCreated});
    newCart.save((err, data) => {
        res.json({ page: 'POST newTask page', data });
    })
});

/* PUT Item page. */
router.put('/:id', function (req, res, next) {
    var id = req.params.id;
    console.log(id);
    CartsModel
    .findOne({_id: id})
    .exec(function (err, data) {
        console.log(data);
        data.userid=req.query.userid;
        data.dateCreated=req.query.dateCreated;
        console.log(data);
        data.save();
        res.json({ page: 'PUT Item page', data });
    });
});

module.exports = router;
