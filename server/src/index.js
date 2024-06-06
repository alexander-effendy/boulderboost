const express = require('express');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS middleware
const auth = require('./auth');
const pool = require('../db');

dotenv.config();

const app = express();

// Use CORS middleware
// app.use(cors({
//   origin: 'http://localhost:5173', // Allow requests from this origin
//   credentials: true // Enable credentials (cookies, authorization headers, etc.)
// }));
app.use(cors())

app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

app.use(passport.initialize());
app.use(passport.session());



app.use((req, res, next) => {
  req.db = pool;
  next();
});

app.use('/auth', auth);

app.get('/', (req, res) => {
  res.send('Welcome to the BoulderBoost!');
});

app.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.get('/alluser', (req, res) => {
  if (req.isAuthenticated()) {
    const query = 'SELECT * FROM Users';
    pool.query(query, (err, result) => {
      if (err) {
        return res.status(500).send('Error in retrieving users');
      }
      res.status(200).json(result.rows);
    });
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.options('*', cors())

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
