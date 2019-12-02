var methods = require('./controller')
const express = require("express");
const morgan = require("morgan");
const parser = require("body-parser");
const app = express();

app.use(express.static("./public"));
app.use(morgan("short"));
app.use(parser.urlencoded({ extended: false }));
var html_dir = './public/'

app.get('/', (req, res)=>{methods.getIndex(req, res)})
app.get('/db', (req, res)=>{methods.postToDb (req, res)})


app.listen(3009);
console.log("App running at Port 3009");

