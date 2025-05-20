import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_bannersSelectSchema } from '../inputTypeSchemas/promo_bannersSelectSchema';
import { promo_bannersIncludeSchema } from '../inputTypeSchemas/promo_bannersIncludeSchema';

export const promo_bannersArgsSchema: z.ZodType<Prisma.promo_bannersDefaultArgs> = z
	.object({
		select: z.lazy(() => promo_bannersSelectSchema).optional(),
		include: z.lazy(() => promo_bannersIncludeSchema).optional(),
	})
	.strict();

export default promo_bannersArgsSchema;
