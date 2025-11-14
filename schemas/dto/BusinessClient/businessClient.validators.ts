import z from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Email, PhoneNumber } from '../../primitives';
extendZodWithOpenApi(z);

// =======================
// Create Business Client - POST /business-clients
// =======================
export const CreateBusinessClientSchema = z
	.object({
		business_id: UUID,
		first_name: z.string().nullable().optional().openapi({ example: 'John' }),
		last_name: z.string().nullable().optional().openapi({ example: 'Doe' }),
		email: Email.nullable().optional(),
		telephone_code: z.string().optional().openapi({ example: 'SI' }),
		telephone_number: z.string().optional().openapi({ example: '1234567890' }),
		telephone: PhoneNumber, // Calculated field
	})
	.openapi('CreateBusinessClient');
export type CreateBusinessClientInput = z.infer<typeof CreateBusinessClientSchema>;

// =======================
// Update Business Client - PATCH /business-clients/{business_clients_id}
// =======================
export const UpdateBusinessClientSchema = z
	.object({
		first_name: z.string().nullable().optional().openapi({ example: 'John' }),
		last_name: z.string().nullable().optional().openapi({ example: 'Doe' }),
		email: Email.nullable().optional(),
		telephone_code: z.string().optional().openapi({ example: 'SI' }),
		telephone_number: z.string().optional().openapi({ example: '1234567890' }),
		telephone: PhoneNumber, // Calculated field
	})
	.openapi('UpdateBusinessClient');
export type UpdateBusinessClientInput = z.infer<typeof UpdateBusinessClientSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('CreateBusinessClient', CreateBusinessClientSchema);
	registry.register('UpdateBusinessClient', UpdateBusinessClientSchema);
}
