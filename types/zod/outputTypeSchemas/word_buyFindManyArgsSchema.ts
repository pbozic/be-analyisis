import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { word_buyIncludeSchema } from '../inputTypeSchemas/word_buyIncludeSchema';
import { word_buyWhereInputSchema } from '../inputTypeSchemas/word_buyWhereInputSchema';
import { word_buyOrderByWithRelationInputSchema } from '../inputTypeSchemas/word_buyOrderByWithRelationInputSchema';
import { word_buyWhereUniqueInputSchema } from '../inputTypeSchemas/word_buyWhereUniqueInputSchema';
import { Word_buyScalarFieldEnumSchema } from '../inputTypeSchemas/Word_buyScalarFieldEnumSchema';
import { wordsArgsSchema } from '../outputTypeSchemas/wordsArgsSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const word_buySelectSchema: z.ZodType<Prisma.word_buySelect> = z
	.object({
		word_buy_id: z.boolean().optional(),
		word_id: z.boolean().optional(),
		stripe_subscription_id: z.boolean().optional(),
		price: z.boolean().optional(),
		active_at: z.boolean().optional(),
		expires_at: z.boolean().optional(),
		business_id: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		deleted_at: z.boolean().optional(),
		word: z.union([z.boolean(), z.lazy(() => wordsArgsSchema)]).optional(),
		business: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
	})
	.strict();

export const word_buyFindManyArgsSchema: z.ZodType<Prisma.word_buyFindManyArgs> = z
	.object({
		select: word_buySelectSchema.optional(),
		include: word_buyIncludeSchema.optional(),
		where: word_buyWhereInputSchema.optional(),
		orderBy: z
			.union([word_buyOrderByWithRelationInputSchema.array(), word_buyOrderByWithRelationInputSchema])
			.optional(),
		cursor: word_buyWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([Word_buyScalarFieldEnumSchema, Word_buyScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();

export default word_buyFindManyArgsSchema;
