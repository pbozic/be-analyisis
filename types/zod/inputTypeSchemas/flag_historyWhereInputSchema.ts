import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { FlagsRelationFilterSchema } from './FlagsRelationFilterSchema';
import { flagsWhereInputSchema } from './flagsWhereInputSchema';
import { UsersRelationFilterSchema } from './UsersRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const flag_historyWhereInputSchema: z.ZodType<Prisma.flag_historyWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => flag_historyWhereInputSchema), z.lazy(() => flag_historyWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => flag_historyWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => flag_historyWhereInputSchema), z.lazy(() => flag_historyWhereInputSchema).array()])
			.optional(),
		flag_history_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		flag_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		status: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		flag: z.union([z.lazy(() => FlagsRelationFilterSchema), z.lazy(() => flagsWhereInputSchema)]).optional(),
		user: z.union([z.lazy(() => UsersRelationFilterSchema), z.lazy(() => usersWhereInputSchema)]).optional(),
	})
	.strict();

export default flag_historyWhereInputSchema;
