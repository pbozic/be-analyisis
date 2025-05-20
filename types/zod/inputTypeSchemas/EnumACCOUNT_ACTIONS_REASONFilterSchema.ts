import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ACCOUNT_ACTIONS_REASONSchema } from './ACCOUNT_ACTIONS_REASONSchema';
import { NestedEnumACCOUNT_ACTIONS_REASONFilterSchema } from './NestedEnumACCOUNT_ACTIONS_REASONFilterSchema';

export const EnumACCOUNT_ACTIONS_REASONFilterSchema: z.ZodType<Prisma.EnumACCOUNT_ACTIONS_REASONFilter> = z
	.object({
		equals: z.lazy(() => ACCOUNT_ACTIONS_REASONSchema).optional(),
		in: z
			.lazy(() => ACCOUNT_ACTIONS_REASONSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => ACCOUNT_ACTIONS_REASONSchema)
			.array()
			.optional(),
		not: z
			.union([
				z.lazy(() => ACCOUNT_ACTIONS_REASONSchema),
				z.lazy(() => NestedEnumACCOUNT_ACTIONS_REASONFilterSchema),
			])
			.optional(),
	})
	.strict();

export default EnumACCOUNT_ACTIONS_REASONFilterSchema;
