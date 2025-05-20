import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { allergensWhereInputSchema } from '../inputTypeSchemas/allergensWhereInputSchema';
import { allergensOrderByWithRelationInputSchema } from '../inputTypeSchemas/allergensOrderByWithRelationInputSchema';
import { allergensWhereUniqueInputSchema } from '../inputTypeSchemas/allergensWhereUniqueInputSchema';

export const allergensAggregateArgsSchema: z.ZodType<Prisma.allergensAggregateArgs> = z
	.object({
		where: allergensWhereInputSchema.optional(),
		orderBy: z
			.union([allergensOrderByWithRelationInputSchema.array(), allergensOrderByWithRelationInputSchema])
			.optional(),
		cursor: allergensWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default allergensAggregateArgsSchema;
