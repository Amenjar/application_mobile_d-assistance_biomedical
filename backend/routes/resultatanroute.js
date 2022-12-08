const resultatAncontrolleur = require("../controlleurs/resultat-analycontrolor");
const express = require("express");
// const upload = require("../midlware/uploadFile");
// const { verifytoken } = require("../midlware/verify");
const route = express.Router();
// route.post(
// 	"/create",
// 	upload.single("photo"),
// 	verifytoken,
// 	resultatAncontrolleur.create
// );
route.post("/create", resultatAncontrolleur.create);
route.get("/getall", resultatAncontrolleur.getall);
route.get("/getNb", resultatAncontrolleur.getNb);
route.get("/getbyid/:id", resultatAncontrolleur.getbyid);
route.put("/update/:id", resultatAncontrolleur.update);
route.delete("/delete/:id", resultatAncontrolleur.delete);
module.exports = route;
