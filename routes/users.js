require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");

const {
	getResetRequest,
	createNewResetRequest,
	updateUserPassword,
	updateUser,
	getUser,
	getUserByEmail,
	getUserById,
	updateUserTelephone,
	getUsers,
	createNewUser,
} = require("../DatabaseHandler/dbConnections");
const { generateAccessToken, generateRefreshToken } = require("../lib/jwt");
const { sendEmail } = require("../lib/emailSender");
const { jsonParse, validateUserInput } = require("../lib/helpersLib");

const router = express.Router();
const BCRYPT_SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 12;

/* GET all users*/
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get a list of users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Successful operation, returns a list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       400:
 *         description: Error occurred while obtaining the list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *                 e:
 *                   type: object
 *                   description: Detailed error message.
 */
router.get("/", async function (req, res, next) {
	try {
		let users = await getUsers();
		if (users) {
			res.status(200).json(users);
		} else {
			res.status(400).json({
				error: "Error obtaining list of users..",
				users,
			});
		}
	} catch (e) {
		res.status(400).json({ error: "Error obtaining list of users..", e });
	}
});
/**
 * @swagger
 * /users/me:
 *   get:
 *     summary: Retrieve the authenticated user's information.
 *     description: Retrieve the details of the authenticated user by their ID.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The user was successfully retrieved.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Error obtaining user information.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: The error message.
 */
router.get("/me", async function (req, res, next) {
	console.log("us", req.user);
	try {
		let user = await getUserById(req.user.user_id);
		if (user) {
			return res.status(200).json(user);
		} else {
			res.status(400).json({
				error: "Error obtaining user information",
				users,
			});
		}
	} catch (e) {
		res.status(400).json({ error: "Error obtaining user information", e });
	}
});

/* CREATE new user. */
router.post("/create", async function (req, res, next) {
	let postData = JSON.parse(req.headers["postdata"]);
	let user = postData["user"];

	let external_id = user["external_id"];
	let fullName = user["full_name"];
	let email = user["username"];
	let telephone = user["telephone"];
	let userRole = user["type"];

	let isInputValid = validateUserInput([email, userRole]);
	if (!isInputValid) {
		return res.status(400).json({ error: "Error, missing input data.." });
	}
	try {
		let userExistsRes = await getUserByEmail(email);
		let userExists = userExistsRes["rows"][0];

		let userExistCaretakerRes = await getCaretaker(userExists?.user_id);
		let userExistCaretaker = userExistCaretakerRes["rows"][0];

		console.log(email, userExistsRes, userExists);
		if (userExists) {
			return res.status(500).json({
				error:
					"Error, creating new user failed.. " +
					"user already exists!",
				user: userExists,
				caretaker: userExistCaretaker,
			});
		} else {
			let randomisePass = Math.random().toString(36).substr(2, 8);
			let hash = await bcrypt.hash(randomisePass, BCRYPT_SALT_ROUNDS);
			//console.log("PASSWORD HASHED", hash);
			let response = await createNewUser(
				fullName,
				email,
				hash,
				telephone,
				userRole,
				external_id,
			);

			let dbResponse = response["rows"][0];
			console.log(dbResponse);
			let subject =
				userRole === "SHAREPOINT"
					? "Portal on trade potniki (Dobrodošel nov uporabnik!)"
					: "Dobrodošel nov uporabnik!";

			if (dbResponse) {
				sendEmail(
					subject,
					`Pozdravljeni, ${user.username}\nVaše geslo za vpis v portal PLU: ${randomisePass}\nDo portala lahko dostopate na tej povezavi: https://klikni.si/ \nLepo pozdravljeni`,
					email,
				);
				res.status(200).json(dbResponse);
			} else {
				res.status(500).json({
					error: "Error, creating new user failed.. " + response,
				});
			}
		}
	} catch (e) {
		console.log(e);
		res.status(500).json({
			error: "Error, creating new user failed.. \n" + e,
		});
	}
});

