const resultatRadiologiecontrolleur = require("../controlleurs/resultat-radiologiecontrolor");
const express = require("express");
//const upload = require("../midlware/uploadFile");
//const { verifytoken } = require("../midlware/verify");
const route = express.Router();
// route.post(
// 	"/create",
// 	upload.single("photo"),
// 	verifytoken,
// 	resultatRadiologiecontrolleur.create
// );
route.post("/create", resultatRadiologiecontrolleur.create);
route.get("/getall", resultatRadiologiecontrolleur.getall);
route.get("/getNb", resultatRadiologiecontrolleur.getNb);
route.get("/getbyid/:id", resultatRadiologiecontrolleur.getbyid);
route.put("/update/:id", resultatRadiologiecontrolleur.update);
route.delete("/delete/:id", resultatRadiologiecontrolleur.delete);
module.exports = route;
