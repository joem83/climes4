var express = require('express');
var router = express.Router();

var CartItemModel = require('../models/cartItems');

/* GET allItems page. */
router.get('/', function (req, res, next) {
    console.log(CartItemModel);
    CartItemModel
    .find({})
    .populate('userid')
    .populate('cartid')
    .populate('itemid')
    .exec(function (err, data) {
        console.log(data);
        res.json({ page: 'GET allCartItems page', data });
    });
});

/* GET Item page. */
router.get('/:id', function (req, res, next) {
    let _id= req.params.id;
    console.log("id_e"+_id);

    CartItemModel
    .find({ $or: [{"userid":_id}] })
    .populate('userid')
    .populate('cartid')
    .populate('itemid')
    .exec(function (err, data) {
        console.log(data);
        res.json({ page: 'GET cart item page', data });
    });
});

/* POST Item page. */
router.post('/add', function (req, res, next) {
    var {userid, quantity, total, cartid} = req.query;
    var newCItem = new CartItemModel({ userid, quantity, total, cartid });
    newCItem.save((err, data) => {
        res.json({ page: 'POST newCItem page', data });
    })
});

/* PUT Item page. */
router.put('/:id', function (req, res, next) {
    var id = req.params.id;
    console.log(id);
    CartItemModel
    .findOne({_id: id})
    .exec(function (err, data) {
        console.log(data);
        data.userid=req.query.userid;
        data.quantity=req.query.quantity;
        data.total=req.query.total;
        data.cartid=req.query.cartid;
        console.log(data);
        data.save();
        res.json({ page: 'PUT CItem page', data });
    });
});

module.exports = router;
