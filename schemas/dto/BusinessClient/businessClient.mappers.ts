import {
	BusinessClientResponseSchema,
	BusinessClientWithBusinessResponseSchema,
	BusinessClientWithOrdersResponseSchema,
	BusinessClientDetailResponseSchema,
} from './businessClient.dto.js';
import type {
	BusinessClientResponse,
	BusinessClientWithBusinessResponse,
	BusinessClientWithOrdersResponse,
	BusinessClientDetailResponse,
} from './businessClient.dto.js';
import type {
	BusinessClientDefaultPrisma,
	BusinessClientWithBusinessPrisma,
	BusinessClientWithOrdersPrisma,
	BusinessClientDetailPrisma,
} from '../../../prisma/includes/businessClient.js';

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

export function toBusinessClientWithBusinessResponse(
	row: BusinessClientWithBusinessPrisma
): BusinessClientWithBusinessResponse {
	const r = row as BusinessClientWithBusinessPrisma;
	const asRec = r as Record<string, any>;

	// crm_module.business may hold the business relation; map it to `business` for DTO
	const business = asRec.crm_module?.business ?? null;

	return BusinessClientWithBusinessResponseSchema.parse({
		business_clients_id: r.business_clients_id,
		created_at: toIso(asRec.created_at) ?? new Date().toISOString(),
		updated_at: toIso(asRec.updated_at) ?? new Date().toISOString(),
		crm_module_id: r.crm_module_id,
		first_name: asRec.first_name ?? null,
		last_name: asRec.last_name ?? null,
		email: asRec.email ?? null,
		telephone: asRec.telephone ?? '',
		telephone_code: asRec.telephone_code ?? '',
		business,
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

	const business = asRec.crm_module?.business ?? null;
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
		business,
		taxi_orders,
	});
}

export function toBusinessClientList(rows: BusinessClientDefaultPrisma[]): BusinessClientResponse[] {
	return rows.map((r) => toBusinessClientResponse(r));
}

export default {
	toBusinessClientResponse,
	toBusinessClientWithBusinessResponse,
	toBusinessClientWithOrdersResponse,
	toBusinessClientDetailResponse,
	toBusinessClientList,
};
