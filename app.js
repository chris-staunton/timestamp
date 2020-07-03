var express = require("express");
var app = express();

app.get("/", function(res,req){
    res.sendFile(__dirname + "/views/index.html");
})
app.get("/api/timestamp", function(res,req){
    var time = req.query;
    var date = new Date(time);
    var utcOb = date.toUTCString();
    var unixOb = date.valueOf();
    res.json({unix: unixOb, utc: utcOb})
})