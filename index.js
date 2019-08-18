const express = require('express');
const app = express();
const router = express.Router();
const mongodb = require('mongodb');
require('dotenv').config();


const mongoose = require('mongoose');
console.log("Attempting to connect to Database URI: " + process.env.DATABASE_URL)
let dev_db_url = process.env.DATABASE_URL;
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const user = require('./routes/user.route');
const message = require('./routes/message.route');

app.use('/users', user);
app.use('/messages', message);


/* GET home page. */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


let port = 3000

app.listen(port, () => {
  console.log('Listening on ' + [port]);
});