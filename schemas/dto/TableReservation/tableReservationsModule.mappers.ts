import { TableReservationModuleResponse, TableReservationModuleResponseSchema } from './tableReservationsModule.dto.ts';

export type PrismaTableReservationModule = {
	id: string;
	business_id: string;
	seats: number | null | undefined;
	business_details_id: string | null | undefined;
	business?: unknown;
	business_details?: unknown;
	reservations?: unknown;
};

export function toTableReservationModuleResponse(row: unknown): TableReservationModuleResponse {
	const r = row as PrismaTableReservationModule;
	return TableReservationModuleResponseSchema.parse({
		id: r.id,
		business_id: r.business_id,
		seats: r.seats,
		business_details_id: r.business_details_id,
	});
}

export default { toTableReservationModuleResponse };
