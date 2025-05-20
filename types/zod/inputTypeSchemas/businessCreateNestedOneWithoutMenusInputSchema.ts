import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutMenusInputSchema } from './businessCreateWithoutMenusInputSchema';
import { businessUncheckedCreateWithoutMenusInputSchema } from './businessUncheckedCreateWithoutMenusInputSchema';
import { businessCreateOrConnectWithoutMenusInputSchema } from './businessCreateOrConnectWithoutMenusInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedOneWithoutMenusInputSchema: z.ZodType<Prisma.businessCreateNestedOneWithoutMenusInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutMenusInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutMenusInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutMenusInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
		})
		.strict();

export default businessCreateNestedOneWithoutMenusInputSchema;
