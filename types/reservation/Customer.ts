// --- ENUMS ---
import { z } from 'zod';

import type { customers } from '../../prisma/schemas/interfaces';

export const CreateCustomerSchema = z.object({
	first_name: z.string(),
	last_name: z.string(),
	email: z.string().email().optional(),
	telephone: z.string().optional(),
	user_id: z.string().uuid().optional(),
	customer_id: z.string().uuid().optional(),
});

export const UpdateCustomerSchema = CreateCustomerSchema.partial();
export const DeleteCustomerSchema = z.object({ customer_id: z.string().uuid() });

export type CreateCustomerInput = z.infer<typeof CreateCustomerSchema>;
export type UpdateCustomerInput = z.infer<typeof UpdateCustomerSchema>;

export type Customer = customers;
