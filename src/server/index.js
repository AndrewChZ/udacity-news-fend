const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
var aylien = require("aylien_textapi");
const cors = require("cors");
const express = require('express');
const bodyParser = require("body-parser");
const mockAPIResponse = require('./mockAPI.js');
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()

app.use(cors());

app.use(express.static('dist'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
