const mongoose = require("mongoose");
const rendezVousSchema = new mongoose.Schema({
	nom: {
		type: String,
		required: true,
		trim: true,
	},
	prenom: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
	},
	date: {
		type: String,
		required: true,
		trim: true,
	},
	personnel: {
		// exp: med , Radiologie , analyse
		type: String,
	},
	adresseCabinet:{
		type:String,
	}
});

module.exports = mongoose.model("rendez-vous", rendezVousSchema);
