const mongoose = require("mongoose");
const usermodel = require("./usermodel"); //l'appel mte3 user li fiha heritage
const secretaireSchema = new mongoose.Schema({
	verify: {
		type: String,
		enum: ["accepter", "refuser", "en attente"],
		default: "en attente",
	},
	emailMedecien: { type: String },
	// rendezvous: [
	// 	{
	// 		//variable n7ota anna bich n7ot fil base
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: "rendez-vous", //ref li 7atatou fil model medecin
	// 	},
	// ],
	// fiche: [
	// 	{
	// 		//variable n7ota anna bich n7ot fil base
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: "fiches", //ref li 7atatou fil model medecin
	// 	},
	// ],
});
usermodel.discriminator("secretaires", secretaireSchema);
module.exports = mongoose.model("secretaires");
