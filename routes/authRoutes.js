const express = require("express");
const router = express.Router();
const { signin } = require("../controllers/authControllers");

router.get("/", signin);



module.exports=router