import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { lost_itemsWhereInputSchema } from './lost_itemsWhereInputSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { EnumLOST_FOUND_STATUSFilterSchema } from './EnumLOST_FOUND_STATUSFilterSchema';
import { LOST_FOUND_STATUSSchema } from './LOST_FOUND_STATUSSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DocumentsListRelationFilterSchema } from './DocumentsListRelationFilterSchema';
import { UsersNullableRelationFilterSchema } from './UsersNullableRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const lost_itemsWhereUniqueInputSchema: z.ZodType<Prisma.lost_itemsWhereUniqueInput> = z
	.object({
		lost_item_id: z.string().uuid(),
	})
	.and(
		z
			.object({
				lost_item_id: z.string().uuid().optional(),
				AND: z
					.union([z.lazy(() => lost_itemsWhereInputSchema), z.lazy(() => lost_itemsWhereInputSchema).array()])
					.optional(),
				OR: z
					.lazy(() => lost_itemsWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([z.lazy(() => lost_itemsWhereInputSchema), z.lazy(() => lost_itemsWhereInputSchema).array()])
					.optional(),
				user_id: z
					.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				status: z
					.union([z.lazy(() => EnumLOST_FOUND_STATUSFilterSchema), z.lazy(() => LOST_FOUND_STATUSSchema)])
					.optional(),
				description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				found: z
					.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
					.optional()
					.nullable(),
				created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				documents: z.lazy(() => DocumentsListRelationFilterSchema).optional(),
				user: z
					.union([z.lazy(() => UsersNullableRelationFilterSchema), z.lazy(() => usersWhereInputSchema)])
					.optional()
					.nullable(),
			})
			.strict()
	);

export default lost_itemsWhereUniqueInputSchema;
