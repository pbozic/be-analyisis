import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutOrdersInputSchema } from './driversCreateWithoutOrdersInputSchema';
import { driversUncheckedCreateWithoutOrdersInputSchema } from './driversUncheckedCreateWithoutOrdersInputSchema';
import { driversCreateOrConnectWithoutOrdersInputSchema } from './driversCreateOrConnectWithoutOrdersInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';

export const driversCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.driversCreateNestedOneWithoutOrdersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => driversCreateWithoutOrdersInputSchema),
					z.lazy(() => driversUncheckedCreateWithoutOrdersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutOrdersInputSchema).optional(),
			connect: z.lazy(() => driversWhereUniqueInputSchema).optional(),
		})
		.strict();

export default driversCreateNestedOneWithoutOrdersInputSchema;
