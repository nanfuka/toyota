const express = require("express");
const morgan = require("morgan");
const parser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
const mysql = require("mysql");

app.use(express.static("./public"));

app.use(morgan("short"));

app.use(parser.urlencoded({ extended: false }));

// app.listen(3005);
const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  database:'toyota',
  password: 'testt'

});
var html_dir = './public/'
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });
app.get('/', function (req, res) {
  res.sendfile(html_dir + 'toyota.html');
});

app.post("/db", (req, res) => {
  let object = {
    id: req.body.id,
    name: req.body.name,
    towncode: req.body.towncode,
    retail: req.body.retail,
    shipmethod: req.body.shippingss,
    partnumber: req.body.partnumber,
    description: req.body.description,

    price: req.body.price,
    quantity: req.body.quantity,
    oversize: req.body.quantity,
    cost: req.body.cost,
    salestax: req.body.salestax,

    shipping: req.body.shipping,
    total: req.body.total

  };

  console.log(object.id)
  const querrystring = "INSERT INTO purchases(id, name,towncode,retail, shippingmethod, partnumber,description, price,quantity,oversize, cost,salestax,shipping,total) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  connection.query(querrystring,
    [
    parseInt(object.id), 
    object.name,
    object.towncode,
    object.retail,
    object.shipmethod,
    object.partnumber,
    object.description,
    object.price,
    object.quantity,
    object.oversize,
    object.cost,
    object.salestax,
    object.shipping,
    object.total
  ]);

  return res.sendfile(html_dir + 'toyota.html');
    return false;
  res.end();
});

app.listen(3009);

console.log("App running at Port 3009");
