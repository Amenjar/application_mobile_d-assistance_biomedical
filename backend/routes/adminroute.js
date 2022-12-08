const admincontroleur = require("../controlleurs/admincontrolor");
const express = require("express");
const route = express.Router();
route.post("/register", admincontroleur.register);
route.get("/getall", admincontroleur.getall);
route.get("/getbyid/:id", admincontroleur.getbyid);
module.exports = route;
