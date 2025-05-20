import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { financesIncludeSchema } from '../inputTypeSchemas/financesIncludeSchema';
import { financesWhereInputSchema } from '../inputTypeSchemas/financesWhereInputSchema';
import { financesOrderByWithRelationInputSchema } from '../inputTypeSchemas/financesOrderByWithRelationInputSchema';
import { financesWhereUniqueInputSchema } from '../inputTypeSchemas/financesWhereUniqueInputSchema';
import { FinancesScalarFieldEnumSchema } from '../inputTypeSchemas/FinancesScalarFieldEnumSchema';
import { businessFindManyArgsSchema } from '../outputTypeSchemas/businessFindManyArgsSchema';
import { FinancesCountOutputTypeArgsSchema } from '../outputTypeSchemas/FinancesCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const financesSelectSchema: z.ZodType<Prisma.financesSelect> = z
	.object({
		finance_id: z.boolean().optional(),
		bank_name: z.boolean().optional(),
		account_holder: z.boolean().optional(),
		account_number: z.boolean().optional(),
		payment_preferences: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		business: z.union([z.boolean(), z.lazy(() => businessFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => FinancesCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const financesFindManyArgsSchema: z.ZodType<Prisma.financesFindManyArgs> = z
	.object({
		select: financesSelectSchema.optional(),
		include: financesIncludeSchema.optional(),
		where: financesWhereInputSchema.optional(),
		orderBy: z
			.union([financesOrderByWithRelationInputSchema.array(), financesOrderByWithRelationInputSchema])
			.optional(),
		cursor: financesWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([FinancesScalarFieldEnumSchema, FinancesScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();

export default financesFindManyArgsSchema;
