const express = require("express");
const router = express.Router();

const {register} = require("../controllers/UserController")

router.get("/register", register);

module.exports = router;
