import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { filesWhereInputSchema } from '../inputTypeSchemas/filesWhereInputSchema';
import { filesOrderByWithRelationInputSchema } from '../inputTypeSchemas/filesOrderByWithRelationInputSchema';
import { filesWhereUniqueInputSchema } from '../inputTypeSchemas/filesWhereUniqueInputSchema';

export const filesAggregateArgsSchema: z.ZodType<Prisma.filesAggregateArgs> = z
	.object({
		where: filesWhereInputSchema.optional(),
		orderBy: z.union([filesOrderByWithRelationInputSchema.array(), filesOrderByWithRelationInputSchema]).optional(),
		cursor: filesWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default filesAggregateArgsSchema;
