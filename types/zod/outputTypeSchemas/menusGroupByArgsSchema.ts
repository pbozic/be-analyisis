import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menusWhereInputSchema } from '../inputTypeSchemas/menusWhereInputSchema';
import { menusOrderByWithAggregationInputSchema } from '../inputTypeSchemas/menusOrderByWithAggregationInputSchema';
import { MenusScalarFieldEnumSchema } from '../inputTypeSchemas/MenusScalarFieldEnumSchema';
import { menusScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/menusScalarWhereWithAggregatesInputSchema';

export const menusGroupByArgsSchema: z.ZodType<Prisma.menusGroupByArgs> = z
	.object({
		where: menusWhereInputSchema.optional(),
		orderBy: z
			.union([menusOrderByWithAggregationInputSchema.array(), menusOrderByWithAggregationInputSchema])
			.optional(),
		by: MenusScalarFieldEnumSchema.array(),
		having: menusScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default menusGroupByArgsSchema;
