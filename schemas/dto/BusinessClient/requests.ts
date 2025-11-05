import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// Create BusinessClient Request Schema
export const CreateBusinessClientRequestSchema = z
	.object({
		business_id: UUID,
		first_name: z.string().nullable(),
		last_name: z.string().nullable(),
		email: z.string().email().nullable(),
		telephone_code: z.string(),
		telephone_number: z.string(),
	})
	.openapi({
		title: 'CreateBusinessClientRequest',
		description: 'Request body for creating a business client',
	});

export type CreateBusinessClientRequest = z.infer<typeof CreateBusinessClientRequestSchema>;

// Update BusinessClient Request Schema
export const UpdateBusinessClientRequestSchema = z
	.object({
		first_name: z.string().nullable().optional(),
		last_name: z.string().nullable().optional(),
		email: z.string().email().nullable().optional(),
		telephone_code: z.string().optional(),
		telephone_number: z.string().optional(),
	})
	.openapi({
		title: 'UpdateBusinessClientRequest',
		description: 'Request body for updating a business client',
	});

export type UpdateBusinessClientRequest = z.infer<typeof UpdateBusinessClientRequestSchema>;
