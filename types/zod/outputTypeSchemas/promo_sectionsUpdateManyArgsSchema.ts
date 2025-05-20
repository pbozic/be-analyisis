import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_sectionsUpdateManyMutationInputSchema } from '../inputTypeSchemas/promo_sectionsUpdateManyMutationInputSchema';
import { promo_sectionsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/promo_sectionsUncheckedUpdateManyInputSchema';
import { promo_sectionsWhereInputSchema } from '../inputTypeSchemas/promo_sectionsWhereInputSchema';

export const promo_sectionsUpdateManyArgsSchema: z.ZodType<Prisma.promo_sectionsUpdateManyArgs> = z
	.object({
		data: z.union([promo_sectionsUpdateManyMutationInputSchema, promo_sectionsUncheckedUpdateManyInputSchema]),
		where: promo_sectionsWhereInputSchema.optional(),
	})
	.strict();

export default promo_sectionsUpdateManyArgsSchema;
