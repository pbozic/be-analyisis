import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { allergensWhereInputSchema } from '../inputTypeSchemas/allergensWhereInputSchema';
import { allergensOrderByWithRelationInputSchema } from '../inputTypeSchemas/allergensOrderByWithRelationInputSchema';
import { allergensWhereUniqueInputSchema } from '../inputTypeSchemas/allergensWhereUniqueInputSchema';
import { AllergensScalarFieldEnumSchema } from '../inputTypeSchemas/AllergensScalarFieldEnumSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const allergensSelectSchema: z.ZodType<Prisma.allergensSelect> = z
	.object({
		allergen_id: z.boolean().optional(),
		name: z.boolean().optional(),
		description: z.boolean().optional(),
		code: z.boolean().optional(),
	})
	.strict();

export const allergensFindFirstOrThrowArgsSchema: z.ZodType<Prisma.allergensFindFirstOrThrowArgs> = z
	.object({
		select: allergensSelectSchema.optional(),
		where: allergensWhereInputSchema.optional(),
		orderBy: z
			.union([allergensOrderByWithRelationInputSchema.array(), allergensOrderByWithRelationInputSchema])
			.optional(),
		cursor: allergensWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([AllergensScalarFieldEnumSchema, AllergensScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();

export default allergensFindFirstOrThrowArgsSchema;
