var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req,res) {
    res.sendFile(__dirname +'/views/index.html');
});

app.get('/patient', function (req,res) {
    res.sendFile(__dirname + '/views/patient.html');
})

app.get('/doctor', function (req,res) {
    res.sendFile(__dirname + '/views/doctor.html');
});

app.get('/admin', function (req,res) {
    res.sendFile(__dirname + '/views/admin.html');
});

app.get('/healthstatus', function (req,res) {
    res.sendFile(__dirname + '/views/healthStatus.html');
});


app.listen(8000, function() {
    console.log("server is running");
})