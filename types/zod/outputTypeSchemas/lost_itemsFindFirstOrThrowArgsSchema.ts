import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { lost_itemsIncludeSchema } from '../inputTypeSchemas/lost_itemsIncludeSchema';
import { lost_itemsWhereInputSchema } from '../inputTypeSchemas/lost_itemsWhereInputSchema';
import { lost_itemsOrderByWithRelationInputSchema } from '../inputTypeSchemas/lost_itemsOrderByWithRelationInputSchema';
import { lost_itemsWhereUniqueInputSchema } from '../inputTypeSchemas/lost_itemsWhereUniqueInputSchema';
import { Lost_itemsScalarFieldEnumSchema } from '../inputTypeSchemas/Lost_itemsScalarFieldEnumSchema';
import { documentsFindManyArgsSchema } from '../outputTypeSchemas/documentsFindManyArgsSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { Lost_itemsCountOutputTypeArgsSchema } from '../outputTypeSchemas/Lost_itemsCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const lost_itemsSelectSchema: z.ZodType<Prisma.lost_itemsSelect> = z
	.object({
		lost_item_id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		status: z.boolean().optional(),
		description: z.boolean().optional(),
		found: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		documents: z.union([z.boolean(), z.lazy(() => documentsFindManyArgsSchema)]).optional(),
		user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => Lost_itemsCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const lost_itemsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.lost_itemsFindFirstOrThrowArgs> = z
	.object({
		select: lost_itemsSelectSchema.optional(),
		include: lost_itemsIncludeSchema.optional(),
		where: lost_itemsWhereInputSchema.optional(),
		orderBy: z
			.union([lost_itemsOrderByWithRelationInputSchema.array(), lost_itemsOrderByWithRelationInputSchema])
			.optional(),
		cursor: lost_itemsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([Lost_itemsScalarFieldEnumSchema, Lost_itemsScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();

export default lost_itemsFindFirstOrThrowArgsSchema;
