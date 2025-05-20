import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { EnumUSER_ROLESFilterSchema } from './EnumUSER_ROLESFilterSchema';
import { USER_ROLESSchema } from './USER_ROLESSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { UsersRelationFilterSchema } from './UsersRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const user_rolesWhereInputSchema: z.ZodType<Prisma.user_rolesWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => user_rolesWhereInputSchema), z.lazy(() => user_rolesWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => user_rolesWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => user_rolesWhereInputSchema), z.lazy(() => user_rolesWhereInputSchema).array()])
			.optional(),
		user_roles_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		role: z.union([z.lazy(() => EnumUSER_ROLESFilterSchema), z.lazy(() => USER_ROLESSchema)]).optional(),
		primary: z
			.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		user: z.union([z.lazy(() => UsersRelationFilterSchema), z.lazy(() => usersWhereInputSchema)]).optional(),
	})
	.strict();

export default user_rolesWhereInputSchema;
