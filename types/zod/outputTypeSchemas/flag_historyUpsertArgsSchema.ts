import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flag_historyIncludeSchema } from '../inputTypeSchemas/flag_historyIncludeSchema';
import { flag_historyWhereUniqueInputSchema } from '../inputTypeSchemas/flag_historyWhereUniqueInputSchema';
import { flag_historyCreateInputSchema } from '../inputTypeSchemas/flag_historyCreateInputSchema';
import { flag_historyUncheckedCreateInputSchema } from '../inputTypeSchemas/flag_historyUncheckedCreateInputSchema';
import { flag_historyUpdateInputSchema } from '../inputTypeSchemas/flag_historyUpdateInputSchema';
import { flag_historyUncheckedUpdateInputSchema } from '../inputTypeSchemas/flag_historyUncheckedUpdateInputSchema';
import { flagsArgsSchema } from '../outputTypeSchemas/flagsArgsSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const flag_historySelectSchema: z.ZodType<Prisma.flag_historySelect> = z
	.object({
		flag_history_id: z.boolean().optional(),
		flag_id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		status: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		flag: z.union([z.boolean(), z.lazy(() => flagsArgsSchema)]).optional(),
		user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
	})
	.strict();

export const flag_historyUpsertArgsSchema: z.ZodType<Prisma.flag_historyUpsertArgs> = z
	.object({
		select: flag_historySelectSchema.optional(),
		include: flag_historyIncludeSchema.optional(),
		where: flag_historyWhereUniqueInputSchema,
		create: z.union([flag_historyCreateInputSchema, flag_historyUncheckedCreateInputSchema]),
		update: z.union([flag_historyUpdateInputSchema, flag_historyUncheckedUpdateInputSchema]),
	})
	.strict();

export default flag_historyUpsertArgsSchema;
