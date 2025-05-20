import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { financesWhereInputSchema } from '../inputTypeSchemas/financesWhereInputSchema';
import { financesOrderByWithRelationInputSchema } from '../inputTypeSchemas/financesOrderByWithRelationInputSchema';
import { financesWhereUniqueInputSchema } from '../inputTypeSchemas/financesWhereUniqueInputSchema';

export const financesAggregateArgsSchema: z.ZodType<Prisma.financesAggregateArgs> = z
	.object({
		where: financesWhereInputSchema.optional(),
		orderBy: z
			.union([financesOrderByWithRelationInputSchema.array(), financesOrderByWithRelationInputSchema])
			.optional(),
		cursor: financesWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default financesAggregateArgsSchema;
