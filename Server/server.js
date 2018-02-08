const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;
const router = require('./router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.use(express.static(path.join(__dirname, '../Client/Static')));

app.listen(port, (err) => err ? console.log('Error: ', err) : console.log(`Connection to port ${port} success`));