var users = [{
    name : "nikhil",
    email : "thakre@gmail",
    password: "1245",
    address : "nagpur"
    },
    {
        name : "akash",
        email : "akash@gmail",
        password: "2445",
        address : "nagpur"
    },
    {
        name : "pawan",
        email : "pawan@gmail",
        password: "7845",
        address : "nagpur"
    }

];


let getUsers = (req,res) => {
    res.json(users);
}

let postUser = (req,res) => {
    users.push(req.params);
    res.send("user successfully submitted his data");
}

module.exports = {getUsers,postUser}