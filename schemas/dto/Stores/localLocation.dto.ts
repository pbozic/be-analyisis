import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives';

extendZodWithOpenApi(z);

// Address ref
export const AddressRefSchema = z
	.object({
		address_id: UUID,
		label: z.string().min(1),
	})
	.openapi('AddressRef');
export type AddressRef = z.infer<typeof AddressRefSchema>;

// Order id ref
export const OrderRefSchema = z
	.object({
		order_id: UUID,
		details: z.unknown(),
		scheduled_at: Timestamp,
	})
	.openapi('OrderRef');
export type OrderRef = z.infer<typeof OrderRefSchema>;

// LocalLocation DTOs
export const LocalLocationBaseSchema = z
	.object({
		local_location_id: UUID,
		address_id: UUID,
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('LocalLocationBase');
export type LocalLocationBase = z.infer<typeof LocalLocationBaseSchema>;

export const LocalLocationDetailSchema = LocalLocationBaseSchema.extend({
	address: AddressRefSchema,
}).openapi('LocalLocationDetail');
export type LocalLocationDetail = z.infer<typeof LocalLocationDetailSchema>;

// BusinessLocalLocation DTOs
export const BusinessLocalLocationBaseSchema = z
	.object({
		business_local_location_id: UUID,
		stores_id: UUID,
		local_location_id: UUID,
		time: Timestamp,
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('BusinessLocalLocationBase');
export type BusinessLocalLocationBase = z.infer<typeof BusinessLocalLocationBaseSchema>;

export const BusinessLocalLocationDetailSchema = BusinessLocalLocationBaseSchema.extend({
	local_location: LocalLocationDetailSchema,
	orders: z.array(OrderRefSchema).default([]),
}).openapi('BusinessLocalLocationDetail');
export type BusinessLocalLocationDetail = z.infer<typeof BusinessLocalLocationDetailSchema>;

// Mappers
export function toAddressRef(address: unknown): AddressRef {
	const a = address as { address_id: string; address?: string | null; city?: string | null };
	const label = a.address || a.city || a.address_id;
	return AddressRefSchema.parse({ address_id: a.address_id, label });
}

type PrismaLocalLocation = {
	local_location_id: string;
	address_id: string;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	address: { address_id: string; address?: string | null; city?: string | null };
};

export function toLocalLocationDetail(row: unknown): LocalLocationDetail {
	const r = row as PrismaLocalLocation;
	return LocalLocationDetailSchema.parse({
		local_location_id: r.local_location_id,
		address_id: r.address_id,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		address: toAddressRef(r.address),
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

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('AddressRef', AddressRefSchema);
	registry.register('OrderIdRef', OrderRefSchema);
	registry.register('LocalLocationBase', LocalLocationBaseSchema);
	registry.register('LocalLocationDetail', LocalLocationDetailSchema);
	registry.register('BusinessLocalLocationBase', BusinessLocalLocationBaseSchema);
	registry.register('BusinessLocalLocationDetail', BusinessLocalLocationDetailSchema);
}
