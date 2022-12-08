const rendezVousmodel = require("../models/rendez_vousmodel");
module.exports = {
	create: async (req, res) => {
		const rendezVous = new rendezVousmodel(req.body);

		await rendezVous.save(req.body, (err, specialite) => {
			//pour enregistrer les donneées tssir verification au cas ou fama champ ou 7kaya na9sa ye3mel messag erreur si non cv tet3eda
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to created specialite",
					data: null,
					err,
				});
			} else {
				res.status(201).json({
					success: true,
					message: "specialite Add successufly",
					data: specialite,
				});
			}
		});
	},
	getall: async (req, res) => {
		await rendezVousmodel.find({}).exec((err, items) => {
			//pour enregistrer les donneées tssir verification au cas ou fama champ ou 7kaya na9sa ye3mel messag erreur si non cv tet3eda
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to created specialite",
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
		await rendezVousmodel
			.find({})
			.count()
			.exec((err, items) => {
				if (err) {
					res.status(406).json({
						success: false,
						message: "Failed to created specialite",
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
		await rendezVousmodel.findById(req.params.id).exec((err, item) => {
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to created specialite",
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
	getbydate: async (req, res) => {
		try {
			await rendezVousmodel
				.find({ date: req.query.date })
				.exec((err, items) => {
					//lezemha tkoun kima fi lmodele
					if (err) {
						res.status(406).json({
							success: false,
							message: "Failed to got  rendez-vous by this date",
						});
					} else {
						res.status(201).json({
							success: true,
							message: "List of rendez-vous",
							data: items,
						});
					}
				});
		} catch (error) {
			res.status(500).json(error);
		}
	},
	update: async (req, res) => {
		await rendezVousmodel
			.findByIdAndUpdate(req.params.id, req.body, { new: true })
			.exec((err, item) => {
				if (err) {
					res.status(406).json({
						success: false,
						message: "Failed to update specialite",
						data: null,
						err,
					});
				} else {
					res.status(201).json({
						success: true,
						message: " specialite updated successufuly",
						data: item,
					});
				}
				//pour quitter la fonction async
			});
	},
	delete: async (req, res) => {
		await rendezVousmodel.findByIdAndRemove(req.params.id).exec((err, item) => {
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to delete specialite",
					data: null,
					err,
				});
			} else {
				res.status(201).json({
					success: true,
					message: "specialite deleted successufuly",
					data: item,
				});
			}
			//pour quitter la fonction async
		});
	},
};
