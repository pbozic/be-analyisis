const UserDao = require("../dao/User");
/**
 * GET /users
 * @tag Users
 * @summary Get a list of users
 * @description Returns a list of users.
 * @operationId getUsers
 * @response 200 - successful operation
 * @responseContent {User[]} 200.application/json
 * @response 400 - Error occurred while obtaining the user list
 * @responseContent {object} 400.application/json The error object
 */
async function listUsers(req, res) {
	try {
		let users = await UserDao.getUsers();
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
}

/**
 * GET /users/me
 * @tag Users
 * @summary Retrieve authenticated user's information
 * @description Retrieve the details of the authenticated user by their ID.
 * @security bearerAuth: []
 * @operationId retrieveUserInformation
 * @response 200 - Successful operation, returns user info.
 * @responseContent {User} 200.application/json
 * @response 400 - Error obtaining user information.
 * @responseContent {object} 400.application/json
 */

async function me(req, res) {
	try {
		let user = await UserDao.getUserById(req.user.user_id);

		if (user) return res.status(200).json(user);

		res.status(400).json({ error: "Error obtaining user information" });
	} catch (e) {
		res.status(400).json({ error: "Error obtaining user information", e });
	}
}

module.exports = {
	listUsers,
	me,
};
