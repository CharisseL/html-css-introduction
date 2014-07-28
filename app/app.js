'use strict';

//call express, which is a function
var express = require('express');
var app = express();
//when node receives "get" request, express calls this function.
//req = request(what browser wants;
//res=response(what node gives back to browser)
//into a path(root)
app.get('/', function (req,res){
  res.send('I just received a message, thanks!');
});

app.listent(3000);
