const express = require('express')// Include ExpressJS
const session = require('express-session')
const app = express() // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware
const path = require('path')
const { check, validationResult, cookie } = require('express-validator');
const { v4: uuidv4 } = require('uuid'); // uuid generator
const User = require('./user.js'); // User Model
const passport = require('passport');  // authentication
const connectEnsureLogin = require('connect-ensure-login');// authorization
const UserDetails = require('./user');
const user = require('./user.js');

const publicDirPath = path.join(__dirname, '/')
app.use(express.static(publicDirPath))

app.use(bodyParser.urlencoded({ extended: false }));

// Configure Sessions Middleware
app.use(session({
  secret: 'r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));

// Configure Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// Passport Local Strategy
passport.use(User.createStrategy());

// To use with sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(session({
  genid: function (req) {
	return uuidv4();
  },
  secret: 'r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));

var loginValidate = [
  // Check Username
  check('username').isEmail().withMessage('Username Must Be an Email Address').trim().escape().normalizeEmail(),
  // Check Password
  check('password').isLength({ min: 8 }).withMessage('Password Must Be at Least 8 Characters').matches('[0-9]').withMessage('Password Must Contain a Number').matches('[A-Z]').withMessage('Password Must Contain an Uppercase Letter').trim().escape()];

// Route to Login Page
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/register.html');
});

app.post('/register', (req, res) => {
  console.log(req)
  UserDetails.register({ username: req.body.email, active: false }, req.body.password);
  res.redirect('/login');
});

app.post('/login', loginValidate, passport.authenticate('local', { failureRedirect: '/' }), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) { //validation input check
  	return res.status(422).json({ errors: errors.array() });
  }
  else {
    res.redirect('/dashboard');
  }
});

app.get('/dashboard', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.send(`Hello ${req.user.username}. Your session ID is ${req.sessionID} 
  and your session expires in ${req.session.cookie.maxAge} 
  milliseconds.<br><br>
  <a href="/logout">Log Out</a><br><br><a href="/secret">Members Only</a>`);
});

const port = 3000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));