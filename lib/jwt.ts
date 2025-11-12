import process from 'node:process';

import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

config();

/**
 * Generate a short-lived JWT access token.
 *
 * @param {object} user - User payload to embed.
 * @returns {string} Signed JWT token (expires in ~8h).
 */
function generateAccessToken(user: { user_id: string }): string {
	return jwt.sign({ user }, process.env.JWT_TOKEN_SECRET as string, { expiresIn: '8h' });
}
/**
 * Generate a long-lived JWT refresh token.
 *
 * @param {object} user - User payload to embed.
 * @returns {string} Signed JWT token (expires in ~365d).
 */
function generateRefreshToken(user: { user_id: string }): string {
	return jwt.sign({ user }, process.env.JWT_TOKEN_SECRET as string, { expiresIn: '365d' });
}

export { generateAccessToken };
export { generateRefreshToken };
export default {
	generateAccessToken,
	generateRefreshToken,
};
