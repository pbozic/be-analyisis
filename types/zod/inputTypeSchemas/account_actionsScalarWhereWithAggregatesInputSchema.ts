import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { EnumACCOUNT_ACTIONS_REASONWithAggregatesFilterSchema } from './EnumACCOUNT_ACTIONS_REASONWithAggregatesFilterSchema';
import { ACCOUNT_ACTIONS_REASONSchema } from './ACCOUNT_ACTIONS_REASONSchema';
import { EnumACCOUNT_ACTIONSWithAggregatesFilterSchema } from './EnumACCOUNT_ACTIONSWithAggregatesFilterSchema';
import { ACCOUNT_ACTIONSSchema } from './ACCOUNT_ACTIONSSchema';

export const account_actionsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.account_actionsScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => account_actionsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => account_actionsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => account_actionsScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => account_actionsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => account_actionsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			account_action_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			business_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			user_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			action_creator_user_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			reason: z
				.union([
					z.lazy(() => EnumACCOUNT_ACTIONS_REASONWithAggregatesFilterSchema),
					z.lazy(() => ACCOUNT_ACTIONS_REASONSchema),
				])
				.optional(),
			action: z
				.union([
					z.lazy(() => EnumACCOUNT_ACTIONSWithAggregatesFilterSchema),
					z.lazy(() => ACCOUNT_ACTIONSSchema),
				])
				.optional(),
		})
		.strict();

export default account_actionsScalarWhereWithAggregatesInputSchema;
