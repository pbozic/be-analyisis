import { LateEventsResponseSchema, LateEventsListResponseSchema } from './lateEvents.dto.ts';
import type { LateEventsWithIncludesPrisma } from '../../prisma/includes/lateEvents.js';
import { BasicUserDataSchema } from '../User/user.js';

export function toLateEventsResponse(row: LateEventsWithIncludesPrisma) {
	const r = row as any;
	const user = r.user
		? BasicUserDataSchema.parse({
				first_name: r.user.first_name ?? '',
				last_name: r.user.last_name ?? '',
				email: r.user.email ?? undefined,
				telephone: r.user.telephone ?? undefined,
				telephone_code: r.user.telephone_code ?? undefined,
				date_of_birth: r.user.date_of_birth ?? undefined,
				language: r.user.language ?? undefined,
			})
		: undefined;
	const stores_module = r.stores_module ? { stores_id: r.stores_module.stores_id } : undefined;
	const food_drinks_module = r.food_drinks_module
		? { food_drinks_id: r.food_drinks_module.food_drinks_id }
		: undefined;
	const driver = r.driver
		? {
				driver_id: r.driver.driver_id,
				user_id: r.driver.user_id ?? null,
				online: r.driver.online ?? null,
				created_at: r.driver.created_at ? new Date(r.driver.created_at).toISOString() : undefined,
			}
		: undefined;
	const delivery_order = r.delivery_order
		? {
				order_id: r.delivery_order.order_id,
				status: r.delivery_order.status,
				created_at: r.delivery_order.created_at
					? new Date(r.delivery_order.created_at).toISOString()
					: undefined,
				user_id: r.delivery_order.user_id,
			}
		: undefined;
	const taxi_order = r.taxi_order
		? {
				order_id: r.taxi_order.order_id,
				status: r.taxi_order.status,
				created_at: r.taxi_order.created_at ? new Date(r.taxi_order.created_at).toISOString() : undefined,
				user_id: r.taxi_order.user_id,
			}
		: undefined;
	const scoring_points = r.scoring_points
		? {
				scoring_points_id: r.scoring_points.scoring_points_id,
				points: r.scoring_points.points,
				isPenalty: r.scoring_points.isPenalty,
				reason: r.scoring_points.reason ?? '',
				created_at: r.scoring_points.created_at
					? new Date(r.scoring_points.created_at).toISOString()
					: undefined,
			}
		: undefined;
	return LateEventsResponseSchema.parse({
		late_events_id: r.late_events_id,
		stores_id: r.stores_id ?? null,
		food_drinks_id: r.food_drinks_id ?? null,
		driver_id: r.driver_id,
		business_id: r.business_id ?? null,
		delivery_order_id: r.delivery_order_id ?? null,
		taxi_order_id: r.taxi_order_id ?? null,
		scoring_points_id: r.scoring_points_id ?? null,
		seconds: r.seconds,
		created_at: r.created_at ? new Date(r.created_at).toISOString() : new Date().toISOString(),
		updated_at: r.updated_at ? new Date(r.updated_at).toISOString() : new Date().toISOString(),
		user,
		stores_module,
		food_drinks_module,
		driver,
		delivery_order,
		taxi_order,
		scoring_points,
	});
}

export function toLateEventsList(rows: LateEventsWithIncludesPrisma[]) {
	return LateEventsListResponseSchema.parse({ data: rows });
}

export default { toLateEventsResponse, toLateEventsList };
