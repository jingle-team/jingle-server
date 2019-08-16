const express = require('express');
const app = express();
const router = express.Router();
const mongoo = require('mongodb');


const mongoose = require('mongoose');
let dev_db_url = 'put ur db here';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const user = require('./routes/user.route');

app.use('/users', user);


/* GET home page. */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


let port = 3000

app.listen(port, () => {
  console.log('Listening on ' + [port]);
});