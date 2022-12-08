const mongoose = require("mongoose");
const resultatAnalyseSchema = new mongoose.Schema({
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
	emailpatient: {
		type: String,
		required: true,
		trim: true,
	},
	path: {
		type: String,
	},

	// secretaire:{//variable n7ota anna bich n7ot fil base
	//     type:mongoose.Schema.Types.ObjectId,
	//     ref:"secretaires"//ref li 7atatou fil model medecin
	// },
	// medecin:{//variable n7ota anna bich n7ot fil base
	//     type:mongoose.Schema.Types.ObjectId,
	//     ref:"medecins"//ref li 7atatou fil model medecin
	// },
});

module.exports = mongoose.model("resultatAnaly", resultatAnalyseSchema);
