import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_sectionsArgsSchema } from '../outputTypeSchemas/promo_sectionsArgsSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';

export const promo_sections_buyIncludeSchema: z.ZodType<Prisma.promo_sections_buyInclude> = z
	.object({
		promo_section: z.union([z.boolean(), z.lazy(() => promo_sectionsArgsSchema)]).optional(),
		business: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
		bought_by: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
	})
	.strict();

export default promo_sections_buyIncludeSchema;