/* CREATE new caretaker. */
router.post("/create/caretaker", async function (req, res, next) {
	let postData = JSON.parse(req.headers["postdata"]);
	let caretaker = postData["caretaker"];

	console.log(caretaker);

	let fullName = caretaker["full_name"];
	let user_id = caretaker["user_id"];
	let parent_id = caretaker["parent_id"];

	let isInputValid = validateUserInput([user_id]);
	if (!isInputValid) {
		res.status(400).json({ error: "Error, missing input data.." });
	} else {
		try {
			let response = await createNewCaretaker(
				fullName,
				parent_id,
				user_id,
			);

			let userResponse = response["rows"][0];
			console.log(userResponse);
			if (userResponse) {
				res.status(200).json(userResponse);
			} else {
				res.status(500).json({
					error: "Error, creating new caretaker failed.. " + response,
				});
			}
		} catch (e) {
			res.status(500).json({
				error: "Error, creating new caretaker failed.. " + e,
			});
		}
	}
});

/* GET all caretakers*/
router.post("/caretakers", async function (req, res, next) {
	let postData = JSON.parse(req.headers["postdata"]);
	let user_id = postData["user_id"];

	let isInputValid = validateUserInput([user_id]);
	if (!isInputValid) {
		res.status(400).json({ error: "Error, missing input data.." });
	} else {
		try {
			let response = await getCaretakers(user_id);
			let users = response["rows"];

			if (users) {
				console.log("RESPONSE:", users);
				res.status(200).json(users);
			} else {
				res.status(400).json({
					error: "Error obtaining caretaker data..",
					response,
				});
			}
		} catch (e) {
			res.status(400).json({
				error: "Error obtaining caretaker data..",
				e,
			});
		}
	}
});

/* GET caretaker by caretaker_id*/
router.post("/caretaker", async function (req, res, next) {
	let postData = JSON.parse(req.headers["postdata"]);
	let caretaker_id = postData["caretaker_id"];

	let isInputValid = validateUserInput([caretaker_id]);
	if (!isInputValid) {
		res.status(400).json({ error: "Error, missing input data.." });
	} else {
		try {
			let response = await getCaretakerById(caretaker_id);
			let caretaker = response["rows"][0];

			if (caretaker) {
				console.log("RESPONSE CARETAKER:", caretaker);
				res.status(200).json(caretaker);
			} else {
				res.status(400).json({
					error: "Error obtaining caretaker data..",
					response,
				});
			}
		} catch (e) {
			res.status(400).json({
				error: "Error obtaining caretaker data..",
				e,
			});
		}
	}
});

/* GET caretaker by user_id*/
router.post("/caretaker/user_id", async function (req, res, next) {
	let postData = JSON.parse(req.headers["postdata"]);
	let user_id = postData["user_id"];

	let isInputValid = validateUserInput([user_id]);
	if (!isInputValid) {
		res.status(400).json({ error: "Error, missing input data.." });
	} else {
		try {
			let response = await getCaretaker(user_id);
			let users = response["rows"][0];

			if (users) {
				console.log("RESPONSE:", users);
				res.status(200).json(users);
			} else {
				res.status(400).json({
					error: "Error obtaining caretaker data..",
					response,
				});
			}
		} catch (e) {
			res.status(400).json({
				error: "Error obtaining caretaker data..",
				e,
			});
		}
	}
});

/* GET user by id*/
router.post("/user", async function (req, res, next) {
	let postData = JSON.parse(req.headers["postdata"]);
	let user_id = postData["user_id"];

	let isInputValid = validateUserInput([user_id]);
	if (!isInputValid) {
		res.status(400).json({ error: "Error, missing input data.." });
	} else {
		try {
			let response = await getUserById(user_id);
			let users = response["rows"][0];

			if (users) {
				console.log("RESPONSE:", users);
				res.status(200).json(users);
			} else {
				res.status(400).json({
					error: "Error obtaining caretaker data..",
					response,
				});
			}
		} catch (e) {
			res.status(400).json({
				error: "Error obtaining caretaker data..",
				e,
			});
		}
	}
});

/* UPDATE user telephone*/
router.post("/user/update/telephone", async function (req, res, next) {
	let postData = JSON.parse(req.headers["postdata"]);
	let user = postData["user"];
	let user_id = user["user_id"];
	let telephone = user["telephone"];

	let isInputValid = validateUserInput([user_id]);
	if (!isInputValid) {
		res.status(400).json({ error: "Error, missing input data.." });
	} else {
		try {
			let response = await updateUserTelephone(user_id, telephone);
			let users = response["rows"][0];

			if (users) {
				console.log("RESPONSE:", users);
				res.status(200).json(users);
			} else {
				res.status(400).json({
					error: "Error updating user data..",
					response,
				});
			}
		} catch (e) {
			res.status(400).json({ error: "Error updating user data..", e });
		}
	}
});

