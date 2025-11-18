import { DeliveryOrderDetailSchema, DeliveryOrderRefSchema } from './deliveryOrder.dto.js';
import type { DeliveryOrderDetail, DeliveryOrderRef } from './deliveryOrder.dto.js';

// ===============
// Mappers
// ===============
type PrismaDeliveryOrder = {
	order_id: string;
	user_id: string;
	module_id: string;
	module_type: string;
	driver_id?: string | null;
	order_number?: number;
	status: string;
	details?: Record<string, unknown> | null;
	timeline?: Array<Record<string, unknown>>;
	delivery_address?: Record<string, unknown> | null;
	pickup_address?: Record<string, unknown> | null;
	pickup_time?: string | Date | null;
	delivery_time?: string | Date | null;
	estimated_delivery_time?: string | Date | null;
	total_amount?: number | null;
	delivery_fee?: number | null;
	tip_amount?: number | null;
	payment?: Record<string, unknown> | null;
	payment_method?: string | null;
	is_daily_meal?: boolean;
	special_instructions?: string | null;
	last_sent_at?: string | Date | null;
	delivery_image?: string | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	user?: unknown;
	business?: unknown;
	driver?: unknown;
	items?: Array<Record<string, unknown>>;
};

export function toDeliveryOrderDetail(row: unknown): DeliveryOrderDetail {
	const r = row as PrismaDeliveryOrder;

	return DeliveryOrderDetailSchema.parse({
		order_id: r.order_id,
		user_id: r.user_id,
		module_id: r.module_id,
		module_type: r.module_type as 'STORES' | 'FOOD_DRINKS',
		driver_id: r.driver_id ?? null,
		order_number: r.order_number ?? undefined,
		status: r.status,
		details: r.details ?? null,
		timeline: r.timeline ?? [],
		delivery_address: r.delivery_address ?? null,
		pickup_address: r.pickup_address ?? null,
		pickup_time: r.pickup_time ? new Date(r.pickup_time as string | Date).toISOString() : null,
		delivery_time: r.delivery_time ? new Date(r.delivery_time as string | Date).toISOString() : null,
		estimated_delivery_time: r.estimated_delivery_time
			? new Date(r.estimated_delivery_time as string | Date).toISOString()
			: null,
		total_amount: r.total_amount ?? null,
		delivery_fee: r.delivery_fee ?? null,
		tip_amount: r.tip_amount ?? null,
		payment: r.payment ?? null,
		payment_method: r.payment_method ?? null,
		is_daily_meal: r.is_daily_meal ?? undefined,
		special_instructions: r.special_instructions ?? null,
		items: r.items ?? [],
		last_sent_at: r.last_sent_at ? new Date(r.last_sent_at as string | Date).toISOString() : null,
		delivery_image: r.delivery_image ?? null,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		user: r.user ? (r.user as Record<string, unknown>) : null,
		business: r.business ? (r.business as Record<string, unknown>) : null,
		driver: r.driver ? (r.driver as Record<string, unknown>) : null,
	});
}

export function toDeliveryOrderRef(row: unknown): DeliveryOrderRef {
	const r = row as PrismaDeliveryOrder;
	return DeliveryOrderRefSchema.parse({
		order_id: r.order_id,
		order_number: r.order_number ?? undefined,
		status: r.status,
		total_amount: r.total_amount ?? null,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
	});
}
