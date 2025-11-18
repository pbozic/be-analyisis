import { Prisma, SCORING_POINTS_REASON } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import BusinessUserDao from '../dao/BusinessUsers.js';
import { SocketStore } from '../socket.js';
import ScoringPointsDao from '../dao/ScoringPoints.js';
import { Business } from '../types/business/Business.js';

/**
 * Marks businesses as no longer new if they were first activated more than 14 days ago.
 * @returns {Promise<void>}
 */
async function setNewBusinesses(): Promise<void> {
	//TODO: update businessIndex instead!
	const businesses = await prisma.businesses.findMany({
		where: {
			first_activated_at: {
				lt: new Date(new Date().getTime() - 15 * 24 * 60 * 60 * 1000),
			},
			new: true,
		},
	});
	if (businesses.length > 0) {
		await prisma.businesses.updateMany({
			where: {
				business_id: {
					in: businesses.map((business: Business) => business.business_id),
				},
			},
			data: {
				new: false,
			},
		});
	}
}
/**
 * Aggregates unlinked late events into scoring_points as penalties per business/driver.
 * Connects created scoring points back to the underlying late_events in a transaction.
 * @param {'driver' | 'stores' | 'food_drinks'} type - The type of late events to aggregate.
 * @returns {Promise<void>}
 */
async function aggregateLateEvents(type: 'driver' | 'stores' | 'food_drinks'): Promise<void> {
	const unaggregatedLateEvents = await prisma.late_events.groupBy({
		where: {
			scoring_points_id: null,
		},
		by: [`${type}_id`],
		_sum: {
			seconds: true,
		},
	});
	for (const group of unaggregatedLateEvents) {
		const {
			driver_id,
			stores_id,
			food_drinks_id,
			_sum: { seconds },
		} = group;
		const penaltyPoints = Math.floor((seconds as number) / 60);
		if (penaltyPoints > 0) {
			await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
				const data = {
					points: penaltyPoints,
					isPenalty: true,
					reason: SCORING_POINTS_REASON.LATE,
				} as {
					points: number;
					isPenalty: boolean;
					reason: SCORING_POINTS_REASON;
					driver?: object;
					stores_module?: object;
					food_drinks_module?: object;
				};
				if (type === 'driver') {
					data.driver = { connect: { driver_id } };
				} else if (type === 'stores') {
					data.stores_module = { connect: { stores_id } };
				} else if (type === 'food_drinks') {
					data.food_drinks_module = { connect: { food_drinks_id } };
				}
				const newScoringPoints = await tx.scoring_points.create({
					data: data,
				});
				await tx.late_events.updateMany({
					where: {
						driver_id,
						scoring_points_id: null,
					},
					data: {
						scoring_points_id: newScoringPoints.scoring_points_id,
					},
				});
			});
			console.info(`Created and connected scoring points for driver_id: ${driver_id}`);
		}
	}
}
/**
 * Aggregates auto-rejected orders in the last 24 hours into scoring point penalties per business.
 * For every 3 auto-rejections, creates 1 penalty point.
 * @returns {Promise<void>}
 */
async function aggregateAutoRejectedOrders(): Promise<void> {
	const recentOrders = await prisma.delivery_orders.findMany({
		where: {
			created_at: {
				gte: new Date(Date.now() - 24 * 60 * 60 * 1000),
			},
		},
		select: {
			stores_id: true,
			food_drinks_id: true,
			timeline: true,
		},
	});
	const grouped: Record<string, number> = {};
	for (const order of recentOrders as any[]) {
		if (Array.isArray(order.timeline) && order.timeline.some((event: any) => event.status === 'AUTO_REJECTED')) {
			const businessId = order.stores_id || order.food_drinks_id;
			grouped[businessId] = (grouped[businessId] || 0) + 1;
			if (grouped[businessId] % 3 === 0) {
				await ScoringPointsDao.createScoringPoints({
					stores_id: order.stores_id,
					food_drinks_id: order.food_drinks_id,
					points: 1,
					isPenalty: true,
					reason: SCORING_POINTS_REASON.AUTO_REJECTED,
				});
				grouped[businessId] = 0;
			}
		}
	}
}
/**
 * Runs all scoring point aggregations (auto-rejected orders and late events) with error handling.
 * @returns {Promise<void>}
 */
async function aggregateScoringPoints(): Promise<void> {
	try {
		await aggregateAutoRejectedOrders();
		await aggregateLateEvents('driver');
		await aggregateLateEvents('stores');
		await aggregateLateEvents('food_drinks');
	} catch (error) {
		console.error('Error aggregating scoring points:', error);
		throw error;
	}
}

async function joinAllBusinessUsersToRoom(businessId: string, roomName: string): Promise<void> {
	const busers = await BusinessUserDao.getBusinessUsersByBusinessId(businessId);
	await Promise.all(busers.map((buser: any) => SocketStore.addUserToRoom(buser.user_id, roomName)));
}

export { setNewBusinesses };
export { aggregateScoringPoints };
export { joinAllBusinessUsersToRoom };
export default {
	setNewBusinesses,
	aggregateScoringPoints,
	joinAllBusinessUsersToRoom,
};
