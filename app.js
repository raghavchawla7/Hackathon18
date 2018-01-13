var express = require('express');
var app = express();

app.use(express.static(__dirname +'/Hackathon18'));


app.get('/',function (req,res) {
    res.sendFile(__dirname +'/Hackathon18/index.html');

});

app.get('/patient',function (req,res) {
    res.sendFile(__dirname + '/Hackathon18/patient.html');
})

app.get('/doctor',function (req,res) {
    res.sendFile(__dirname + '/Hackathon18/doctor.html');
});

app.get('/nurse',function (req,res) {
    res.sendFile(__dirname + '/Hackathon18/nurse.html');
});

app.get('/caretaker',function (req,res) {
    res.sendFile(__dirname + '/Hackathon18/caretaker.html');
});


app.listen(8000, function() {
    console.log("server is running");
})