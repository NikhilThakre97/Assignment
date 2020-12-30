const express = require("express");
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/",require("./routes/user.route"));
app.use("/",require("./routes/product.route"));



app.listen(3030)