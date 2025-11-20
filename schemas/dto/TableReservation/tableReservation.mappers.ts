import { TableReservationDetailSchema } from './tableReservation.dto.js';
import type { TableReservationDetail } from './tableReservation.dto.js';
import { toBusinessMinimalResponse } from '../Business/business.mappers.ts';
import { toUserResponse } from '../User/user.mappers.ts';
import { UserPrisma } from '../../../prisma/includes/user.ts';

export type PrismaReservation = {
	reservation_id: string;
	seats: number;
	date: string | Date;
	time: string;
	datetime: string | Date;
	status: string;
	table?: number | null;
	user_id: string;
	table_reservation_id: string;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	user?: UserPrisma | null;
	business?: unknown | null;
};

export function toTableReservationDetail(row: unknown): TableReservationDetail {
	const r = row as PrismaReservation;
	return TableReservationDetailSchema.parse({
		reservation_id: r.reservation_id,
		seats: r.seats,
		date: new Date(r.date as string | Date).toISOString(),
		time: r.time,
		datetime: new Date(r.datetime as string | Date).toISOString(),
		status: r.status,
		table: r.table ?? null,
		user_id: r.user_id,
		table_reservation_id: r.table_reservation_id,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		user: toUserResponse(r.user as UserPrisma) ?? undefined,
		business: toBusinessMinimalResponse(r.business) ?? undefined,
	});
}
