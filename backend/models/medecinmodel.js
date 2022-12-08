const mongoose = require("mongoose");
const usermodel = require("./usermodel"); //l'appel mte3 user li fiha heritage
const medecinSchema = new mongoose.Schema({
	specialite: {
		type: String,
		required: true,
		trim: true,
	},
	adresseCabinet: {
		type: String,
		required: true,
		trim: true,
	},

	verify: {
		type: String,
		enum: ["accepter", "refuser", "en attente"],
		default: "en attente",
	},

	//     fiche:[{//variable n7ota anna bich n7ot fil base
	//         type:mongoose.Schema.Types.ObjectId,
	//         ref:"fiches"//ref li 7atatou fil model medecin
	//     }],
	// dossier_medicale:[{//variable n7ota anna bich n7ot fil base
	//         type:mongoose.Schema.Types.ObjectId,
	//         ref:"dossiers"//ref li 7atatou fil model medecin
	//     }],
});
usermodel.discriminator("medecins", medecinSchema);
module.exports = mongoose.model("medecins");
