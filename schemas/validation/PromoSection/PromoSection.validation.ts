import z from 'zod';
import { MODULE } from '@prisma/client';

import { PositiveInt } from '../../primitives';

export const ListPromoSectionsSchema = z
	.object({
		location: z.object({ lat: z.number(), long: z.number() }),
		radius: PositiveInt.nullable(),
		filterOperator: z.union([z.literal('OR'), z.literal('AND')]).optional(),
		isDailyMealSearch: z.boolean().optional(),
		module: z.nativeEnum(MODULE).openapi({ description: 'Module for which promo sections are requested' }),
	})
	.openapi('UpdatePromoSection');
export type ListPromoSectionsInput = z.infer<typeof ListPromoSectionsSchema>;
