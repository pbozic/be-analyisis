const prisma = require("../prisma/prisma");

async function createScoringPoints(business_id, user_id, delivery_order_id, taxi_order_id, points, isPenalty, reason) {
	try {
		const newScoringPoints = await prisma.scoring_points.create({
			data: {
				businesses: { connect: { business_id: business_id } },
				users: { connect: { user_id: user_id } },
				delivery_orders: delivery_order_id ? { connect: { order_id: delivery_order_id } } : undefined,
				taxi_orders: taxi_order_id ? { connect: { order_id: taxi_order_id } } : undefined,
				points: points,
				isPenalty: isPenalty,
				reason: reason
			}
		});
		console.info("Created scoring points: ", newScoringPoints);
		return newScoringPoints;
	} catch (error) {
		console.error('Error creating scoring points:', error);
		throw error;
	}
}

async function getScoringPointsById(scoring_points_id) {
	try {
		const scoringPoints = await prisma.scoring_points.findUnique({
			where: {
				scoring_points_id: scoring_points_id
			},
			include: {
				users: true,
				businesses: true,
				delivery_orders: true,
				taxi_orders: true,
				late_events: true
			}
		});
		return scoringPoints;
	} catch (error) {
		console.error("Error retrieving scoring points by ID:", error);
		throw error;
	}
}

async function getScoringPointsByUserId(user_id) {
	try {
		const scoringPoints = await prisma.scoring_points.findMany({
			where: {
				user_id: user_id
			},
			orderBy: {
				delivery_order_id: 'asc'
			},
			include: {
				users: true,
				businesses: true,
				delivery_orders: true,
				taxi_orders: true,
				late_events: true
			}
		});
		return scoringPoints;
	} catch (error) {
		console.error("Error retrieving scoring points by user ID:", error);
		throw error;
	}
}

async function getScoringPointsByBusinessId(business_id) {
	try {
		const scoringPoints = await prisma.scoring_points.findMany({
			where: {
				business_id: business_id
			},
			orderBy: {
				delivery_order_id: 'asc'
			},
			include: {
				users: true,
				businesses: true,
				delivery_orders: true,
				taxi_orders: true,
				late_events: true
			}
		});
		return scoringPoints;
	} catch (error) {
		console.error("Error retrieving scoring points by busienss ID:", error);
		throw error;
	}
}

async function updateScoringPoints(scoring_points_id, data) {
	try {
		const updatedScoringPoints = await prisma.scoring_points.update({
			where: {
				scoring_points_id: scoring_points_id
			},
			data: data,
			include: {
				users: true,
				businesses: true,
				delivery_orders: true,
				taxi_orders: true,
				late_events: true
			}
		});
		console.info("Updated scoring points: ", updatedScoringPoints);
		return updatedScoringPoints;
	} catch (error) {
		console.error("Error updating scoring points:", error);
		throw error;
	}
}

async function deleteScoringPoints(scoring_points_id) {
	try {
		await prisma.scoring_points.delete({
			where: {
				scoring_points_id: scoring_points_id
			}
		});
		console.log(`Scoring points with ID ${scoring_points_id} has been deleted.`);
	} catch (error) {
		console.error(`Error deleting scoring points with ID ${scoring_points_id}:`, error);
		throw error;
	}
}

module.exports = {
	createScoringPoints,
	getScoringPointsById,
	getScoringPointsByUserId,
	getScoringPointsByBusinessId,
	updateScoringPoints,
	deleteScoringPoints
}