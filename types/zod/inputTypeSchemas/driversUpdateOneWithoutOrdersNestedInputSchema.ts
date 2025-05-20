import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutOrdersInputSchema } from './driversCreateWithoutOrdersInputSchema';
import { driversUncheckedCreateWithoutOrdersInputSchema } from './driversUncheckedCreateWithoutOrdersInputSchema';
import { driversCreateOrConnectWithoutOrdersInputSchema } from './driversCreateOrConnectWithoutOrdersInputSchema';
import { driversUpsertWithoutOrdersInputSchema } from './driversUpsertWithoutOrdersInputSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversUpdateToOneWithWhereWithoutOrdersInputSchema } from './driversUpdateToOneWithWhereWithoutOrdersInputSchema';
import { driversUpdateWithoutOrdersInputSchema } from './driversUpdateWithoutOrdersInputSchema';
import { driversUncheckedUpdateWithoutOrdersInputSchema } from './driversUncheckedUpdateWithoutOrdersInputSchema';

export const driversUpdateOneWithoutOrdersNestedInputSchema: z.ZodType<Prisma.driversUpdateOneWithoutOrdersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => driversCreateWithoutOrdersInputSchema),
					z.lazy(() => driversUncheckedCreateWithoutOrdersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutOrdersInputSchema).optional(),
			upsert: z.lazy(() => driversUpsertWithoutOrdersInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => driversWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => driversWhereInputSchema)]).optional(),
			connect: z.lazy(() => driversWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => driversUpdateToOneWithWhereWithoutOrdersInputSchema),
					z.lazy(() => driversUpdateWithoutOrdersInputSchema),
					z.lazy(() => driversUncheckedUpdateWithoutOrdersInputSchema),
				])
				.optional(),
		})
		.strict();

export default driversUpdateOneWithoutOrdersNestedInputSchema;
