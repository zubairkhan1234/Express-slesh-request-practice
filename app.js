var express = require("express");
const { url } = require("inspector");
const { connected } = require("process");
var app = express();


app.use(function (req , res, next){
    console.log("method is ", req.method)
    console.log("url is " , req.url)
    console.log("connection is ", req.connection.remoteAddress)
    console.log("connection is ", req.connection.remotePort)
    res.send("wellcome");

    next();
})

app.get("/bulb" ,function(req, res, next){
    res.send("bulb is on ")
})
app.post("/bulb" ,function(req, res, next){
    res.send("bulb is on ")
})

app.listen(3000,() => {
    console.log ("surver is running on port 3000")
} )

