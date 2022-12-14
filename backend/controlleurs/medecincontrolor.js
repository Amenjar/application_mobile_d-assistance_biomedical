const MedecinModel = require("../models/medecinmodel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const GMAIL_USER = "alertmedcare2022@gmail.com";
const GMAIL_PSW = "hftydqnhzzltrxdn";
module.exports = {
	register: async (req, res) => {
		const salt = bcrypt.genSalt(10);
		const HashPassword = bcrypt.hashSync(req.body.password, parseInt(salt));
		const medecin = new MedecinModel({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			role: req.body.role,
			specialite: req.body.specialite,
			email: req.body.email,
			phone: req.body.phone,
			adresseCabinet: req.body.adresseCabinet,
			// verify:req.body.verify,
			password: HashPassword,
		});
		let user = await MedecinModel.findOne({ email: medecin.email });
		if (user) {
			return res
				.status(201)
				.json({ message: "Cet utilisateur est deja existe!" });
		}
		medecin.save(req.body, (err, item) => {
			if (err) {
				res
					.status(406)
					.json({ succes: false, message: "Failed register" + err });
			} else {
				res
					.status(201)
					.json({ success: true, message: "success register", data: item });
			}
		});
	},

	getall: async (req, res) => {
		await MedecinModel.find({}).exec((err, items) => {
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to get medecin",
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
		await MedecinModel.find({})
			.count()
			.exec((err, items) => {
				if (err) {
					res.status(406).json({
						success: false,
						message: "Failed to get medecin",
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
		await MedecinModel.findById(req.params.id).exec((err, item) => {
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to get medecin",
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
		await MedecinModel.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		}).exec((err, item) => {
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to update medecin",
					data: null,
					err,
				});
			} else {
				const transporter = nodemailer.createTransport({
					service: "gmail",
					auth: {
						user: GMAIL_USER,
						pass: GMAIL_PSW,
					},
				});
				let info = transporter.sendMail({
					from: GMAIL_USER,
					to: item.email,
					subject: "<MED Care >Alert !! ",
					html: `<div class="es-wrapper-color">				
					
			<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                    <td class="esd-email-paddings" valign="top">
                        <table class="es-content esd-footer-popover" align="center" cellspacing="0" cellpadding="0">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center">
                                        <table class="es-content-body" style="border-left:1px solid transparent;border-right:1px solid transparent;border-top:1px solid transparent;border-bottom:1px solid transparent;" align="center" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p20t es-p40b es-p40r es-p40l" esd-custom-block-id="8537" align="left">
                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="esd-container-frame" align="left" width="518">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="esd-block-image es-p5b es-m-txt-c" align="center" style="font-size: 0px;"><a target="_blank"><img src="https://demo.stripocdn.email/content/guids/4aab1db3-7255-4f7f-85e4-34256f27b6fb/images/logosante.png" alt="icon" style="display: block;" title="icon" width="80"></a></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="esd-block-text es-m-txt-c" align="center">
                                                                                        <h2>F??licitations !</h2>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="esd-block-text es-m-txt-c es-p15t" align="center">
                                                                                        <p>Votre compte personnel sur notre site Web a ??t?? :<b style="color:red" > ${item.verify} </b> </p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
				      </div>`,
				});
				res.status(201).json({
					success: true,
					message: " medecin updated successufuly",
					data: item,
				});
			}
			//pour quitter la fonction async
		});
	},
	delete: async (req, res) => {
		await MedecinModel.findByIdAndRemove(req.params.id).exec((err, item) => {
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
