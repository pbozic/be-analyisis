import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversCreateWithoutOrdersInputSchema } from './delivery_driversCreateWithoutOrdersInputSchema';
import { delivery_driversUncheckedCreateWithoutOrdersInputSchema } from './delivery_driversUncheckedCreateWithoutOrdersInputSchema';
import { delivery_driversCreateOrConnectWithoutOrdersInputSchema } from './delivery_driversCreateOrConnectWithoutOrdersInputSchema';
import { delivery_driversUpsertWithoutOrdersInputSchema } from './delivery_driversUpsertWithoutOrdersInputSchema';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';
import { delivery_driversUpdateToOneWithWhereWithoutOrdersInputSchema } from './delivery_driversUpdateToOneWithWhereWithoutOrdersInputSchema';
import { delivery_driversUpdateWithoutOrdersInputSchema } from './delivery_driversUpdateWithoutOrdersInputSchema';
import { delivery_driversUncheckedUpdateWithoutOrdersInputSchema } from './delivery_driversUncheckedUpdateWithoutOrdersInputSchema';

export const delivery_driversUpdateOneWithoutOrdersNestedInputSchema: z.ZodType<Prisma.delivery_driversUpdateOneWithoutOrdersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_driversCreateWithoutOrdersInputSchema),
					z.lazy(() => delivery_driversUncheckedCreateWithoutOrdersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => delivery_driversCreateOrConnectWithoutOrdersInputSchema).optional(),
			upsert: z.lazy(() => delivery_driversUpsertWithoutOrdersInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => delivery_driversWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => delivery_driversWhereInputSchema)]).optional(),
			connect: z.lazy(() => delivery_driversWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => delivery_driversUpdateToOneWithWhereWithoutOrdersInputSchema),
					z.lazy(() => delivery_driversUpdateWithoutOrdersInputSchema),
					z.lazy(() => delivery_driversUncheckedUpdateWithoutOrdersInputSchema),
				])
				.optional(),
		})
		.strict();

export default delivery_driversUpdateOneWithoutOrdersNestedInputSchema;
