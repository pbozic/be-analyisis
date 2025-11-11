import prisma from '../prisma/prisma.js';
import { LateEventsResponse, CreateLateEvents } from '../schemas/dto/LateEvents/lateEvents.dto.ts';
import lateEventsDefaultInclude from '../prisma/includes/lateEvents.js';
import type { LateEventsWithIncludesPrisma } from '../prisma/includes/lateEvents.js';
import { toLateEventsResponse, toLateEventsList } from '../schemas/dto/LateEvents/late-events.mappers.js';

/**
 * Create a late event for delivery or taxi order and link to business and user.
 *
 * @param {CreateLateEvents} data
 * @returns {Promise<LateEventsResponse>} Created late event.
 */
export async function createLateEvent(data: CreateLateEvents): Promise<LateEventsResponse> {
	const newLateEvent = await prisma.late_events.create({
		data: {
			seconds: data.seconds,
			drivers: { connect: { driver_id: data.driver_id } },
			delivery_order: data.delivery_order_id ? { connect: { order_id: data.delivery_order_id } } : undefined,
			taxi_order: data.taxi_order_id ? { connect: { order_id: data.taxi_order_id } } : undefined,
			stores_id: data.stores_id ?? undefined,
			food_drinks_id: data.food_drinks_id ?? undefined,
			scoring_points_id: data.scoring_points_id ?? undefined,
		},
		include: lateEventsDefaultInclude,
	});
	return toLateEventsResponse(newLateEvent as LateEventsWithIncludesPrisma);
}

/**
 * Get a late event by id with related entities.
 *
 * @param {string} late_events_id - Late event ID.
 * @returns {Promise<LateEventsResponse | null>} Late event or null.
 */
export async function getLateEventById(late_events_id: string): Promise<LateEventsResponse | null> {
	const row = await prisma.late_events.findUnique({ where: { late_events_id }, include: lateEventsDefaultInclude });
	if (!row) return null;
	return toLateEventsResponse(row as LateEventsWithIncludesPrisma);
}

/**
 * Get late events for a driver with related entities.
 *
 * @param {string} driver_id - Driver ID.
 * @returns {Promise<LateEventsResponse[]>} Late events.
 */
export async function getLateEventsByDriverId(driver_id: string): Promise<LateEventsResponse[]> {
	const rows = await prisma.late_events.findMany({
		where: { driver_id },
		orderBy: { created_at: 'desc' },
		include: lateEventsDefaultInclude,
	});
	return toLateEventsList(rows as LateEventsWithIncludesPrisma[]).data;
}

/**
 * Get late events by taxi order id.
 *
 * @param {string} order_id - Taxi order ID.
 * @returns {Promise<LateEventsResponse[]>} Late events.
 */
export async function getLateEventsByTaxiOrderId(order_id: string): Promise<LateEventsResponse[]> {
	const rows = await prisma.late_events.findMany({
		where: { taxi_order_id: order_id },
		include: lateEventsDefaultInclude,
	});
	return toLateEventsList(rows as LateEventsWithIncludesPrisma[]).data;
}

/**
 * Get late events by delivery order id.
 *
 * @param {string} order_id - Delivery order ID.
 * @returns {Promise<LateEventsResponse[]>} Late events.
 */
export async function getLateEventsByDeliveryOrderId(order_id: string): Promise<LateEventsResponse[]> {
	const rows = await prisma.late_events.findMany({
		where: { delivery_order_id: order_id },
		include: lateEventsDefaultInclude,
	});
	return toLateEventsList(rows as LateEventsWithIncludesPrisma[]).data;
}

/**
 * Update a late event and return with related entities.
 *
 * @param {string} late_events_id - Late event ID.
 * @param {object} data - Fields to update.
 * @param {number=} data.seconds - Delay in seconds.
 * @param {string|null=} data.stores_id - Optional store ID.
 * @param {string|null=} data.food_drinks_id - Optional food/drink module ID.
 * @param {string|null=} data.scoring_points_id - Optional scoring points ID.
 * @returns {Promise<LateEventsResponse>} Updated late event.
 */
export async function updateLateEvent(
	late_events_id: string,
	data: {
		seconds?: number;
		stores_id?: string | null;
		food_drinks_id?: string | null;
		scoring_points_id?: string | null;
	}
): Promise<LateEventsResponse> {
	const updated = await prisma.late_events.update({
		where: { late_events_id },
		data: {
			seconds: data?.seconds ?? undefined,
			stores_id: data?.stores_id ?? undefined,
			food_drinks_id: data?.food_drinks_id ?? undefined,
			scoring_points_id: data?.scoring_points_id ?? undefined,
		},
		include: lateEventsDefaultInclude,
	});
	return toLateEventsResponse(updated as LateEventsWithIncludesPrisma);
}

/**
 * Delete a late event by id.
 *
 * @param {string} late_events_id - Late event ID.
 * @returns {Promise<void>} Resolves when deleted.
 */
export async function deleteLateEvent(late_events_id: string): Promise<void> {
	await prisma.late_events.delete({ where: { late_events_id } });
}

export default {
	createLateEvent,
	getLateEventById,
	getLateEventsByDriverId,
	getLateEventsByTaxiOrderId,
	getLateEventsByDeliveryOrderId,
	updateLateEvent,
	deleteLateEvent,
};
