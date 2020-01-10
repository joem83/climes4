var express = require('express');
var router = express.Router();

var CategoriesModel = require('../models/categories').default;


/* GET allCategories page. */
router.get('/', function (req, res, next) {
    console.log(CategoriesModel);
    
    CategoriesModel.find(function (err, data) {
        console.log(data);
        res.json({ page: 'GET allCategories page', data });
    });
});


module.exports = router;
