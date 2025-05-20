import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { allergensCreateInputSchema } from '../inputTypeSchemas/allergensCreateInputSchema';
import { allergensUncheckedCreateInputSchema } from '../inputTypeSchemas/allergensUncheckedCreateInputSchema';
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

export const allergensCreateArgsSchema: z.ZodType<Prisma.allergensCreateArgs> = z
	.object({
		select: allergensSelectSchema.optional(),
		data: z.union([allergensCreateInputSchema, allergensUncheckedCreateInputSchema]),
	})
	.strict();

export default allergensCreateArgsSchema;
