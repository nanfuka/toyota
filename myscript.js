// var towncode = document.getElementById("towncode").value;

// function which validates all fields in the form
ValidData = () => {
    // the variables that cocnstitute the valid data function
    const customerId = document.getElementById('id');
    var towncode = document.getElementById("towncode");
    var name = document.getElementById("name");
    var partnumber = document.getElementById("partnumber");
    var description = document.getElementById("description");
    var price = document.getElementById("price");
    var quantity = document.getElementById("quantity");


    // validate customer id so that it only accepts numbers

    if (Number(customerId.value)) {
        customerId.style.border = "2px green solid";
    }
    else {
        document.getElementById("custId").innerHTML = " Customer ID cannot be missing, it should not contain any blank spaces and should contain only numbers"
        customerId.style.border = "2px red solid";
    }
    //  validate towncode Town code must always be entered as exactly three characters

    const townnumber = /^[A-Za-z]+$/;
    if (towncode.value.match(townnumber) && towncode.value.length === 3) {
        towncode.style.border = "2px green solid";
    }
    else {
        document.getElementById("towncodeerror").innerHTML = " Town code must always be entered as exactly three characters"
        towncode.style.border = "2px red solid";
    }
    // validate customer name Customer Name cannot be missing.

    const cust_name = /^[A-Za-z]+$/;
    if (name.value.match(cust_name)) {
        name.style.border = "2px green solid";
    }
    else {
        document.getElementById("nameerror").innerHTML = " Customer name should be made up of characters and should not be empty"
        name.style.border = "2px red solid";
    }
    // validate partnumber Part Number cannot be missing.

    if (Number(partnumber.value) > 0) {
        partnumber.style.border = "2px green solid";
    }
    else {
        document.getElementById("partnumber_error").innerHTML = " Part Number should consitute of only numbers and should not be missing"
        partnumber.style.border = "2px red solid";
    }
    // validate description Description cannot be missing.
    const descript = /^[A-Za-z]+$/;
    if (description.value.match(descript)) {
        description.style.border = "2px green solid";
    }
    else {
        document.getElementById("disc_error").innerHTML = " Description cannot be missing."
        description.style.border = "2px red solid";
    }

    // validate price per part Price must be a number that is greater than zero.
    if (Number(price.value) > 0) {
        price.style.border = "2px green solid";
    }
    else {
        document.getElementById("price_error").innerHTML = " Price must be a number that is greater than zero."
        price.style.border = "2px red solid";
    }
    // validate quantity Quantity must be a number that is greater than zero.

    if (Number(quantity.value > 0)) {
        quantity.style.border = "2px green solid";
    }
    else {
        document.getElementById("quantity_error").innerHTML = " Quantity must be a number that is greater than zero."
        quantity.style.border = "2px red solid";
    }

}











// Function for culculating the cost
var Cost = () => {
    // get cost
    
    var price = document.getElementById("price").value;
    var quantity = document.getElementById("quantity").value;


    var cos = price * quantity;
    var oversizecharge = 5 * quantity;
    
    document.getElementById("cost").value = cos;
    return cos;
}

// Function for culculating all sales taxes
var SalesTax = () => {
    // get sales tax for kampala

    towncode = document.getElementById("towncode").value;
    var checkbox = document.getElementById("chek").checked;
    var taxrate = 0.1 * Cost();
    var cos = Cost();

    if (towncode === "KLA" && checkbox === true) {   
        document.getElementById("salestax").value = taxrate;
        return taxrate;

    }

    // get sales tax for mbarara and entebe
    else if (towncode === "MBR" && checkbox === true) {
        var taxrate = 0.05 * cos;
        document.getElementById("salestax").value = taxrate;
        return taxrate;
    }
    else if (towncode === "EBB" && checkbox === true) {
        var taxrate = 0.05 * cos;
        document.getElementById("salestax").value = taxrate;
        return taxrate;

    }
    // get sales tax for any other town
    else {
        var taxrate = 0;
        document.getElementById("salestax").value = taxrate;
        return taxrate;
    }
}

