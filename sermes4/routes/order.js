var express = require('express');
var router = express.Router();

var OrdersModel = require('../models/orders');

/* GET allOrders page. */
router.get('/', function (req, res, next) {
    console.log(OrdersModel);
    OrdersModel
    .find({})
    .populate('userid','cartid')
    .exec(function (err, data) {
        console.log(data);
        res.json({ page: 'GET allOrders page', data });
    });
});

/* GET order page. */
router.get('/:id', function (req, res, next) {
   let _id= req.params.id;
    
    console.log("id_e"+_id);
    
    OrdersModel
    .find({ $or: [{"userid":_id}] })
    .populate('userid','cartid')
    .exec(function (err, data) {
        res.json({ page: 'GET allOrders page', data });
    });
});

/* POST Item page. */
router.post('/add', function (req, res, next) {
    var {userid, cartid, totalPrice, address, date4delivery, dateOfOrder, last4digits} = req.query;
    var newItem = new OrdersModel({ userid, cartid, totalPrice, address, date4delivery, dateOfOrder, last4digits });
    newItem.save((err, data) => {
        res.json({ page: 'POST newOrder page', data });
    })
});

/* PUT Item page. */
router.put('/:id', function (req, res, next) {
    var id = req.params.id;
    console.log(id);
    OrdersModel
    .findOne({_id: id})
    .exec(function (err, data) {
        console.log(data);
        data.userid=req.query.userid;
        data.cartid=req.query.cartid;
        data.totalPrice=req.query.totalPrice;
        data.address=req.query.address;
        data.date4delivery=req.query.date4delivery;
        data.dateOfOrder=req.query.dateOfOrder;
        data.last4digits=req.query.last4digits;
        console.log(data);
        data.save();
        res.json({ page: 'PUT order page', data });
    });
});

module.exports = router;
