import haversine from 'haversine-distance';
/**
 * Compute ES-like Gaussian score for location decay.
 * @param {number} userLat - User's latitude.
 * @param {number} userLon - User's longitude.
 * @param {number} targetLat - Target latitude.
 * @param {number} targetLon - Target longitude.
 * @param {number} scaleKm - Scale distance in km.
 * @param {number} decay - Score at `scale` distance (0-1).
 * @returns {number} Normalized score (0-1).
 */
function gaussianDecay(userLat, userLon, targetLat, targetLon, scaleKm = 3, decay = 0.5) {
	const user = { lat: userLat, lon: userLon };
	const target = { lat: targetLat, lon: targetLon };
	const distance = haversine(user, target); // Compute distance in meters
	const scaleMeters = scaleKm * 1000; // Convert to meters
	if (decay <= 0 || decay >= 1) {
		throw new Error('Decay must be between 0 and 1 (exclusive)');
	}
	// Apply ES Gaussian function
	const score = Math.exp(-Math.pow(distance, 2) / (2 * Math.pow(scaleMeters, 2) * Math.log(1 / decay)));
	return score;
}
/**
 * Calculate a normalized purchase intent score based on price relative to a maximum.
 * Applies logarithmic scaling to better distribute values.
 * @param {number} price - Current price.
 * @param {number} maxPrice - Maximum price in the set.
 * @returns {number} Score in the range [0,1].
 */
function scoreWordBuy(price, maxPrice) {
	let minPrice = 0;
	if (minPrice === maxPrice) {
		return 0; // Avoid division by zero
	}
	let scaleFactor = 5;
	const normalizedPrice = (price - minPrice) / (maxPrice - minPrice); // Scale between 0 and 1
	const logScaled = Math.log(1 + normalizedPrice * scaleFactor); // Apply logarithmic scaling
	return logScaled / Math.log(scaleFactor + 1); // Normalize to 0-1 range
}
/**
 * Calculate a normalized promo section score based on tier.
 * @param {string} tier - Tier label (e.g., 'T1', 'T2', 'T3').
 * @returns {number} Score in the range [0,1].
 */
function scorePromoSection(tier) {
	const tierScores = { T1: 1, T2: 0.75, T3: 0.5 }; // Higher tier gets higher score
	return tierScores[tier] || 0; // Default to 0 if tier is invalid
}
export { gaussianDecay };
export { scoreWordBuy };
export { scorePromoSection };
export default {
	gaussianDecay,
	scoreWordBuy,
	scorePromoSection,
};
