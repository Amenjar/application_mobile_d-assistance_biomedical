const authentControlleur = require("../controlleurs/authentification");
const express = require("express");
const route = express.Router();
route.post("/login", authentControlleur.login);
route.put("/refreshtoken", authentControlleur.verifyRefreshToken); //ou post
route.post("/logout", authentControlleur.logout);
route.post("/forget", authentControlleur.logout);
module.exports = route;
