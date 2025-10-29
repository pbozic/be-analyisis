import prisma from '../prisma/prisma.js';
/**
 * Create scoring points entry linked to business and optionally user and orders.
 *
 * @param {string} business_id - Business ID.
 * @param {string|null} user_id - User ID (optional).
 * @param {string|null} delivery_order_id - Delivery order ID (optional).
 * @param {string|null} taxi_order_id - Taxi order ID (optional).
 * @param {number} points - Number of points (positive/negative if isPenalty).
 * @param {boolean} isPenalty - Whether points are a penalty.
 * @param {string} reason - Reason text.
 * @returns {Promise<object>} Created scoring_points row.
 */
async function createScoringPoints(business_id, user_id, delivery_order_id, taxi_order_id, points, isPenalty, reason) {
	try {
		const newScoringPoints = await prisma.scoring_points.create({
			data: {
				businesses: { connect: { business_id: business_id } },
				users: user_id ? { connect: { user_id: user_id } } : undefined,
				delivery_orders: delivery_order_id ? { connect: { order_id: delivery_order_id } } : undefined,
				taxi_orders: taxi_order_id ? { connect: { order_id: taxi_order_id } } : undefined,
				points: points,
				isPenalty: isPenalty,
				reason: reason,
			},
		});
		console.info('Created scoring points: ', newScoringPoints);
		return newScoringPoints;
	} catch (error) {
		console.error('Error creating scoring points:', error);
		throw error;
	}
}
/**
 * Get scoring points by id with related entities.
 *
 * @param {string} scoring_points_id - Scoring points ID.
 * @returns {Promise<object|null>} Row or null.
 */
async function getScoringPointsById(scoring_points_id) {
	try {
		const scoringPoints = await prisma.scoring_points.findUnique({
			where: {
				scoring_points_id: scoring_points_id,
			},
			include: {
				users: true,
				businesses: true,
				delivery_orders: true,
				taxi_orders: true,
				late_events: true,
			},
		});
		return scoringPoints;
	} catch (error) {
		console.error('Error retrieving scoring points by ID:', error);
		throw error;
	}
}
/**
 * Get scoring points for a user ordered by delivery_order_id.
 *
 * @param {string} user_id - User ID.
 * @returns {Promise<object[]>} Rows with related entities.
 */
async function getScoringPointsByUserId(user_id) {
	try {
		const scoringPoints = await prisma.scoring_points.findMany({
			where: {
				user_id: user_id,
			},
			orderBy: {
				delivery_order_id: 'asc',
			},
			include: {
				users: true,
				businesses: true,
				delivery_orders: true,
				taxi_orders: true,
				late_events: true,
			},
		});
		return scoringPoints;
	} catch (error) {
		console.error('Error retrieving scoring points by user ID:', error);
		throw error;
	}
}
/**
 * Get scoring points for a business ordered by delivery_order_id.
 *
 * @param {string} business_id - Business ID.
 * @returns {Promise<object[]>} Rows with related entities.
 */
async function getScoringPointsByBusinessId(business_id) {
	try {
		const scoringPoints = await prisma.scoring_points.findMany({
			where: {
				business_id: business_id,
			},
			orderBy: {
				delivery_order_id: 'asc',
			},
			include: {
				users: true,
				businesses: true,
				delivery_orders: true,
				taxi_orders: true,
				late_events: true,
			},
		});
		return scoringPoints;
	} catch (error) {
		console.error('Error retrieving scoring points by busienss ID:', error);
		throw error;
	}
}
/**
 * Update a scoring points row and return with related entities.
 *
 * @param {string} scoring_points_id - Scoring points ID.
 * @param {object} data - Fields to update.
 * @returns {Promise<object>} Updated row.
 */
async function updateScoringPoints(scoring_points_id, data) {
	try {
		const updatedScoringPoints = await prisma.scoring_points.update({
			where: {
				scoring_points_id: scoring_points_id,
			},
			data: data,
			include: {
				users: true,
				businesses: true,
				delivery_orders: true,
				taxi_orders: true,
				late_events: true,
			},
		});
		console.info('Updated scoring points: ', updatedScoringPoints);
		return updatedScoringPoints;
	} catch (error) {
		console.error('Error updating scoring points:', error);
		throw error;
	}
}
/**
 * Delete a scoring points row by id.
 *
 * @param {string} scoring_points_id - Scoring points ID.
 * @returns {Promise<void>} Resolves when deleted.
 */
async function deleteScoringPoints(scoring_points_id) {
	try {
		await prisma.scoring_points.delete({
			where: {
				scoring_points_id: scoring_points_id,
			},
		});
		console.log(`Scoring points with ID ${scoring_points_id} has been deleted.`);
	} catch (error) {
		console.error(`Error deleting scoring points with ID ${scoring_points_id}:`, error);
		throw error;
	}
}
export { createScoringPoints };
export { getScoringPointsById };
export { getScoringPointsByUserId };
export { getScoringPointsByBusinessId };
export { updateScoringPoints };
export { deleteScoringPoints };
export default {
	createScoringPoints,
	getScoringPointsById,
	getScoringPointsByUserId,
	getScoringPointsByBusinessId,
	updateScoringPoints,
	deleteScoringPoints,
};