/* UPDATE user*/
router.post("/user/update", async function (req, res, next) {
	let postData = JSON.parse(req.headers["postdata"]); //read user_id from req.user_id, while user object is from req.body.user

	let user = postData["user"];
	let user_id = user["user_id"];
	let full_name = user["full_name"];
	let username = user["username"];
	let telephone = user["telephone"];

	let isInputValid = validateUserInput([user_id]);
	if (!isInputValid) {
		res.status(400).json({ error: "Error, missing input data.." });
	} else {
		try {
			let response = await updateUser(
				user_id,
				full_name,
				username,
				telephone,
			);
			let user = response["rows"][0];

			if (user) {
				console.log("RESPONSE:", user);
				res.status(200).json(user);
			} else {
				res.status(400).json({
					error: "Error updating user data..",
					response,
				});
			}
		} catch (e) {
			res.status(400).json({ error: "Error updating user data..", e });
		}
	}
});

/* UPDATE reset user password & send  user reset link*/
router.post("/user/reset/password", async function (req, res, next) {
	let postData = JSON.parse(req.headers["postdata"]);
	let user = postData["user"];
	let user_id = user["user_id"];
	let username = user["username"];

	let isInputValid = validateUserInput([user_id]);
	if (!isInputValid) {
		res.status(400).json({ error: "Error, missing input data.." });
	} else {
		try {
			let token = await prisma.reset_requests.findUnique({
				user_id: user.id,
			});
			if (token) {
				await prisma.reset_requests.delete({
					where: { user_id: user.id },
				});
			}
			let resetToken = crypto.randomBytes(32).toString("hex");
			const token_hash = await bcrypt.hash(
				resetToken,
				Number(bcryptSalt),
			);

			let passResetRes = await createNewResetRequest(user_id, token_hash);

			if (user) {
				let resetLink = `https://klikni.si/reset/${passResetRes.token}`;
				sendEmail(
					"Pozdravljeni, geslo uspešno ponastavljeno",
					`Pozdravljeni, ${username}\nVaše novo geslo za vpis v Klikni portal lahko ponastavite na povezavi: ${resetLink}\n\n \nLepo pozdravljeni`,
					username,
				);

				res.status(200).json(resetPasswordRequest);
			} else {
				res.status(400).json({
					error: "Error creating user password request..",
					resetPasswordRequest,
				});
			}
		} catch (e) {
			res.status(400).json({
				error: "Error requesting user password reset..",
				e,
			});
		}
	}
});

/* UPDATE reset user password */
router.post("/user/update/password", async function (req, res, next) {
	let postData = jsonParse(req.body.data);

	let token = postData.token;
	let password = postData["password"];

	let isInputValid = validateUserInput([password, token]);
	if (!isInputValid) {
		res.status(400).json({ error: "Error, missing input data.." });
	} else {
		try {
			console.log(password, token);

			let resetPasswordRequest = await getResetRequest(token);

			let user_id = resetPasswordRequest?.user_id;

			console.log(resetPasswordRequest);

			let randomisePass = password;
			bcrypt.hash(randomisePass, 3).then(async (hash) => {
				let response = await updateUserPassword(user_id, hash);
				let user = response["rows"][0];

				if (user) {
					console.log("RESPONSE:", user);

					let loginPageText =
						"Do portala cenikov lahko dostopate na tej povezavi: https://klikni.si/\n\n";

					sendEmail(
						"Pozdravljeni, geslo uspešno ponastavljeno",
						`Pozdravljeni, ${user.username}\n\n ${loginPageText} \nLepo pozdravljeni`,
						user.username,
					);

					let userParsed =
						jsonParse(
							user,
						); /*JSON.parse(JSON.stringify(userResponse));*/
					delete userParsed["password"];
					res.status(200).json(userParsed);
				} else {
					res.status(400).json({
						error: "Error updating user password..",
						response,
					});
				}
			});
		} catch (e) {
			res.status(400).json({
				error: "Error updating user password..",
				e,
			});
		}
	}
});

module.exports = router;
