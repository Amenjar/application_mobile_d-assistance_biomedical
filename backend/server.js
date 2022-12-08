const express = require("express"); // creation de serveur
const database = require("./config/database");
const dotenv = require("dotenv"); //l'appel de base de donnée

/****   */
const bcrypt = require("bcrypt");
const userModel = require("./models/usermodel");
const nodemailer = require("nodemailer");
const GMAIL_USER = "alertmedcare2022@gmail.com";
const GMAIL_PSW = "hftydqnhzzltrxdn";
/****   */
//const port =4000
const cors = require("cors");
var corsOptions = {
	// liaison ben front et back
	origin: "http://localhost:3000",
	optionsSuccessStatus: 200,
};
const app = express();
const PORT = process.env.PORT;
app.use(cors("corsOptions"));
app.use(express.json());
const PatientRouter = require("./routes/patientroute");
app.use("/patients", PatientRouter);

const SecretaireRouter = require("./routes/secretaireroute");
app.use("/secretaires", SecretaireRouter);

const MedecinRouter = require("./routes/medecinroute");
app.use("/medecins", MedecinRouter);

const adminRouter = require("./routes/adminroute");
app.use("/admin", adminRouter);

const responAnalyseRouter = require("./routes/respon-analyseroute");
app.use("/responsables", responAnalyseRouter);

const authentRouter = require("./routes/authentification");
app.use("/auth", authentRouter);

const responImagerieRouter = require("./routes/respon-imagerieroute");
app.use("/responsablesimg", responImagerieRouter);

const rendezVousRouter = require("./routes/rendez-vousroute");
app.use("/rendez-vous", rendezVousRouter);

const ficheRouter = require("./routes/ficheroute");
app.use("/fiches", ficheRouter);

const ordonanceRouter = require("./routes/ordonanceroute");
app.use("/ordonnances", ordonanceRouter);

const certificatRouter = require("./routes/certificattroute");
app.use("/certificats", certificatRouter);

const resultatAnRouter = require("./routes/resultatanroute");
app.use("/resultatAnalys", resultatAnRouter);

const resultatRadiologieRouter = require("./routes/resultatradiologieroute");
app.use("/resultatRadiologie", resultatRadiologieRouter);

app.use(
	"/user",
	express.Router().post("/forgetPssword", async (req, res) => {
		try {
			const user = await userModel.findOne({ email: req.body.email });
			if (!user) {
				return res
					.status(200)
					.json({ message: "Cet utilisateur n'existe pas !" });
			}
			const psw = Math.random().toString(36).slice(-8); // gvenerate Random password
			const salt = await bcrypt.genSalt(10);
			const hash = await bcrypt.hash(psw, salt); //hashed password
			user.password = hash;

			/**Send Email */
			const transporter = nodemailer.createTransport({
				service: "gmail",
				auth: {
					user: GMAIL_USER,
					pass: GMAIL_PSW,
				},
			});
			let info = await transporter.sendMail({
				from: GMAIL_USER,
				to: req.body.email,
				subject: "Rénitialiser votre mot de passe",
				html: `
						<p>
						<h5>Bonjour  ${user.nom}  ${user.prenom}  </h5> <br/>
						votre mot de passe a été modifié avec succeés , <br/>
				         	Nouvelle mot de passe est : <b>${psw}<b>
					    </p>

						`,
			});
			
			console.log(psw);
			//save and send res
			user.save().then(() => {
				return res.status(200).send({
					message:
						"  Un email vous a été envoyé avec votre nouveau mot de passe ",
				});
			});
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	})
);

// const resultatanalyseRouter = require ("./routes/resultatanroute")
// app.use("/resultatAnaly",resultatanalyseRouter)

app.listen(PORT, function () {
	console.log(
		"The server is running," + `please open at http://localhost:${PORT}`
	);
});
