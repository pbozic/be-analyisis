import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { fiscal_devicesCreateWithoutBusinessesInputSchema } from './fiscal_devicesCreateWithoutBusinessesInputSchema';
import { fiscal_devicesUncheckedCreateWithoutBusinessesInputSchema } from './fiscal_devicesUncheckedCreateWithoutBusinessesInputSchema';
import { fiscal_devicesCreateOrConnectWithoutBusinessesInputSchema } from './fiscal_devicesCreateOrConnectWithoutBusinessesInputSchema';
import { fiscal_devicesUpsertWithoutBusinessesInputSchema } from './fiscal_devicesUpsertWithoutBusinessesInputSchema';
import { fiscal_devicesWhereInputSchema } from './fiscal_devicesWhereInputSchema';
import { fiscal_devicesWhereUniqueInputSchema } from './fiscal_devicesWhereUniqueInputSchema';
import { fiscal_devicesUpdateToOneWithWhereWithoutBusinessesInputSchema } from './fiscal_devicesUpdateToOneWithWhereWithoutBusinessesInputSchema';
import { fiscal_devicesUpdateWithoutBusinessesInputSchema } from './fiscal_devicesUpdateWithoutBusinessesInputSchema';
import { fiscal_devicesUncheckedUpdateWithoutBusinessesInputSchema } from './fiscal_devicesUncheckedUpdateWithoutBusinessesInputSchema';

export const fiscal_devicesUpdateOneWithoutBusinessesNestedInputSchema: z.ZodType<Prisma.fiscal_devicesUpdateOneWithoutBusinessesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => fiscal_devicesCreateWithoutBusinessesInputSchema),
					z.lazy(() => fiscal_devicesUncheckedCreateWithoutBusinessesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => fiscal_devicesCreateOrConnectWithoutBusinessesInputSchema).optional(),
			upsert: z.lazy(() => fiscal_devicesUpsertWithoutBusinessesInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => fiscal_devicesWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => fiscal_devicesWhereInputSchema)]).optional(),
			connect: z.lazy(() => fiscal_devicesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => fiscal_devicesUpdateToOneWithWhereWithoutBusinessesInputSchema),
					z.lazy(() => fiscal_devicesUpdateWithoutBusinessesInputSchema),
					z.lazy(() => fiscal_devicesUncheckedUpdateWithoutBusinessesInputSchema),
				])
				.optional(),
		})
		.strict();

export default fiscal_devicesUpdateOneWithoutBusinessesNestedInputSchema;
