import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutWord_buysInputSchema } from './businessCreateWithoutWord_buysInputSchema';
import { businessUncheckedCreateWithoutWord_buysInputSchema } from './businessUncheckedCreateWithoutWord_buysInputSchema';
import { businessCreateOrConnectWithoutWord_buysInputSchema } from './businessCreateOrConnectWithoutWord_buysInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedOneWithoutWord_buysInputSchema: z.ZodType<Prisma.businessCreateNestedOneWithoutWord_buysInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutWord_buysInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutWord_buysInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutWord_buysInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
		})
		.strict();

export default businessCreateNestedOneWithoutWord_buysInputSchema;
