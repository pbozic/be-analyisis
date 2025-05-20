import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const user_addressScalarWhereInputSchema: z.ZodType<Prisma.user_addressScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => user_addressScalarWhereInputSchema),
				z.lazy(() => user_addressScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => user_addressScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => user_addressScalarWhereInputSchema),
				z.lazy(() => user_addressScalarWhereInputSchema).array(),
			])
			.optional(),
		user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		address_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		name: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		icon: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		primary: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
	})
	.strict();

export default user_addressScalarWhereInputSchema;
