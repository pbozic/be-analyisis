import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_buyWhereInputSchema } from './word_buyWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { WordsRelationFilterSchema } from './WordsRelationFilterSchema';
import { wordsWhereInputSchema } from './wordsWhereInputSchema';
import { BusinessRelationFilterSchema } from './BusinessRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const word_buyWhereUniqueInputSchema: z.ZodType<Prisma.word_buyWhereUniqueInput> = z
	.object({
		word_buy_id: z.string().uuid(),
	})
	.and(
		z
			.object({
				word_buy_id: z.string().uuid().optional(),
				AND: z
					.union([z.lazy(() => word_buyWhereInputSchema), z.lazy(() => word_buyWhereInputSchema).array()])
					.optional(),
				OR: z
					.lazy(() => word_buyWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([z.lazy(() => word_buyWhereInputSchema), z.lazy(() => word_buyWhereInputSchema).array()])
					.optional(),
				word_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
				stripe_subscription_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				price: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
				active_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				expires_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				business_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
				created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				deleted_at: z
					.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
					.optional()
					.nullable(),
				word: z
					.union([z.lazy(() => WordsRelationFilterSchema), z.lazy(() => wordsWhereInputSchema)])
					.optional(),
				business: z
					.union([z.lazy(() => BusinessRelationFilterSchema), z.lazy(() => businessWhereInputSchema)])
					.optional(),
			})
			.strict()
	);

export default word_buyWhereUniqueInputSchema;
