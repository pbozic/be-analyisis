import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
config();
/**
 * Generate a short-lived JWT access token.
 *
 * @param {object} user - User payload to embed.
 * @returns {string} Signed JWT token (expires in ~8h).
 */
function generateAccessToken(user) {
	return jwt.sign({ user }, process.env.JWT_TOKEN_SECRET, { expiresIn: '8h' });
}
/**
 * Generate a long-lived JWT refresh token.
 *
 * @param {object} user - User payload to embed.
 * @returns {string} Signed JWT token (expires in ~365d).
 */
function generateRefreshToken(user) {
	return jwt.sign({ user }, process.env.JWT_TOKEN_SECRET, { expiresIn: '365d' });
}
export { generateAccessToken };
export { generateRefreshToken };
export default {
	generateAccessToken,
	generateRefreshToken,
};