// method for culculating shipping and handling
var ShippingHandling = () => {
    var checkUps = document.getElementById("ups").checked;
    var checkFedex = document.getElementById("fedex").checked;
    var checkFedair = document.getElementById("fedair").checked;
    var checkUspostal = document.getElementById("uspostal").checked;
    var oversize = document.getElementById("oversize").checked;
    var quantity = document.getElementById("quantity").value;


    // get shipping cost by ups
    if (checkUps === true && oversize === false) {
        shippingCost = 7 * quantity;
        document.getElementById("shippingandhandling").value = shippingCost;
        return shippingCost;

    }
    // get shipping cost for ups in oversize
    else if (checkUps === true && oversize === true) {
        regshippingCost = (7 + 5) * quantity;
        document.getElementById("shippingandhandling").value = regshippingCost;
        return regshippingCost;
    }
    // get shipping cost by fedground
    else if (checkFedex === true) {
        shippingCost = 9.25 * quantity;
        document.getElementById("shippingandhandling").value = shippingCost;
        return shippingCost;
    }
    // get shipping cost for fedexground in overweight
    else if (checkFedex === true && oversize === true) {

        regshippingCost = (9.25 + 5) * quantity;
        document.getElementById("shippingandhandling").value = regshippingCost;
        return regshippingCost;
    }
    // get shipping cost by fedair
    else if (checkFedair === true) {
        shippingCost = 12 * quantity;
        document.getElementById("shippingandhandling").value = shippingCost;
        return shippingCost;
    }
    //  get shipping cost by fedair in oversize
    else if (checkFedair === true && oversize === true) {

        regshippingCost = (12 + 5) * quantity;
        document.getElementById("shippingandhandling").value = regshippingCost;
        return regshippingCost;
    }
    //  get shipping cost by us postal Air services
    else if (checkUspostal === true) {
        shippingCost = 8.50 * quantity;
        document.getElementById("shippingandhandling").value = shippingCost;
        return shippingCost;
    }
    // get shipping cost by US postal Air if oversize
    else if (checkUspostal === true && oversize === true) {

        regshippingCost = (8.50 + 5) * quantity;
        document.getElementById("shippingandhandling").value = regshippingCost;
        return regshippingCost;
    }
    // get shipping cost if none is selected
    else {
        shippingCost = 7 * quantity;
        document.getElementById("shippingandhandling").value = shippingCost;
        return shippingCost;
    }
}

// function which returns the general total
var Total = () =>{
    cost = Cost();
    salestaxes = SalesTax();
    shippingcost = ShippingHandling();
    generalTotal = cost + salestaxes + shippingcost;
    document.getElementById("total").value = generalTotal;
    return generalTotal;

}

Compute = () => {
//     if (ValidData){
//         ValidData();
//     }
// else if(!ValidData){
// return Cost();
ValidData(), Cost(), SalesTax(), ShippingHandling(),Total();



    
        
        // SalesTax()
        // ShippingHandling()
        // Total();
    }



    // // get cost
    // var price = document.getElementById("price").value;
    // var quantity = document.getElementById("quantity").value;


    // var cos = price * quantity;
    // var oversizecharge = 5 * quantity;
    // document.getElementById("cost").value = cos;

    // // get sales tax for kampala

    // towncode = document.getElementById("towncode").value;
    // var checkbox = document.getElementById("chek").checked;
    // ValidData();

    // if (towncode === "KLA" && checkbox === true) {
    //     var taxrate = 0.1 * cos;
    //     document.getElementById("salestax").value = taxrate;

    // }

    // // get sales tax for mbarara and entebe
    // else if(towncode ==="MBR" && checkbox === true){
    //     var taxrate = 0.05 * cos;
    //      document.getElementById("salestax").value = taxrate;

    //  }
    //  else if(towncode ==="EBB" && checkbox === true){
    //     var taxrate = 0.05 * cos;
    //      document.getElementById("salestax").value = taxrate;

    //  }
    //  // get sales tax for any other town
    // else {
    //     var taxrate = 0;
    //     document.getElementById("salestax").value = taxrate;
    // }
    // console.log(checkbox);
    //     // get shipping and handling costs
    //     // var shippingCost = document.getElementById("shippingandhandling").value;
    //     // get shipping cost for ups
    //     var checkUps = document.getElementById("ups").checked;
    //     var checkFedex = document.getElementById("fedex").checked;
    //     var checkFedair = document.getElementById("fedair").checked;
    //     var checkUspostal = document.getElementById("uspostal").checked;
    //     var oversize = document.getElementById("oversize").checked;
    // // get shipping cost by ups
    //     if (checkUps===true && oversize ===false){
    //         shippingCost = 7 * quantity;
    //         document.getElementById("shippingandhandling").value = shippingCost;

    //     }
    // // get shipping cost for ups in oversize
    //     else if (checkUps===true && oversize ===true){
    //         regshippingCost = (7+5) * quantity;
    //         document.getElementById("shippingandhandling").value = regshippingCost;
    //     }
    //     // get shipping cost by fedground
    //     else if(checkFedex===true){
    //         shippingCost = 9.25 * quantity;
    //         document.getElementById("shippingandhandling").value = shippingCost;
    //     }
    //     // get shipping cost for fedexground in overweight
    //     else if (checkFedex===true && oversize ===true){

    //         regshippingCost = (9.25+5) * quantity;
    //         document.getElementById("shippingandhandling").value = regshippingCost;
    //     }
    // // get shipping cost by fedair
    //     else if(checkFedair===true){
    //         shippingCost = 12 * quantity;
    //         document.getElementById("shippingandhandling").value = shippingCost;
    //     }
    //     //  get shipping cost by fedair in oversize
    //     else if (checkFedair===true && oversize ===true){

    //         regshippingCost = (12 + 5) * quantity;
    //         document.getElementById("shippingandhandling").value = regshippingCost;
    //     }
    // //  get shipping cost by us postal Air services
    //     else if(checkUspostal===true){
    //         shippingCost = 8.50 * quantity;
    //         document.getElementById("shippingandhandling").value = shippingCost;
    //     }
    // // get shipping cost by US postal Air if oversize
    // else if (checkUspostal===true && oversize ===true){

    //     regshippingCost = (8.50 + 5) * quantity;
    //     document.getElementById("shippingandhandling").value = regshippingCost;
    // }
    // // get shipping cost if none is selected
    //     else{
    //         shippingCost = 7 * quantity;
    //         document.getElementById("shippingandhandling").value = shippingCost;
    //     }
    // get total
