import { ScoringPointsDetailSchema } from './scoring-points.dto.ts';
import type { ScoringPointsDetail } from './scoring-points.dto.ts';
import type { ScoringPointsWithIncludesPrisma } from '../../../prisma/includes/scoringPoints.js';

function toIso(d: unknown): string | undefined | null {
	if (d === null) return null;
	if (d === undefined) return undefined;
	if (typeof d === 'string') return d;
	if (d instanceof Date) return d.toISOString();
	try {
		return (d as any)?.toISOString?.() ?? String(d);
	} catch {
		return String(d);
	}
}

export function toScoringPointsDetail(
	payload: ScoringPointsWithIncludesPrisma | null | undefined
): ScoringPointsDetail {
	if (!payload) {
		throw new Error('Scoring points payload is missing');
	}
	const p = payload;
	return ScoringPointsDetailSchema.parse({
		scoring_points_id: p.scoring_points_id,
		user_id: p.user_id ?? null,
		stores_module_id: p.stores_id ?? null,
		food_drinks_module_id: p.food_drinks_id ?? null,
		driver_id: p.driver_id ?? null,
		delivery_order_id: p.delivery_order_id ?? null,
		taxi_order_id: p.taxi_order_id ?? null,
		points: p.points,
		isPenalty: p.isPenalty,
		reason: p.reason ?? null,
		created_at: toIso(p.created_at) as string,
		updated_at: toIso(p.updated_at) as string,
		user: p.user
			? {
					first_name: p.user.first_name,
					last_name: p.user.last_name,
					email: p.user.email ?? undefined,
					telephone: p.user.telephone ?? undefined,
					telephone_code: p.user.telephone_code ?? undefined,
					date_of_birth: toIso(p.user.date_of_birth) as string,
				}
			: undefined,
		delivery_order: p.delivery_order ? { order_id: p.delivery_order.order_id } : null,
		taxi_order: p.taxi_order ? { order_id: p.taxi_order.order_id } : null,
		late_events: Array.isArray(p.late_events)
			? p.late_events.map((le: any) => ({ late_events_id: le.late_events_id }))
			: [],
	});
}

export function toScoringPointsList(payload: ScoringPointsWithIncludesPrisma[]): ScoringPointsDetail[] {
	return payload.map((p) => toScoringPointsDetail(p));
}
