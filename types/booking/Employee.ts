// --- ENUMS ---
import { z } from 'zod';

import type { employee } from '../../prisma/schemas/interfaces';

export const CreateEmployeeSchema = z.object({
	reservation_module_id: z.string().uuid(),
	business_users_id: z.string().uuid().optional(),
});

export const UpdateEmployeeSchema = CreateEmployeeSchema.partial();
export const DeleteEmployeeSchema = z.object({ employee_id: z.string().uuid() });

export type CreateEmployeeInput = z.infer<typeof CreateEmployeeSchema>;
export type UpdateEmployeeInput = z.infer<typeof UpdateEmployeeSchema>;

export type Employee = employee;
