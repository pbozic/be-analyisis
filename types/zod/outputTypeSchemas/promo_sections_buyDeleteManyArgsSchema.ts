import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_sections_buyWhereInputSchema } from '../inputTypeSchemas/promo_sections_buyWhereInputSchema';

export const promo_sections_buyDeleteManyArgsSchema: z.ZodType<Prisma.promo_sections_buyDeleteManyArgs> = z
	.object({
		where: promo_sections_buyWhereInputSchema.optional(),
	})
	.strict();

export default promo_sections_buyDeleteManyArgsSchema;
