import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { fiscal_devicesUpdateWithoutBusinessesInputSchema } from './fiscal_devicesUpdateWithoutBusinessesInputSchema';
import { fiscal_devicesUncheckedUpdateWithoutBusinessesInputSchema } from './fiscal_devicesUncheckedUpdateWithoutBusinessesInputSchema';
import { fiscal_devicesCreateWithoutBusinessesInputSchema } from './fiscal_devicesCreateWithoutBusinessesInputSchema';
import { fiscal_devicesUncheckedCreateWithoutBusinessesInputSchema } from './fiscal_devicesUncheckedCreateWithoutBusinessesInputSchema';
import { fiscal_devicesWhereInputSchema } from './fiscal_devicesWhereInputSchema';

export const fiscal_devicesUpsertWithoutBusinessesInputSchema: z.ZodType<Prisma.fiscal_devicesUpsertWithoutBusinessesInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => fiscal_devicesUpdateWithoutBusinessesInputSchema),
				z.lazy(() => fiscal_devicesUncheckedUpdateWithoutBusinessesInputSchema),
			]),
			create: z.union([
				z.lazy(() => fiscal_devicesCreateWithoutBusinessesInputSchema),
				z.lazy(() => fiscal_devicesUncheckedCreateWithoutBusinessesInputSchema),
			]),
			where: z.lazy(() => fiscal_devicesWhereInputSchema).optional(),
		})
		.strict();

export default fiscal_devicesUpsertWithoutBusinessesInputSchema;
