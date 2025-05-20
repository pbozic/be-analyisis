import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_pricesIncludeSchema } from '../inputTypeSchemas/local_pricesIncludeSchema';
import { local_pricesWhereUniqueInputSchema } from '../inputTypeSchemas/local_pricesWhereUniqueInputSchema';
import { local_pricesCreateInputSchema } from '../inputTypeSchemas/local_pricesCreateInputSchema';
import { local_pricesUncheckedCreateInputSchema } from '../inputTypeSchemas/local_pricesUncheckedCreateInputSchema';
import { local_pricesUpdateInputSchema } from '../inputTypeSchemas/local_pricesUpdateInputSchema';
import { local_pricesUncheckedUpdateInputSchema } from '../inputTypeSchemas/local_pricesUncheckedUpdateInputSchema';
import { local_productsArgsSchema } from '../outputTypeSchemas/local_productsArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const local_pricesSelectSchema: z.ZodType<Prisma.local_pricesSelect> = z
	.object({
		local_prices_id: z.boolean().optional(),
		local_product_id: z.boolean().optional(),
		currency: z.boolean().optional(),
		stripe_price_id: z.boolean().optional(),
		stripe_product_id: z.boolean().optional(),
		tier: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		product: z.union([z.boolean(), z.lazy(() => local_productsArgsSchema)]).optional(),
	})
	.strict();

export const local_pricesUpsertArgsSchema: z.ZodType<Prisma.local_pricesUpsertArgs> = z
	.object({
		select: local_pricesSelectSchema.optional(),
		include: local_pricesIncludeSchema.optional(),
		where: local_pricesWhereUniqueInputSchema,
		create: z.union([local_pricesCreateInputSchema, local_pricesUncheckedCreateInputSchema]),
		update: z.union([local_pricesUpdateInputSchema, local_pricesUncheckedUpdateInputSchema]),
	})
	.strict();

export default local_pricesUpsertArgsSchema;
