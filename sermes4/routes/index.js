var express = require('express');
var passport = require('passport');
var User = require('../models/users');
var router = express.Router();

function loggedIn(req, res, next) {
  if (req.user) {
      next();
  } else {
      res.redirect('/login');
  }
}

router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});
/* 
router.get('/register' , function(req, res) {
  if (req.user) {
    console.log(req.user);
    
    res.redirect('/'); 
    }
    else {
        res.render('register', { });

    }
});

router.post('/register', function(req, res) {
    User.register(new User({ username : req.body.username }), req.body.password, function(err,  ) {
        if (err) {
            return res.render('register', { User : User });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/login', function(req, res) {
    if (req.user) {
        res.redirect('/');
    } else {
        res.render('login', { user : req.user });
    }
    
});

router.post('/login', passport.authenticate('local'), function(req, res) {
	res.json("yes");
   // res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    if (req.user) {
        res.status(200).send("pong!");
    } else {
        res.json("noacces")
        // res.redirect('/');
    }
});

router.get('/pingpong', function(req, res){
    if (req.user) {
        res.status(200).send("noam!");
    } else {
        res.json("noacces")
        // res.redirect('/');
    }
}); */

module.exports = router;
