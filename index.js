const web3 = require('./src/web3');

const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

app.get('/receiver', function (req, res) {
    res.sendFile(__dirname + '/src/receiver.html');
});

app.get('/sender', function (req, res) {
    res.sendFile(__dirname + '/src/sender.html');
});

app.get('/boxes', function (req, res) {
    web3.getBoxes().then(boxes => {
        res.send(boxes);
    })
});

app.post('/submit-student-data', function (req, res) {
    const name = req.body.firstName + ' ' + req.body.lastName;

    res.send(name + ' Submitted Successfully!');
});

const server = app.listen(5000, function () {
    console.log('Node server is running..');
});