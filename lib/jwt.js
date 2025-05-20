require('dotenv').config();
const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
	return jwt.sign({ user }, process.env.JWT_TOKEN_SECRET, { expiresIn: '8h' });
}
function generateRefreshToken(user) {
	return jwt.sign({ user }, process.env.JWT_TOKEN_SECRET, { expiresIn: '365d' });
}

module.exports = {
	generateAccessToken,
	generateRefreshToken,
};
