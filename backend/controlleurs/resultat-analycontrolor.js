const resultatanmodel = require("../models/resultatanmodel");
// const multer = require("multer");
// const storage = multer.diskStorage({
// 	destination: (req, file, cb) => {
// 		cb(null, "./files/");
// 	},
// 	filename: (req, file, cb) => {
// 		const fileName = file.originalname.toLowerCase().split(" ").join("-");
// 		cb(null, file.fieldname + "-" + fileName);
// 	},
// });

// var upload = multer({ storage: storage }).single("file");

module.exports = {
	create: async (req, res) => {
		//version 1
		//req.body.fichierAnaly = req.file.filename;
		console.log(req.body);
		req.body.path = req.body.fileName;
		console.log(req.body.fileName);
		const resultatAna = new resultatanmodel(req.body);
		console.log(resultatAna);
		await resultatAna.save(req.body, (err, resultatAna) => {
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
					data: resultatAna,
				});
			}
			//pour quitter la fonction async
		});

		//version 2
		// upload(req, res, async function (err) {
		// 	console.log("a=upload ");
		// 	if (err) {
		// 		console.log(err);
		// 		console.log("error uploading file");
		// 	} else {
		// 		if (req.file == null) {
		// 			console.log("not found !");
		// 		} else {
		// 			const path = req.file.path;
		// 			req.body.path = path;
		// 			const resultatAna = new resultatanmodel(req.body);
		// 			await resultatAna.save(req.body, (err, resultatAna) => {
		// 				//pour enregistrer les donneées tssir verification au cas ou fama champ ou 7kaya na9sa ye3mel messag erreur si non cv tet3eda
		// 				if (err) {
		// 					res.status(406).json({
		// 						success: false,
		// 						message: "Failed to created resultat",
		// 						data: null,
		// 						err,
		// 					});
		// 				} else {
		// 					console.log("resultat Add successufly");
		// 					res.status(201).json({
		// 						success: true,
		// 						message: "resultat Add successufly",
		// 						data: resultatAna,
		// 					});
		// 				}
		// 				//pour quitter la fonction async
		// 			});
		// 		}
		// 	}
		// });
	},
	getall: async (req, res) => {
		await resultatanmodel.find({}).exec((err, items) => {
			//pour enregistrer les donneées tssir verification au cas ou fama champ ou 7kaya na9sa ye3mel messag erreur si non cv tet3eda
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to created category",
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
		await resultatanmodel
			.find({})
			.count()
			.exec((err, items) => {
				//pour enregistrer les donneées tssir verification au cas ou fama champ ou 7kaya na9sa ye3mel messag erreur si non cv tet3eda
				if (err) {
					res.status(406).json({
						success: false,
						message: "Failed to created category",
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
		await resultatanmodel.findById(req.params.id).exec((err, item) => {
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to created category",
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
		await resultatanmodel
			.findByIdAndUpdate(req.params.id, req.body, { new: true })
			.exec((err, item) => {
				if (err) {
					res.status(406).json({
						success: false,
						message: "Failed to update category",
						data: null,
						err,
					});
				} else {
					res.status(201).json({
						success: true,
						message: " category updated successufuly",
						data: item,
					});
				}
				//pour quitter la fonction async
			});
	},
	delete: async (req, res) => {
		await resultatanmodel.findByIdAndRemove(req.params.id).exec((err, item) => {
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to delete category",
					data: null,
					err,
				});
			} else {
				res.status(201).json({
					success: true,
					message: "category deleted successufuly",
					data: item,
				});
			}
			//pour quitter la fonction async
		});
	},
	//ones
};
