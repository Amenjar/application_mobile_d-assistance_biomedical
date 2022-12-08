// const mongoose = require("mongoose");
// const resultatRadiologieSchema = new mongoose.Schema({
// 	nomPatient: {
// 		type: String,
// 		required: true,
// 	},
// 	prenomPatient: {
// 		type: String,
// 		required: true,
// 	},
// 	email: {
// 		type: String,
// 		required: true,
// 	},
// 	fichierRadiologie: {
// 		type: String,
// 	},
// });
// module.exports = mongoose.model("resultatRadiologie", resultatRadiologieSchema);
const mongoose = require("mongoose");
const resultatRadiologieSchema = new mongoose.Schema({
	nompatient: {
		type: String,
		required: true,
	},
	prenompatient: {
		type: String,
		required: true,
	},
	emailpatient: {
		type: String,
		required: true,
	},
	fichierRadiologie: {
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

module.exports = mongoose.model("resultatRadiologie", resultatRadiologieSchema);
