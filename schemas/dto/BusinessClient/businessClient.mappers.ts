import {
	BusinessClientResponseSchema,
	BusinessClientWithOrdersResponseSchema,
	BusinessClientDetailResponseSchema,
} from './businessClient.dto.js';
import type {
	BusinessClientResponse,
	BusinessClientWithOrdersResponse,
	BusinessClientDetailResponse,
} from './businessClient.dto.js';
import type {
	BusinessClientDefaultPrisma,
	BusinessClientWithOrdersPrisma,
	BusinessClientDetailPrisma,
} from '../../../prisma/includes/businessClient.js';
import { toBusinessMinimalResponse } from '../Business/business.mappers.ts';

function toIso(date: unknown) {
	return date ? new Date(date as any).toISOString() : undefined;
}

export function toBusinessClientResponse(row: BusinessClientDefaultPrisma): BusinessClientResponse {
	const r = row as BusinessClientDefaultPrisma;
	const asRec = r as Record<string, any>;

	return BusinessClientResponseSchema.parse({
		business_clients_id: r.business_clients_id,
		created_at: toIso(asRec.created_at) ?? new Date().toISOString(),
		updated_at: toIso(asRec.updated_at) ?? new Date().toISOString(),
		crm_module_id: r.crm_module_id,
		first_name: asRec.first_name ?? null,
		last_name: asRec.last_name ?? null,
		email: asRec.email ?? null,
		telephone: asRec.telephone ?? '',
		telephone_code: asRec.telephone_code ?? '',
	});
}

export function toBusinessClientWithOrdersResponse(
	row: BusinessClientWithOrdersPrisma
): BusinessClientWithOrdersResponse {
	const r = row as BusinessClientWithOrdersPrisma;
	const asRec = r as Record<string, any>;

	const taxi_orders = asRec.taxi_orders
		? (asRec.taxi_orders as any[]).map((o) => ({
				order_id: o.order_id,
				status: o.status,
				created_at: toIso(o.created_at),
			}))
		: null;

	return BusinessClientWithOrdersResponseSchema.parse({
		business_clients_id: r.business_clients_id,
		created_at: toIso(asRec.created_at) ?? new Date().toISOString(),
		updated_at: toIso(asRec.updated_at) ?? new Date().toISOString(),
		crm_module_id: r.crm_module_id,
		first_name: asRec.first_name ?? null,
		last_name: asRec.last_name ?? null,
		email: asRec.email ?? null,
		telephone: asRec.telephone ?? '',
		telephone_code: asRec.telephone_code ?? '',
		taxi_orders,
	});
}

export function toBusinessClientDetailResponse(row: BusinessClientDetailPrisma): BusinessClientDetailResponse {
	const r = row as BusinessClientDetailPrisma;
	const asRec = r as Record<string, any>;

	const taxi_orders = asRec.taxi_orders
		? (asRec.taxi_orders as any[]).map((o) => ({
				order_id: o.order_id,
				status: o.status,
				created_at: toIso(o.created_at),
			}))
		: null;

	return BusinessClientDetailResponseSchema.parse({
		business_clients_id: r.business_clients_id,
		created_at: toIso(asRec.created_at) ?? new Date().toISOString(),
		updated_at: toIso(asRec.updated_at) ?? new Date().toISOString(),
		crm_module_id: r.crm_module_id,
		first_name: asRec.first_name ?? null,
		last_name: asRec.last_name ?? null,
		email: asRec.email ?? null,
		telephone: asRec.telephone ?? '',
		telephone_code: asRec.telephone_code ?? '',
		business: toBusinessMinimalResponse(asRec.crm_module.business),
		taxi_orders,
	});
}

export default {
	toBusinessClientResponse,
	toBusinessClientWithOrdersResponse,
	toBusinessClientDetailResponse,
};
