const mongoose = require("mongoose");
const certificatSchema = new mongoose.Schema({
	nompatient: {
		type: String,
		required: true,
		trim: true,
	},
	prenompatient: {
		type: String,
		required: true,
		trim: true,
	},
	nommedecin: {
		type: String,
		required: true,
		trim: true,
	},
	prenommedecin: {
		type: String,
		required: true,
		trim: true,
	},
	emailpatient: {
		type: String,
		required: true,
		trim: true,
	},
	date_certificat: {
		type: String,
		required: true,
	},
	contenu: {
		type: String,
		required: true,
		trim: true,
	},

	// medecin:{//variable n7ota anna bich n7ot fil base
	//     type:mongoose.Schema.Types.ObjectId,
	//     ref:"medecins"//ref li 7atatou fil model medecin
	// },
	// patient:{//variable n7ota anna bich n7ot fil base
	//     type:mongoose.Schema.Types.ObjectId,
	//     ref:"patients"//ref li 7atatou fil model medecin
	// },
	// responsable_analyse:[{//variable n7ota anna bich n7ot fil base
	//     type:mongoose.Schema.Types.ObjectId,
	//     ref:"responsables"//ref li 7atatou fil model medecin
	// }],
});

module.exports = mongoose.model("certificats", certificatSchema);
