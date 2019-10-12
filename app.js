debugger
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();
const mongoose = require('mongoose');

let dev_db_url = 'mongodb://admin-nurse-ai:b8Mv9ML!gtv3YQh@ds333238.mlab.com:33238/nurseai';

let mongoDB =  dev_db_url;

mongoose.connect(mongoDB, {useNewUrlParser: true, useFindAndModify: false });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(cors())

app.use('/products', product);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}


app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
