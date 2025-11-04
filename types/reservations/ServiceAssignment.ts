// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { Employee } from './Employee.js';
import type { Service } from './Service.js';

export type ServiceAssignment = {
	employee_id: string;
	service_id: string;
	employee: Employee;
	service: Service;
};
