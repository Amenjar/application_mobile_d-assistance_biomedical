const UserModel = require("../models/usermodel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const RT_SECRET = process.env.RT_SECRET;
let RefreshTokens = [];
// generate Accesstoken
const generateAccessToken = (user) => {
	return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, JWT_SECRET, {
		expiresIn: "30m",
	});
};
//generate RefreshToken
const generateRefreshToken = (user) => {
	return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, RT_SECRET, {
		expiresIn: "1h",
	});
};
module.exports = {
	login: async (req, res) => {
		console.log(req.body);
		const user = await UserModel.findOne({ email: req.body.email });
		if (!user) {
			res
				.status(400)
				.json({ success: false, message: "email not founded", data: null });
			console.log(user);
		} else {
			const validPassword = await bcrypt.compare(
				req.body.password,
				user.password
			);
			if (!validPassword) {
				res
					.status(406)
					.json({ success: false, message: "password incorrect", data: null });
			} else {
				const AccessToken = generateAccessToken(user);
				const RefreshToken = generateRefreshToken(user);
				RefreshTokens.push(RefreshToken);
				res.status(201).json({
					success: true,
					message: "successs",
					data: user,
					token: AccessToken,
					RT: RefreshToken,
				});
			}
		}
	},
	verifyRefreshToken: (req, res) => {
		const RefreshToken = req.body.token;
		if (!RefreshTokens.includes(RefreshToken))
			return res.status(403).json("RefreshToken is not valid");
		jwt.verify(RefreshToken, RT_SECRET, (err, user) => {
			/*    err && console.log(err); */
			RefreshTokens = RefreshTokens.filter((token) => token !== RefreshToken);
			const newAcessToken = generateAccessToken(user);
			const newRefreshToken = generateRefreshToken(user);
			RefreshTokens.push(newRefreshToken);
			res
				.status(200)
				.json({ token: newAcessToken, refreshtoken: newRefreshToken });
		});
	},
	logout: (req, res) => {
		const RefreshToken = req.body.token;
		RefreshTokens = RefreshTokens.filter((token) => token !== RefreshToken);
		res.status(201).json(" you are logged out");
	},
	forget: (req, res) => {},
};
