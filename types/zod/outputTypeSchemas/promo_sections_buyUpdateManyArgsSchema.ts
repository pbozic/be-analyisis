import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_sections_buyUpdateManyMutationInputSchema } from '../inputTypeSchemas/promo_sections_buyUpdateManyMutationInputSchema';
import { promo_sections_buyUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/promo_sections_buyUncheckedUpdateManyInputSchema';
import { promo_sections_buyWhereInputSchema } from '../inputTypeSchemas/promo_sections_buyWhereInputSchema';

export const promo_sections_buyUpdateManyArgsSchema: z.ZodType<Prisma.promo_sections_buyUpdateManyArgs> = z
	.object({
		data: z.union([
			promo_sections_buyUpdateManyMutationInputSchema,
			promo_sections_buyUncheckedUpdateManyInputSchema,
		]),
		where: promo_sections_buyWhereInputSchema.optional(),
	})
	.strict();

export default promo_sections_buyUpdateManyArgsSchema;
