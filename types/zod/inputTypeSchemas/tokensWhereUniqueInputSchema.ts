import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { tokensWhereInputSchema } from './tokensWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { EnumTokenTypeFilterSchema } from './EnumTokenTypeFilterSchema';
import { TokenTypeSchema } from './TokenTypeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { UsersRelationFilterSchema } from './UsersRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const tokensWhereUniqueInputSchema: z.ZodType<Prisma.tokensWhereUniqueInput> = z
	.union([
		z.object({
			token_id: z.string().uuid(),
			token: z.string(),
		}),
		z.object({
			token_id: z.string().uuid(),
		}),
		z.object({
			token: z.string(),
		}),
	])
	.and(
		z
			.object({
				token_id: z.string().uuid().optional(),
				token: z.string().optional(),
				AND: z
					.union([z.lazy(() => tokensWhereInputSchema), z.lazy(() => tokensWhereInputSchema).array()])
					.optional(),
				OR: z
					.lazy(() => tokensWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([z.lazy(() => tokensWhereInputSchema), z.lazy(() => tokensWhereInputSchema).array()])
					.optional(),
				user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
				type: z.union([z.lazy(() => EnumTokenTypeFilterSchema), z.lazy(() => TokenTypeSchema)]).optional(),
				expires_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				active: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
				users: z
					.union([z.lazy(() => UsersRelationFilterSchema), z.lazy(() => usersWhereInputSchema)])
					.optional(),
			})
			.strict()
	);

export default tokensWhereUniqueInputSchema;
