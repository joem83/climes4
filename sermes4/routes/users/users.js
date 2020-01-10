var express = require('express');
var router = express.Router();
var passport = require('passport');
var Users = require('../../models/users');

/* GET allUsers page. */
router.get('/', function (req, res, next) {
  Users.find(function (err, data) {
      console.log(data);
      res.json({ page: 'GET allUsers page', data });
  });
});


router.post('/register', async function(req, res, next){
  console.log("signup");
  console.log(req.body.email);
  
  let user =await Users.findOne({ email: req.body.email });
  console.log(user);
  
  if (user) {
    return res.status(400).send('That user already exisits!');
} else {
    // Insert the new user if they do not exist yet
    console.log("adding");
    
    user = new Users({
        fn: req.body.fn,
        ln: req.body.ln,
        email: req.body.email,
        address: req.body.address,
        password: req.body.password,
        role: req.body.role
    });
    console.log(user);
    await user.save();
    res.send(user);
}
});

router.get('/login', function(req, res) {
    if (req.user) {
        res.redirect('/');
    } else {
        res.json('login', { user : req.user });
    }
    
});

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        console.log("dd");
        return res.json(user);
      });
    })(req, res, next);
  });

function generateToken(user) {
    const payload = JSON.stringify(user);
    return jwt.sign(payload, config.jwtSecret);
  }

module.exports = router;
