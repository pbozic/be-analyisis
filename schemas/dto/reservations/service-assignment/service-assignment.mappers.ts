import type { ServiceAssignmentResponse } from './service-assignment.dto';
import { ServiceAssignmentResponseSchema } from './service-assignment.dto';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map Prisma service_assignment to ServiceAssignmentResponse
 */
export function toServiceAssignmentResponse(row: any): ServiceAssignmentResponse {
	const r = row;

	const dto = {
		service_assignment_id: r.service_assignment_id,
		service_id: r.service_id,
		employee_id: r.employee_id,
		is_active: r.is_active ?? true,
		assigned_at: toIso(r.assigned_at) ?? '',
		service: r.service ?? undefined,
		employee: r.employee ?? undefined,
	};

	return ServiceAssignmentResponseSchema.parse(dto);
}

/**
 * Map list of service assignments
 */
export function toServiceAssignmentList(rows: any[]): ServiceAssignmentResponse[] {
	return rows.map(toServiceAssignmentResponse);
}

export default {
	toServiceAssignmentResponse,
	toServiceAssignmentList,
};
