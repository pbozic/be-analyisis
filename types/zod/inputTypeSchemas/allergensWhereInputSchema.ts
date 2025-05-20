import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const allergensWhereInputSchema: z.ZodType<Prisma.allergensWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => allergensWhereInputSchema), z.lazy(() => allergensWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => allergensWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => allergensWhereInputSchema), z.lazy(() => allergensWhereInputSchema).array()])
			.optional(),
		allergen_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		description: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		code: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
	})
	.strict();

export default allergensWhereInputSchema;
