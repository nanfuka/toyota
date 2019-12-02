const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'new_password',
  database: 'toyota'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

function createTablePurchases(){
  
    createTable = "CREATE TABLE purchases(id serial PRIMARY KEY, \
        name VARCHAR (50) UNIQUE NOT NULL,\
        towncode VARCHAR (50) NOT NULL,\
        retail VARCHAR (355) UNIQUE NOT NULL,\
        shippingmethod VARCHAR (50),\
        partnumber VARCHAR (50),\
        description VARCHAR (50),\
        price VARCHAR (50),\
        quantity VARCHAR (50),\
        oversize VARCHAR (50),\
        cost VARCHAR (50),\
        salestax VARCHAR (50),\
        shipping VARCHAR (50),\
        total VARCHAR (50)\
     )";

     connection.query(createTable, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }
    });
   
    connection.end(function(err) {
      if (err) {
        return console.log(err.message);
      }
    });

}
// createTablePurchases()
function postData(id, name,
  towncode,
  retail,
  shipmethod,
  partnumber,
  description,
  price,
  quantity,
  oversize,
  cost,
  salestax,
  shipping,
  total){
  const querrystring = "INSERT INTO purchases(id, name,towncode,retail, shippingmethod, partnumber,description, price,quantity,oversize, cost,salestax,shipping,total) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

connection.query(querrystring,
  [
  parseInt(id), 
  name,
  towncode,
  retail,
  shipmethod,
  partnumber,
  description,
  price,
  quantity,
  oversize,
  cost,
  salestax,
  shipping,
  total
]);

}
module.exports = {postData}



