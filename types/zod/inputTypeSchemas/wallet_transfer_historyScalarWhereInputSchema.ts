import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const wallet_transfer_historyScalarWhereInputSchema: z.ZodType<Prisma.wallet_transfer_historyScalarWhereInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => wallet_transfer_historyScalarWhereInputSchema),
					z.lazy(() => wallet_transfer_historyScalarWhereInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => wallet_transfer_historyScalarWhereInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => wallet_transfer_historyScalarWhereInputSchema),
					z.lazy(() => wallet_transfer_historyScalarWhereInputSchema).array(),
				])
				.optional(),
			wallet_transfer_history_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
			order_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
			amount: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
			created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
			updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
			success: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		})
		.strict();

export default wallet_transfer_historyScalarWhereInputSchema;
