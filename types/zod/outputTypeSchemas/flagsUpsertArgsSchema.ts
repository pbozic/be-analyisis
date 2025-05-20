import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flagsIncludeSchema } from '../inputTypeSchemas/flagsIncludeSchema';
import { flagsWhereUniqueInputSchema } from '../inputTypeSchemas/flagsWhereUniqueInputSchema';
import { flagsCreateInputSchema } from '../inputTypeSchemas/flagsCreateInputSchema';
import { flagsUncheckedCreateInputSchema } from '../inputTypeSchemas/flagsUncheckedCreateInputSchema';
import { flagsUpdateInputSchema } from '../inputTypeSchemas/flagsUpdateInputSchema';
import { flagsUncheckedUpdateInputSchema } from '../inputTypeSchemas/flagsUncheckedUpdateInputSchema';
import { flag_historyFindManyArgsSchema } from '../outputTypeSchemas/flag_historyFindManyArgsSchema';
import { FlagsCountOutputTypeArgsSchema } from '../outputTypeSchemas/FlagsCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const flagsSelectSchema: z.ZodType<Prisma.flagsSelect> = z
	.object({
		flag_id: z.boolean().optional(),
		name: z.boolean().optional(),
		status: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		history: z.union([z.boolean(), z.lazy(() => flag_historyFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => FlagsCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const flagsUpsertArgsSchema: z.ZodType<Prisma.flagsUpsertArgs> = z
	.object({
		select: flagsSelectSchema.optional(),
		include: flagsIncludeSchema.optional(),
		where: flagsWhereUniqueInputSchema,
		create: z.union([flagsCreateInputSchema, flagsUncheckedCreateInputSchema]),
		update: z.union([flagsUpdateInputSchema, flagsUncheckedUpdateInputSchema]),
	})
	.strict();

export default flagsUpsertArgsSchema;
