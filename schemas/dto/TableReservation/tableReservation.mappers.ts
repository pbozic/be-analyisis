import { TableReservationDetailSchema } from './tableReservation.dto.js';
import type { TableReservationDetail } from './tableReservation.dto.js';
import { toUserRef } from '../User/user.mappers.ts';
import { UserPrisma } from '../../../prisma/includes/user.ts';
import { toDeliveryOrderRef } from '../DeliveryOrders/deliveryOrder.mappers.ts';

export type PrismaReservation = {
	reservation_id: string;
	seats: number;
	datetime: string | Date;
	status: string;
	table?: number | null;
	user_id: string;
	delivery_order_id?: string | null;
	table_reservation_id: string;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	user?: UserPrisma | null;
	delivery_order?: any | null;
};

export function toTableReservationDetail(row: unknown): TableReservationDetail {
	const r = row as PrismaReservation;
	return TableReservationDetailSchema.parse({
		reservation_id: r.reservation_id,
		seats: r.seats,
		datetime: new Date(r.datetime as string | Date).toISOString(),
		status: r.status,
		table: r.table ?? null,
		user_id: r.user_id,
		table_reservation_id: r.table_reservation_id,
		delivery_order_id: r.delivery_order_id ?? null,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		user: toUserRef(r.user as UserPrisma) ?? undefined,
		delivery_order: r.delivery_order ? toDeliveryOrderRef(r.delivery_order) : null,
	});
}
