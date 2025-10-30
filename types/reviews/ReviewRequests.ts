import { z } from 'zod';

export interface ReviewPayload {
	rating?: number;
	comment?: string;
	feedback?: { [key: string]: string };
}

// Zod Schemas
export const ReviewPayloadSchema = z.object({
	rating: z.number().min(1).max(5).optional(),
	comment: z.string().max(1000).optional(),
	feedback: z.record(z.string()).optional(),
});
