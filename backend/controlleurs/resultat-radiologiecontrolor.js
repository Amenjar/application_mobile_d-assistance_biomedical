const resultatradiologiemodel = require("../models/resultatradiologiemodel");
module.exports = {
	create: async (req, res) => {
		// console.log(req.body);
		// req.body.fichierRadiologie = req.body.fileName;

		// const resultatRadiologie = new resultatradiologiemodel(req.body);
		// console.log("model : ", resultatRadiologie);
		// console.log(req.body);
		// await resultatRadiologie.save(req.body, (err, resultatRadiologie) => {
		// 	if (err) {
		// 		res.status(406).json({
		// 			success: false,
		// 			message: "Failed to created resultat",
		// 			data: null,
		// 			err,
		// 		});
		// 	} else {
		// 		console.log("resultat Add successufly");
		// 		res.status(201).json({
		// 			success: true,
		// 			message: "resultat Add successufly",
		// 			data: category,
		// 		});
		// 	}
		// 	//pour quitter la fonction async
		// });
		console.log("1 : ", req.body);
		req.body.fichierRadiologie = req.body.fileName;
		console.log("2 : ", req.body);
		const resultatRadiologie = new resultatradiologiemodel(req.body);
		console.log("3 : ", resultatRadiologie);
		await resultatRadiologie.save(req.body, (err, resultatRadiologie) => {
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to created resultat",
					data: null,
					err,
				});
			} else {
				console.log("resultat Add successufly");
				res.status(201).json({
					success: true,
					message: "resultat Add successufly",
					data: resultatRadiologie,
				});
			}
			//pour quitter la fonction async
		});
	},
	getall: async (req, res) => {
		await resultatradiologiemodel.find({}).exec((err, items) => {
			//pour enregistrer les donneées tssir verification au cas ou fama champ ou 7kaya na9sa ye3mel messag erreur si non cv tet3eda
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to created resultat",
					data: null,
					err,
				});
			} else {
				res.status(201).json({
					success: true,
					message: " success",
					data: items,
				});
			}
			//pour quitter la fonction async
		});
	},
	getNb: async (req, res) => {
		await resultatradiologiemodel
			.find({})
			.count()
			.exec((err, items) => {
				//pour enregistrer les donneées tssir verification au cas ou fama champ ou 7kaya na9sa ye3mel messag erreur si non cv tet3eda
				if (err) {
					res.status(406).json({
						success: false,
						message: "Failed to created resultat",
						data: null,
						err,
					});
				} else {
					res.status(201).json({
						success: true,
						message: " success",
						data: items,
					});
				}
				//pour quitter la fonction async
			});
	},
	getbyid: async (req, res) => {
		await resultatradiologiemodel.findById(req.params.id).exec((err, item) => {
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to created resultat",
					data: null,
					err,
				});
			} else {
				res.status(201).json({
					success: true,
					message: " success",
					data: item,
				});
			}
			//pour quitter la fonction async
		});
	},
	update: async (req, res) => {
		await resultatradiologiemodel
			.findByIdAndUpdate(req.params.id, req.body, { new: true })
			.exec((err, item) => {
				if (err) {
					res.status(406).json({
						success: false,
						message: "Failed to update resultat",
						data: null,
						err,
					});
				} else {
					res.status(201).json({
						success: true,
						message: " resultat updated successufuly",
						data: item,
					});
				}
				//pour quitter la fonction async
			});
	},
	delete: async (req, res) => {
		await resultatradiologiemodel
			.findByIdAndRemove(req.params.id)
			.exec((err, item) => {
				if (err) {
					res.status(406).json({
						success: false,
						message: "Failed to delete resultat",
						data: null,
						err,
					});
				} else {
					res.status(201).json({
						success: true,
						message: "resultat deleted successufuly",
						data: item,
					});
				}
				//pour quitter la fonction async
			});
	},
};
