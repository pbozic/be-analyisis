import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_productsIncludeSchema } from '../inputTypeSchemas/local_productsIncludeSchema';
import { local_productsWhereUniqueInputSchema } from '../inputTypeSchemas/local_productsWhereUniqueInputSchema';
import { local_pricesFindManyArgsSchema } from '../outputTypeSchemas/local_pricesFindManyArgsSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
import { Local_productsCountOutputTypeArgsSchema } from '../outputTypeSchemas/Local_productsCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const local_productsSelectSchema: z.ZodType<Prisma.local_productsSelect> = z
	.object({
		local_product_id: z.boolean().optional(),
		name: z.boolean().optional(),
		description: z.boolean().optional(),
		currency: z.boolean().optional(),
		stripe_product_id: z.boolean().optional(),
		business_id: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		prices: z.union([z.boolean(), z.lazy(() => local_pricesFindManyArgsSchema)]).optional(),
		business: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => Local_productsCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const local_productsFindUniqueArgsSchema: z.ZodType<Prisma.local_productsFindUniqueArgs> = z
	.object({
		select: local_productsSelectSchema.optional(),
		include: local_productsIncludeSchema.optional(),
		where: local_productsWhereUniqueInputSchema,
	})
	.strict();

export default local_productsFindUniqueArgsSchema;