//     generalTotal = cos + taxrate + shippingCost;
//     document.getElementById("total").value = generalTotal;

// }
// ValidData = () =>{
// // the variables that cocnstitute the valid data function
// const customerId = document.getElementById('id');
// var towncode = document.getElementById("towncode");
// var name = document.getElementById("name");
// var partnumber = document.getElementById("partnumber");
// var description = document.getElementById("description");
// var price = document.getElementById("price");
// var quantity = document.getElementById("quantity");


// // validate customer id so that it only accepts numbers

//  if (Number(customerId.value)) {
//      customerId.style.border = "2px green solid";
//  }
//  else {
//      document.getElementById("custId").innerHTML = " Customer ID cannot be missing, it should not contain any blank spaces and should contain only numbers"
//      customerId.style.border = "2px red solid";
//  }
// //  validate towncode Town code must always be entered as exactly three characters

//  const townnumber = /^[A-Z]+$/;
//  if (towncode.value.match(townnumber) && towncode.value.length==3) {
//      towncode.style.border = "2px green solid";
//  }
//  else {
//      document.getElementById("towncodeerror").innerHTML = " Town code must always be entered as exactly three characters"
//      towncode.style.border = "2px red solid";
//  }
// // validate customer name Customer Name cannot be missing.

// const cust_name = /^[A-Za-z]+$/;
// if (name.value.match(cust_name)) {
//     name.style.border = "2px green solid";
// }
// else {
//     document.getElementById("nameerror").innerHTML = " Customer name should be made up of characters and should not be empty"
//     name.style.border = "2px red solid";
// }
// // validate partnumber Part Number cannot be missing.

// if (Number(partnumber.value)> 0) {
//     partnumber.style.border = "2px green solid";
// }
// else {
//     document.getElementById("partnumber_error").innerHTML = " Part Number should consitute of only numbers and should not be missing"
//     partnumber.style.border = "2px red solid";
// }
// // validate description Description cannot be missing.
// const descript = /^[A-Za-z]+$/;
// if (description.value.match(descript)) {
//     description.style.border = "2px green solid";
// }
// else {
//     document.getElementById("disc_error").innerHTML = " Description cannot be missing."
//     description.style.border = "2px red solid";
// }

// // validate price per part Price must be a number that is greater than zero.
// if (Number(price.value) > 0 ) {
//     price.style.border = "2px green solid";
// }
// else {
//     document.getElementById("price_error").innerHTML = " Price must be a number that is greater than zero."
//     price.style.border = "2px red solid";
// }
// // validate quantity Quantity must be a number that is greater than zero.

// if (Number(quantity.value > 0)) {
//     quantity.style.border = "2px green solid";
// }
// else {
//     document.getElementById("quantity_error").innerHTML = " Quantity must be a number that is greater than zero."
//     quantity.style.border = "2px red solid";
// }

// }



