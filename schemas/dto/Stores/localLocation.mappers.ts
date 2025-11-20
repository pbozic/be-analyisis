import { AddressResponse } from '../Address/address.js';
import { toAddressResponse } from '../Address/address.mappers.js';
import { LocalLocationDetailSchema, BusinessLocalLocationDetailSchema } from './localLocation.dto.js';
import type { LocalLocationDetail, BusinessLocalLocationDetail } from './localLocation.dto.js';

type PrismaLocalLocation = {
	local_location_id: string;
	address_id: string;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	address: unknown;
};

export function toLocalLocationDetail(row: unknown): LocalLocationDetail {
	const r = row as PrismaLocalLocation;
	return LocalLocationDetailSchema.parse({
		local_location_id: r.local_location_id,
		address_id: r.address_id,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		address: toAddressResponse(r.address as AddressResponse),
	});
}

type PrismaBusinessLocalLocation = {
	business_local_location_id: string;
	stores_id: string;
	local_location_id: string;
	time: string | Date;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	local_location: PrismaLocalLocation;
	orders?: Array<{ order_id: string }>;
};

export function toBusinessLocalLocationDetail(row: unknown): BusinessLocalLocationDetail {
	const r = row as PrismaBusinessLocalLocation;
	const orders = Array.isArray(r.orders)
		? (r.orders as Array<{ order_id: string }>).map((o) => ({ order_id: o.order_id }))
		: [];
	return BusinessLocalLocationDetailSchema.parse({
		business_local_location_id: r.business_local_location_id,
		stores_id: r.stores_id,
		local_location_id: r.local_location_id,
		time: new Date(r.time as string | Date).toISOString(),
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		local_location: toLocalLocationDetail(r.local_location),
		orders,
	});
}
