const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy


const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());

const jwt = require('jsonwebtoken');


mongoose.connect(
  process.env.MONGO_DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log("Connected to Mongo Db")
}).catch((err) => {
  console.log(`Error connecting to Mongo Db: ${err}`);
})

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
}) 

const User = require('./models/user');
const Message = require('./models/message');


// endpoint for registration of the user

app.post('/register', (req, res) => {
  const { name, email, password, image } = req.body;

  // create a new user object
  const newUser = new User({ name, email, password, image });
  
  // save the user to the database

  newUser.save()
  .then(() => {
    res.status[200].json({ message: "Registration successfully"})
  })
  .catch((err) => {
    console.log('Registration failed', err);
    res.status[500].json({ message: "Registration failed"})

  })
})