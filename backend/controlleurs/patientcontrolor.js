const PatientModel = require("../models/patientmodel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const GMAIL_USER = "alertmedcare2022@gmail.com";
const GMAIL_PSW = "hftydqnhzzltrxdn";
var transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "8de66c5bc9fe54",
		pass: "a8410987fb8040",
	},
});
module.exports = {
	register: async (req, res) => {
		const salt = bcrypt.genSalt(10);
		const HashPassword = bcrypt.hashSync(req.body.password, parseInt(salt));
		const patient = new PatientModel({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			phone: req.body.phone,
			dateNaissance: req.body.dateNaissance,
			role: req.body.role,
			password: HashPassword,
		});
		let user = await PatientModel.findOne({ email: patient.email });
		if (user) {
			return res
				.status(201)
				.json({ message: "Cet utilisateur est deja existe!" },user);
		}
		patient.save(req.body, (err, item) => {
			if (err) {
				res
					.status(406)
					.json({ succes: false, message: "Failed register" + err });
			} else {
				transport.sendMail({
					from: "myapp@gmail.com",
					to: item.email,
					cc: "@gmail.com",
					bcc: "@gmail.com",
					subject: "Welcome" + item.firstname,
					text: "bonjour mr",
					html: `<!DOCTYPE html>
                        <html>
                            <head>
                                <meta charset="utf-8">
                                    <meta http-equiv="x-ua-compatible"content="ie=edge">
                                        <title>Welcome Email</title> 
                                        </head>
                                        <body>
                                        <h2>Hello ${
																					item.firstname + " " + item.lastname
																				}! </h2>
                                       <p>We're glad to have you on board at ${
																					item.email
																				}. </p>
                                      <p>We're glad to have you on board at it gate</p>
                                        </body>
                        </html>`,
				});
				res
					.status(201)
					.json({ success: true, message: "success register", data: item });
			}
		});
	},
	getall: async (req, res) => {
		await PatientModel.find({}).exec((err, items) => {
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to get patient",
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
		});
	},
	getNb: async (req, res) => {
		await PatientModel.find({})
			.count()
			.exec((err, items) => {
				if (err) {
					res.status(406).json({
						success: false,
						message: "Failed to get patient",
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
			});
	},
	getbyid: async (req, res) => {
		await PatientModel.findById(req.params.id).exec((err, item) => {
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to get patient",
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
		await PatientModel.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		}).exec((err, item) => {
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to update patient",
					data: null,
					err,
				});
			} else {
				res.status(201).json({
					success: true,
					message: " patient updated successufuly",
					data: item,
				});
			}
			//pour quitter la fonction async
		});
	},
	delete: async (req, res) => {
		await PatientModel.findByIdAndRemove(req.params.id).exec((err, item) => {
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to delete patient",
					data: null,
					err,
				});
			} else {
				res.status(201).json({
					success: true,
					message: "patient deleted successufuly",
					data: item,
				});
			}
			//pour quitter la fonction async
		});
	},
};
