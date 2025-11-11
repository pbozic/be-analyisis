import prisma from '../prisma/prisma.js';
import { CreateScoringPoints, ScoringPointsDetail } from '../schemas/dto/ScoringPoints/scoring-points.dto.ts';
import scoringPointsDefaultInclude, { ScoringPointsWithIncludesPrisma } from '../prisma/includes/scoringPoints.js';
import { toScoringPointsDetail, toScoringPointsList } from '../schemas/dto/ScoringPoints/scoring-points.mappers.js';

/**
 * Create scoring points entry linked to user, business and/or orders.
 *
 * @param {CreateScoringPoints} data - Create payload.
 * @returns {Promise<ScoringPointsDetail>} Created scoring points row.
 */
export async function createScoringPoints(data: CreateScoringPoints): Promise<ScoringPointsDetail> {
	const row = await prisma.scoring_points.create({
		data: {
			points: data.points,
			isPenalty: data.isPenalty,
			reason: data.reason ?? undefined,
			user: data.user_id ? { connect: { user_id: data.user_id } } : undefined,
			stores_module: data.stores_id ? { connect: { stores_id: data.stores_id } } : undefined,
			food_drinks_module: data.food_drinks_id ? { connect: { food_drinks_id: data.food_drinks_id } } : undefined,
			delivery_order: data.delivery_order_id ? { connect: { order_id: data.delivery_order_id } } : undefined,
			taxi_order: data.taxi_order_id ? { connect: { order_id: data.taxi_order_id } } : undefined,
		},
		include: scoringPointsDefaultInclude,
	});
	return toScoringPointsDetail(row as ScoringPointsWithIncludesPrisma);
}

/**
 * Get scoring points by id with related entities.
 *
 * @param {string} scoring_points_id - Scoring points ID.
 * @returns {Promise<ScoringPointsDetail|null>} Row or null.
 */
export async function getScoringPointsById(scoring_points_id: string): Promise<ScoringPointsDetail | null> {
	const row = await prisma.scoring_points.findUnique({
		where: { scoring_points_id },
		include: scoringPointsDefaultInclude,
	});
	return row ? toScoringPointsDetail(row as ScoringPointsWithIncludesPrisma) : null;
}

/**
 * Get scoring points linked to a driver via taxi or delivery orders.
 *
 * @param {string} driver_id - Driver ID.
 * @returns {Promise<ScoringPointsDetail[]>} Points rows.
 */
export async function getScoringPointsByDriverId(driver_id: string): Promise<ScoringPointsDetail[]> {
	const rows = await prisma.scoring_points.findMany({ where: { driver_id }, include: scoringPointsDefaultInclude });
	return toScoringPointsList(rows as ScoringPointsWithIncludesPrisma[]);
}

/**
 * Get scoring points for a user ordered by newest.
 *
 * @param {string} user_id - User ID.
 * @returns {Promise<ScoringPointsDetail[]>} Points rows.
 */
export async function getScoringPointsByUserId(user_id: string): Promise<ScoringPointsDetail[]> {
	const rows = await prisma.scoring_points.findMany({
		where: { user_id },
		include: scoringPointsDefaultInclude,
		orderBy: { created_at: 'desc' },
	});
	return toScoringPointsList(rows as ScoringPointsWithIncludesPrisma[]);
}

/**
 * Get scoring points linked to a taxi order.
 *
 * @param {string} order_id - Taxi order ID.
 * @returns {Promise<ScoringPointsDetail[]>} Points rows.
 */
export async function getScoringPointsByTaxiOrderId(order_id: string): Promise<ScoringPointsDetail[]> {
	const rows = await prisma.scoring_points.findMany({
		where: { taxi_order_id: order_id },
		include: scoringPointsDefaultInclude,
	});
	return toScoringPointsList(rows as ScoringPointsWithIncludesPrisma[]);
}

/**
 * Get scoring points linked to a delivery order.
 *
 * @param {string} order_id - Delivery order ID.
 * @returns {Promise<ScoringPointsDetail[]>} Points rows.
 */
export async function getScoringPointsByDeliveryOrderId(order_id: string): Promise<ScoringPointsDetail[]> {
	const rows = await prisma.scoring_points.findMany({
		where: { delivery_order_id: order_id },
		include: scoringPointsDefaultInclude,
	});
	return toScoringPointsList(rows as ScoringPointsWithIncludesPrisma[]);
}

/**
 * Get scoring points for a business.
 *
 * @param {string} module_id - Business' module ID.
 * @returns {Promise<ScoringPointsDetail[]>} Points rows.
 */
export async function getScoringPointsByModuleId(module_id: string): Promise<ScoringPointsDetail[]> {
	const rows = await prisma.scoring_points.findMany({
		where: { OR: [{ food_drinks_module_id: module_id }, { stores_module_id: module_id }] },
		include: scoringPointsDefaultInclude,
	});
	return toScoringPointsList(rows as ScoringPointsWithIncludesPrisma[]);
}

/**
 * Update a scoring points row and return with related entities.
 *
 * @param {string} scoring_points_id - Scoring points ID.
 * @param {object} data - Fields to update.
 * @param {number=} data.points - Updated points value.
 * @param {boolean=} data.isPenalty - Updated penalty flag.
 * @param {string|null=} data.reason - Updated reason.
 * @returns {Promise<ScoringPointsDetail>} Updated row.
 */
export async function updateScoringPoints(
	scoring_points_id: string,
	data: { points?: number; isPenalty?: boolean; reason?: string | null }
): Promise<ScoringPointsDetail> {
	const row = await prisma.scoring_points.update({
		where: { scoring_points_id },
		data: { points: data?.points, isPenalty: data?.isPenalty, reason: data?.reason ?? undefined },
		include: scoringPointsDefaultInclude,
	});
	return toScoringPointsDetail(row as ScoringPointsWithIncludesPrisma);
}

/**
 * Delete a scoring points row by id.
 *
 * @param {string} scoring_points_id - Scoring points ID.
 * @returns {Promise<void>} Resolves when deleted.
 */
export async function deleteScoringPoints(scoring_points_id: string): Promise<void> {
	await prisma.scoring_points.delete({ where: { scoring_points_id } });
}

export default {
	createScoringPoints,
	getScoringPointsById,
	getScoringPointsByDriverId,
	getScoringPointsByUserId,
	getScoringPointsByTaxiOrderId,
	getScoringPointsByDeliveryOrderId,
	getScoringPointsByModuleId,
	updateScoringPoints,
	deleteScoringPoints,
};
