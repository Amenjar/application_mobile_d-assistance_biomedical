const SecretaireModel = require("../models/secretairemodel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const GMAIL_USER = "alertmedcare2022@gmail.com";
const GMAIL_PSW = "hftydqnhzzltrxdn";
module.exports = {
	// register: async (req, res) => {
	// 	console.log(req.body);
	// 	const salt = bcrypt.genSalt(10);
	// 	const HashPassword = bcrypt.hashSync(req.body.password, parseInt(salt));
	// 	const secretaire = new SecretaireModel({
	// 		firstname: req.body.firstname,
	// 		lastname: req.body.lastname,
	// 		phone: req.body.phone,
	// 		email: req.body.email,
	// 		role: req.body.role,
	// 		emailMedecien: req.body.emailMedecien,
	// 		password: HashPassword,
	// 	});
	// 	secretaire.save(req.body, (err, item) => {
	// 		if (err) {
	// 			res
	// 				.status(406)
	// 				.json({ succes: false, message: "Failed register" + err });
	// 		} else {
	// 			const transporter = nodemailer.createTransport({
	// 				service: "gmail",
	// 				auth: {
	// 					user: GMAIL_USER,
	// 					pass: GMAIL_PSW,
	// 				},
	// 			});
	// 			let info = transporter.sendMail({
	// 				from: GMAIL_USER,
	// 				to: req.body.email,
	// 				subject: "<MED Care > Welcome  " + item.firstname,
	// 				html: `<div class="es-wrapper-color">				
	// 				<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
	// 					<tbody>
	// 						<tr>
	// 						    <table cellpadding="0" cellspacing="0" class="esd-footer-popover es-footer" align="center">
	// 							<td class="esd-stripe" align="center" esd-custom-block-id="648189">
	// 							<table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600">
	// 								<tbody>
	// 									<tr>
	// 										<td class="esd-structure es-p40t es-p40b es-p20r es-p20l es-m-p0" align="left">
	// 											<table cellpadding="0" cellspacing="0" width="100%">
	// 												<tbody>
	// 													<tr>
	// 														<td width="560" align="left" class="esd-container-frame">
	// 															<table cellpadding="0" cellspacing="0" width="100%">
	// 																<tbody>
	// 																	<tr>
	// 																		<td align="center" class="esd-block-text es-p5t es-p5b es-p40l">
	// 																			<h2 style="font-size: 32px;">Bienvennue&nbsp;</h2>
	// 																		</td>
	// 																	</tr>
	// 																	<tr>
	// 																		<td align="center" class="esd-block-text es-p40t es-p40b es-p40l">
	// 																			<p style="font-size: 16px;"><strong>Merci pour votre inscription !!!!</strong></p>
	// 																		</td>
	// 																	</tr>
	// 																	<tr>
	// 																		<td align="center" class="esd-block-image es-p40l" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img src="https://demo.stripocdn.email/content/guids/videoImgGuid/images/logosante_TuM.png" alt="Logo" style="display: block;" title="Logo" class="adapt-img" width="220"></a></td>
	// 																	</tr>
	// 																</tbody>
	// 															</table>
	// 														</td>
	// 													</tr>
	// 												</tbody>
	// 											</table>
	// 										</td>
	// 									</tr>
	// 								</tbody>
	// 							</table>
	// 						</td>	
	// 						    </table>
							
	// 						</tr>
	// 					</tbody>
	// 				</table>
	// 			</div>`,
	// 			});
	// 			res.status(201).json({
	// 				success: true,
	// 				message: "Votre compte a été créé",
	// 				data: item,
	// 			});
	// 		}
	// 	});
	// },
	register: async (req, res) => {
		console.log(req.body);
		const salt = bcrypt.genSalt(10);
		const HashPassword = bcrypt.hashSync(req.body.password, parseInt(salt));
		const secretaire = new SecretaireModel({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			phone: req.body.phone,
			email: req.body.email,
			role: req.body.role,
			emailMedecien: req.body.emailMedecien,
			password: HashPassword,
		});

		let user = await SecretaireModel.findOne({ email: secretaire.email });
		if (user) {
			return res
				.status(201)
				.json({ message: "Cet utilisateur est deja existe!" });
		}

		secretaire.save(req.body, (err, item) => {
			if (err) {
				res
					.status(406)
					.json({ succes: false, message: "Failed register" + err });
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
					to: req.body.email,
					subject: "<MED Care > Welcome  " + item.firstname,
					html: `<div class="es-wrapper-color">				
					<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
						<tbody>
							<tr>
							    <table cellpadding="0" cellspacing="0" class="esd-footer-popover es-footer" align="center">
								<td class="esd-stripe" align="center" esd-custom-block-id="648189">
								<table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600">
									<tbody>
										<tr>
											<td class="esd-structure es-p40t es-p40b es-p20r es-p20l es-m-p0" align="left">
												<table cellpadding="0" cellspacing="0" width="100%">
													<tbody>
														<tr>
															<td width="560" align="left" class="esd-container-frame">
																<table cellpadding="0" cellspacing="0" width="100%">
																	<tbody>
																		<tr>
																			<td align="center" class="esd-block-text es-p5t es-p5b es-p40l">
																				<h2 style="font-size: 32px;">Bienvennue&nbsp;</h2>
																			</td>
																		</tr>
																		<tr>
																			<td align="center" class="esd-block-text es-p40t es-p40b es-p40l">
																				<p style="font-size: 16px;"><strong>Merci pour votre inscription !!!!</strong></p>
																			</td>
																		</tr>
																		<tr>
																			<td align="center" class="esd-block-image es-p40l" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img src="https://demo.stripocdn.email/content/guids/videoImgGuid/images/logosante_TuM.png" alt="Logo" style="display: block;" title="Logo" class="adapt-img" width="220"></a></td>
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
							    </table>
							
							</tr>
						</tbody>
					</table>
				</div>`,
				});
				res.status(201).json({
					success: true,
					message: "Votre compte a été créé",
					data: item,
				});
			}
		});
	},
	getall: async (req, res) => {
		await SecretaireModel.find({}).exec((err, items) => {
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to get secretaire",
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
		await SecretaireModel.find({})
			.count()
			.exec((err, items) => {
				if (err) {
					res.status(406).json({
						success: false,
						message: "Failed to get secretaire",
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
		await SecretaireModel.findById(req.params.id).exec((err, item) => {
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to get secretaire",
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
		await SecretaireModel.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		}).exec((err, item) => {
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to update secretaire",
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
                                                                                        <h2>Félicitations !</h2>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="esd-block-text es-m-txt-c es-p15t" align="center">
                                                                                        <p>Votre compte personnel sur notre site Web a été :<b style="color:red" > ${item.verify} </b> </p>
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
					message: " secretaire updated successufuly",
					data: item,
				});
			}
			//pour quitter la fonction async
		});
	},
	delete: async (req, res) => {
		await SecretaireModel.findByIdAndRemove(req.params.id).exec((err, item) => {
			if (err) {
				res.status(406).json({
					success: false,
					message: "Failed to delete secretaire",
					data: null,
					err,
				});
			} else {
				res.status(201).json({
					success: true,
					message: "secretaire deleted successufuly",
					data: item,
				});
			}
			//pour quitter la fonction async
		});
	},
};
