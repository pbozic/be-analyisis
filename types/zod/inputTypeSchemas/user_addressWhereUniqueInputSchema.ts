import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_addressUser_idAddress_idCompoundUniqueInputSchema } from './user_addressUser_idAddress_idCompoundUniqueInputSchema';
import { user_addressWhereInputSchema } from './user_addressWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { UsersRelationFilterSchema } from './UsersRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { AddressesRelationFilterSchema } from './AddressesRelationFilterSchema';
import { addressesWhereInputSchema } from './addressesWhereInputSchema';

export const user_addressWhereUniqueInputSchema: z.ZodType<Prisma.user_addressWhereUniqueInput> = z
	.object({
		user_id_address_id: z.lazy(() => user_addressUser_idAddress_idCompoundUniqueInputSchema),
	})
	.and(
		z
			.object({
				user_id_address_id: z.lazy(() => user_addressUser_idAddress_idCompoundUniqueInputSchema).optional(),
				AND: z
					.union([
						z.lazy(() => user_addressWhereInputSchema),
						z.lazy(() => user_addressWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => user_addressWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => user_addressWhereInputSchema),
						z.lazy(() => user_addressWhereInputSchema).array(),
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
				users: z
					.union([z.lazy(() => UsersRelationFilterSchema), z.lazy(() => usersWhereInputSchema)])
					.optional(),
				address: z
					.union([z.lazy(() => AddressesRelationFilterSchema), z.lazy(() => addressesWhereInputSchema)])
					.optional(),
			})
			.strict()
	);

export default user_addressWhereUniqueInputSchema;
