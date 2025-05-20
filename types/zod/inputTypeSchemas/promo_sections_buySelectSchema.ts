import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_sectionsArgsSchema } from '../outputTypeSchemas/promo_sectionsArgsSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';

export const promo_sections_buySelectSchema: z.ZodType<Prisma.promo_sections_buySelect> = z
	.object({
		promo_sections_buy_id: z.boolean().optional(),
		promo_sections_id: z.boolean().optional(),
		stripe_subscription_id: z.boolean().optional(),
		business_id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		active_at: z.boolean().optional(),
		expires_at: z.boolean().optional(),
		tier: z.boolean().optional(),
		promo_section: z.union([z.boolean(), z.lazy(() => promo_sectionsArgsSchema)]).optional(),
		business: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
		bought_by: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
	})
	.strict();

export default promo_sections_buySelectSchema;
