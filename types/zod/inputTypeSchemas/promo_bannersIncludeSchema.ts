import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { filesArgsSchema } from '../outputTypeSchemas/filesArgsSchema';
import { promo_adsArgsSchema } from '../outputTypeSchemas/promo_adsArgsSchema';

export const promo_bannersIncludeSchema: z.ZodType<Prisma.promo_bannersInclude> = z
	.object({
		files: z.union([z.boolean(), z.lazy(() => filesArgsSchema)]).optional(),
		promo_ads: z.union([z.boolean(), z.lazy(() => promo_adsArgsSchema)]).optional(),
	})
	.strict();

export default promo_bannersIncludeSchema;
