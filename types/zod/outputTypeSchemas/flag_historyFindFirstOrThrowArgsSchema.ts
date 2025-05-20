import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flag_historyIncludeSchema } from '../inputTypeSchemas/flag_historyIncludeSchema';
import { flag_historyWhereInputSchema } from '../inputTypeSchemas/flag_historyWhereInputSchema';
import { flag_historyOrderByWithRelationInputSchema } from '../inputTypeSchemas/flag_historyOrderByWithRelationInputSchema';
import { flag_historyWhereUniqueInputSchema } from '../inputTypeSchemas/flag_historyWhereUniqueInputSchema';
import { Flag_historyScalarFieldEnumSchema } from '../inputTypeSchemas/Flag_historyScalarFieldEnumSchema';
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

export const flag_historyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.flag_historyFindFirstOrThrowArgs> = z
	.object({
		select: flag_historySelectSchema.optional(),
		include: flag_historyIncludeSchema.optional(),
		where: flag_historyWhereInputSchema.optional(),
		orderBy: z
			.union([flag_historyOrderByWithRelationInputSchema.array(), flag_historyOrderByWithRelationInputSchema])
			.optional(),
		cursor: flag_historyWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([Flag_historyScalarFieldEnumSchema, Flag_historyScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();

export default flag_historyFindFirstOrThrowArgsSchema;
