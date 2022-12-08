const certificatcontroleur = require("../controlleurs/certificatcontrolor");
const express = require("express");
const route = express.Router();
route.post("/create", certificatcontroleur.create);
route.get("/getall", certificatcontroleur.getall);
route.get("/getbyid/:id", certificatcontroleur.getbyid);
route.put("/update/:id", certificatcontroleur.update);
route.delete("/delete/:id", certificatcontroleur.delete);
module.exports = route;
