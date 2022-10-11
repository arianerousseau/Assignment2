var express = require('express');
var app = express();
const path = require("path");
const port = 3000;
//const jsonFile = fetch('https://cat-fact.herokuapp.com/facts')
//import myJson from 'data.json' assert {type: 'json'};
//import { json, response } from 'express';

app.use(express.static('public'));

const jsonData= require('./data.json'); 

function nbFact(number){
    return number;
}

app.get('')
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/getFact', function(req, res){
    console.log("xa marche");
    console.log(req.query);
    var reqJson = req.query.number;
    //-------------------------
    /*
    var result = '"data":[';
    for(i =0; i<reqJson;i++){
        result+= '{"fact":' + '"' + jsonData.data[i].fact + '"},';
    }
    result = result.substr(0, result.length - 1);
    result+="]";
    console.log("Sending : " + result);
    res.send(JSON.stringify(result));
    */
});

app.listen(port, function(){
    console.log(`Example app listening on port ${port}!`);
});
