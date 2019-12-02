

function getIndex(req, res) {
  res.sendfile(html_dir + 'toyota.html');
};

function postToDb(req, res){
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

    shipping: req.body.shippping,
    total: req.body.total
//       setTimeout(function(){
    
//       res.redirect("/")
//       res.end();
    
//   },1000);

  };

  console.log(object.id)
}

module.exports = {getIndex,postToDb}
