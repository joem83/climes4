'use strict';

var passport = require('passport');
var User = require('../../models/users');

router.put('/users/change-name/:user', function(req, res, next){
    req.body.email = req.body.oldemail;

    if(!req.body.email || !req.body.password) {
        return res.json({
            message: "Please fill out all fields"
        });
    }

    passport.authenticate('local', function(err, user, info){
        if(err){ return next(err); }

        if(user){
            var obj = req.body;
            var id = req.body._id;
            obj.email = obj.newemail;

            User.update({_id: id}, obj, {upsert: true}, function(err, user){
                if(err){ return next(err); }

                res.json(obj.email);
            });
        } else {
            return res.status(400).json(info);
        }
    })(req, res, next);

});