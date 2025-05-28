import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
config();
function generateAccessToken(user) {
	return jwt.sign({ user }, process.env.JWT_TOKEN_SECRET, { expiresIn: '8h' });
}
function generateRefreshToken(user) {
	return jwt.sign({ user }, process.env.JWT_TOKEN_SECRET, { expiresIn: '365d' });
}
export { generateAccessToken };
export { generateRefreshToken };
export default {
	generateAccessToken,
	generateRefreshToken,
};
