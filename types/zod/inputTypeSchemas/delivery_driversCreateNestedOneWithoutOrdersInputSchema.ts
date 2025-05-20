import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversCreateWithoutOrdersInputSchema } from './delivery_driversCreateWithoutOrdersInputSchema';
import { delivery_driversUncheckedCreateWithoutOrdersInputSchema } from './delivery_driversUncheckedCreateWithoutOrdersInputSchema';
import { delivery_driversCreateOrConnectWithoutOrdersInputSchema } from './delivery_driversCreateOrConnectWithoutOrdersInputSchema';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';

export const delivery_driversCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.delivery_driversCreateNestedOneWithoutOrdersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_driversCreateWithoutOrdersInputSchema),
					z.lazy(() => delivery_driversUncheckedCreateWithoutOrdersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => delivery_driversCreateOrConnectWithoutOrdersInputSchema).optional(),
			connect: z.lazy(() => delivery_driversWhereUniqueInputSchema).optional(),
		})
		.strict();

export default delivery_driversCreateNestedOneWithoutOrdersInputSchema;
