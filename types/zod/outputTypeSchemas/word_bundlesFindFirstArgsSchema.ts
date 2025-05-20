import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { word_bundlesIncludeSchema } from '../inputTypeSchemas/word_bundlesIncludeSchema';
import { word_bundlesWhereInputSchema } from '../inputTypeSchemas/word_bundlesWhereInputSchema';
import { word_bundlesOrderByWithRelationInputSchema } from '../inputTypeSchemas/word_bundlesOrderByWithRelationInputSchema';
import { word_bundlesWhereUniqueInputSchema } from '../inputTypeSchemas/word_bundlesWhereUniqueInputSchema';
import { Word_bundlesScalarFieldEnumSchema } from '../inputTypeSchemas/Word_bundlesScalarFieldEnumSchema';
import { wordsFindManyArgsSchema } from '../outputTypeSchemas/wordsFindManyArgsSchema';
import { Word_bundlesCountOutputTypeArgsSchema } from '../outputTypeSchemas/Word_bundlesCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const word_bundlesSelectSchema: z.ZodType<Prisma.word_bundlesSelect> = z
	.object({
		id: z.boolean().optional(),
		name: z.boolean().optional(),
		description: z.boolean().optional(),
		created_at: z.boolean().optional(),
		words: z.union([z.boolean(), z.lazy(() => wordsFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => Word_bundlesCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const word_bundlesFindFirstArgsSchema: z.ZodType<Prisma.word_bundlesFindFirstArgs> = z
	.object({
		select: word_bundlesSelectSchema.optional(),
		include: word_bundlesIncludeSchema.optional(),
		where: word_bundlesWhereInputSchema.optional(),
		orderBy: z
			.union([word_bundlesOrderByWithRelationInputSchema.array(), word_bundlesOrderByWithRelationInputSchema])
			.optional(),
		cursor: word_bundlesWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([Word_bundlesScalarFieldEnumSchema, Word_bundlesScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();

export default word_bundlesFindFirstArgsSchema;
