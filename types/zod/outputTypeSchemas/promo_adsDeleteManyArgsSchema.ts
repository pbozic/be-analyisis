import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_adsWhereInputSchema } from '../inputTypeSchemas/promo_adsWhereInputSchema';

export const promo_adsDeleteManyArgsSchema: z.ZodType<Prisma.promo_adsDeleteManyArgs> = z
	.object({
		where: promo_adsWhereInputSchema.optional(),
	})
	.strict();

export default promo_adsDeleteManyArgsSchema;
