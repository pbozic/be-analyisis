import z from 'zod';

import { PositiveInt } from '../../primitives';

export const ListPromoSectionsSchema = z
	.object({
		location: z.object({ lat: z.number(), long: z.number() }),
		radius: PositiveInt.nullable(),
		filterOperator: z.union([z.literal('OR'), z.literal('AND')]).optional(),
		isDailyMealSearch: z.boolean().optional(),
	})
	.openapi('UpdatePromoSection');
export type ListPromoSectionsInput = z.infer<typeof ListPromoSectionsSchema>;
