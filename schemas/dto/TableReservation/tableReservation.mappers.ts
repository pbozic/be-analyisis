import { TableReservationDetailSchema } from './table-reservation.dto.js';
import type { TableReservationDetail } from './table-reservation.dto.js';
import { BasicUserDataSchema } from '../User/user.js';
import { BusinessRefSchema } from '../Business/business.ts';

function toBasicUser(user: unknown | null | undefined) {
	if (!user) return null;
	const u = user as {
		first_name?: string | null;
		last_name?: string | null;
		email?: string | null;
		telephone?: string | null;
		telephone_code?: string | null;
		date_of_birth?: string | null;
	};
	return BasicUserDataSchema.parse({
		first_name: u.first_name ?? '',
		last_name: u.last_name ?? '',
		email: u.email ?? undefined,
		telephone: u.telephone ?? undefined,
		telephone_code: u.telephone_code ?? undefined,
		date_of_birth: u.date_of_birth ?? undefined,
	});
}

export function toBusinessRef(b: unknown | null | undefined) {
	if (!b) return null;
	const business = b as {
		business_id: string;
		name?: string | null;
		logo?: string | null;
		banner?: string | null;
	};
	return BusinessRefSchema.parse({
		business_id: business.business_id,
		name: business.name ?? null,
		logo: business.logo ?? null,
		banner: business.banner ?? null,
	});
}

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
	user?: unknown | null;
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
		user: toBasicUser(r.user) ?? undefined,
		business: toBusinessRef(r.business) ?? undefined,
	});
}
