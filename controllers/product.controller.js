
var product = [{
    ProductName:"Boiled Rice",
    ProductId:"1",
    Category:"Rice"
    },
    {
    ProductName:"Idli Rice",
    ProductId:"2",
    Category:"Rice"
    },
    {
    ProductName:"Raw Rice",
    ProductId:"3",
    Category:"Rice"
    },
    {
    ProductName:"Basmati Rice",
    ProductId:"4",
    Category:"Rice"
    },
    {
    ProductName:"Brown Rice",
    ProductId:"5",
    Category:"Rice"
    }];



let getProducts = (req,res) => res.json(product.filter((item) => item.Category == req.params.Category));

let postProduct = (req,res) => {
    product.push(req.params);
    res.json("products successfully saved.")
}


module.exports = {getProducts,postProduct}