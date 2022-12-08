const ordonancecontroleur = require("../controlleurs/ordonnancecontrolor");
const express = require("express");
const route = express.Router();
route.post("/create", ordonancecontroleur.create);
route.get("/getall", ordonancecontroleur.getall);
route.get("/getbyid/:id", ordonancecontroleur.getbyid);
route.put("/update/:id", ordonancecontroleur.update);
route.delete("/delete/:id", ordonancecontroleur.delete);
module.exports = route;
