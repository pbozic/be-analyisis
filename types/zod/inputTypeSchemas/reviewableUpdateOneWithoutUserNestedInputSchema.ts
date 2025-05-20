import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewableCreateWithoutUserInputSchema } from './reviewableCreateWithoutUserInputSchema';
import { reviewableUncheckedCreateWithoutUserInputSchema } from './reviewableUncheckedCreateWithoutUserInputSchema';
import { reviewableCreateOrConnectWithoutUserInputSchema } from './reviewableCreateOrConnectWithoutUserInputSchema';
import { reviewableUpsertWithoutUserInputSchema } from './reviewableUpsertWithoutUserInputSchema';
import { reviewableWhereInputSchema } from './reviewableWhereInputSchema';
import { reviewableWhereUniqueInputSchema } from './reviewableWhereUniqueInputSchema';
import { reviewableUpdateToOneWithWhereWithoutUserInputSchema } from './reviewableUpdateToOneWithWhereWithoutUserInputSchema';
import { reviewableUpdateWithoutUserInputSchema } from './reviewableUpdateWithoutUserInputSchema';
import { reviewableUncheckedUpdateWithoutUserInputSchema } from './reviewableUncheckedUpdateWithoutUserInputSchema';

export const reviewableUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.reviewableUpdateOneWithoutUserNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => reviewableCreateWithoutUserInputSchema),
					z.lazy(() => reviewableUncheckedCreateWithoutUserInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => reviewableCreateOrConnectWithoutUserInputSchema).optional(),
			upsert: z.lazy(() => reviewableUpsertWithoutUserInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => reviewableWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => reviewableWhereInputSchema)]).optional(),
			connect: z.lazy(() => reviewableWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => reviewableUpdateToOneWithWhereWithoutUserInputSchema),
					z.lazy(() => reviewableUpdateWithoutUserInputSchema),
					z.lazy(() => reviewableUncheckedUpdateWithoutUserInputSchema),
				])
				.optional(),
		})
		.strict();

export default reviewableUpdateOneWithoutUserNestedInputSchema;
