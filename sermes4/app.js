var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connection open')
});

var indexRouter = require('./routes/index');
var cartRouter = require('./routes/cart');
var cartItemsRouter = require('./routes/cartItem');
var usersRouter = require('./routes/users/users');
var itemsRouter = require('./routes/items');
var ordersRouter = require('./routes/order');
var imagesRouter = require('./routes/file-upload');
var categoriesRouter = require('./routes/categories');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'joe1983',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
//app.use(flash());


app.use('/', indexRouter);
app.use('/carts', cartRouter);
app.use('/users', usersRouter);
app.use('/cartItems', cartItemsRouter);
app.use('/items', itemsRouter);
app.use('/orders', ordersRouter);
app.use('/uploads', imagesRouter);
app.use('/categories', categoriesRouter);

app.get('/', function(req, res){
  req.flash('notify', 'This is a test notification.')
  res.render('index')
})

app.get('/redirect', function(req, res){
  req.flash('notify', 'Redirect successful!')
  res.redirect('/')
})

// passport config
var User = require('./models/users');
passport.use(new LocalStrategy({
  usernameField: 'email'
 // session: false
},function(username, password, done) {
  User.findOne({ email: username }, 
    function(err, user){
    
    
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false);
      }

      if (user.password != password) {
        return done(null, false);
      }
      return done(null, user);
    });
  }
));
          
passport.serializeUser((user, done)  => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
