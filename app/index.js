
'use strict';

//call express, which is a function
var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));
//when node receives "get" request, express calls this function.
//req = request(what browser wants;
//res=response(what node gives back to browser)
//into a path(root)
app.get('/', function (req,res){
  res.send('I just received a message, thanks!');
});

app.listen(3000, function (){
  console.log('Express.js is listening...');
});
