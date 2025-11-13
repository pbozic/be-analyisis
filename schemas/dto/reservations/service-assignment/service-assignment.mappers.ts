import type { ServiceAssignmentResponse } from './service-assignment.dto';
import { ServiceAssignmentResponseSchema } from './service-assignment.dto';
import type { ServiceAssignmentBasePrisma } from '../../../../prisma/includes/reservation/service-assignment';

/**
 * Map Prisma service_assignment to ServiceAssignmentResponse
 */
export function toServiceAssignmentResponse(row: ServiceAssignmentBasePrisma): ServiceAssignmentResponse {
	const r = row;

	const dto = {
		service_id: r.service_id,
		employee_id: r.employee_id,
	};

	return ServiceAssignmentResponseSchema.parse(dto);
}

/**
 * Map list of service assignments
 */
export function toServiceAssignmentList(rows: ServiceAssignmentBasePrisma[]): ServiceAssignmentResponse[] {
	return rows.map(toServiceAssignmentResponse);
}

export default {
	toServiceAssignmentResponse,
	toServiceAssignmentList,
};
