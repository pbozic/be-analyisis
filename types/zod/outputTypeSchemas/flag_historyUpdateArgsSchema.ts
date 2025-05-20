import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flag_historyIncludeSchema } from '../inputTypeSchemas/flag_historyIncludeSchema';
import { flag_historyUpdateInputSchema } from '../inputTypeSchemas/flag_historyUpdateInputSchema';
import { flag_historyUncheckedUpdateInputSchema } from '../inputTypeSchemas/flag_historyUncheckedUpdateInputSchema';
import { flag_historyWhereUniqueInputSchema } from '../inputTypeSchemas/flag_historyWhereUniqueInputSchema';
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

export const flag_historyUpdateArgsSchema: z.ZodType<Prisma.flag_historyUpdateArgs> = z
	.object({
		select: flag_historySelectSchema.optional(),
		include: flag_historyIncludeSchema.optional(),
		data: z.union([flag_historyUpdateInputSchema, flag_historyUncheckedUpdateInputSchema]),
		where: flag_historyWhereUniqueInputSchema,
	})
	.strict();

export default flag_historyUpdateArgsSchema;
