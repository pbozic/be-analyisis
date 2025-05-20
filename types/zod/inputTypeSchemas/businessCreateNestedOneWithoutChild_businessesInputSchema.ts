import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutChild_businessesInputSchema } from './businessCreateWithoutChild_businessesInputSchema';
import { businessUncheckedCreateWithoutChild_businessesInputSchema } from './businessUncheckedCreateWithoutChild_businessesInputSchema';
import { businessCreateOrConnectWithoutChild_businessesInputSchema } from './businessCreateOrConnectWithoutChild_businessesInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedOneWithoutChild_businessesInputSchema: z.ZodType<Prisma.businessCreateNestedOneWithoutChild_businessesInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutChild_businessesInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutChild_businessesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutChild_businessesInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
		})
		.strict();

export default businessCreateNestedOneWithoutChild_businessesInputSchema;
