require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.SERVER_PORT;

app.use('/uploads', express.static("./uploads"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));


const router = require('./src/routers/index.js');

app.use('/api/v1', router);


app.listen(port, () => {
    console.log(`\n Cors Enable App Listen Port ${port}`);

});