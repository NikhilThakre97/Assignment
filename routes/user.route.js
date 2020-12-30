const express = require("express");
const router = express.Router();

const {getUsers,postUser} = require("../controllers/user.controller")

router.get("/users",getUsers)

router.get("/usersadd/:name/:email/:pin", postUser)


module.exports = router;