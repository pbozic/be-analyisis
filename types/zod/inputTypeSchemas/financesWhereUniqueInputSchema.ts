import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { financesWhereInputSchema } from './financesWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BusinessListRelationFilterSchema } from './BusinessListRelationFilterSchema';

export const financesWhereUniqueInputSchema: z.ZodType<Prisma.financesWhereUniqueInput> = z
	.object({
		finance_id: z.string().uuid(),
	})
	.and(
		z
			.object({
				finance_id: z.string().uuid().optional(),
				account_number: z.string().optional(),
				AND: z
					.union([z.lazy(() => financesWhereInputSchema), z.lazy(() => financesWhereInputSchema).array()])
					.optional(),
				OR: z
					.lazy(() => financesWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([z.lazy(() => financesWhereInputSchema), z.lazy(() => financesWhereInputSchema).array()])
					.optional(),
				bank_name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				account_holder: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				payment_preferences: z.lazy(() => JsonFilterSchema).optional(),
				created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				business: z.lazy(() => BusinessListRelationFilterSchema).optional(),
			})
			.strict()
	);

export default financesWhereUniqueInputSchema;
