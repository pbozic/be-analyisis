import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { fiscal_devicesCreateWithoutBusinessesInputSchema } from './fiscal_devicesCreateWithoutBusinessesInputSchema';
import { fiscal_devicesUncheckedCreateWithoutBusinessesInputSchema } from './fiscal_devicesUncheckedCreateWithoutBusinessesInputSchema';
import { fiscal_devicesCreateOrConnectWithoutBusinessesInputSchema } from './fiscal_devicesCreateOrConnectWithoutBusinessesInputSchema';
import { fiscal_devicesWhereUniqueInputSchema } from './fiscal_devicesWhereUniqueInputSchema';

export const fiscal_devicesCreateNestedOneWithoutBusinessesInputSchema: z.ZodType<Prisma.fiscal_devicesCreateNestedOneWithoutBusinessesInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => fiscal_devicesCreateWithoutBusinessesInputSchema),
					z.lazy(() => fiscal_devicesUncheckedCreateWithoutBusinessesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => fiscal_devicesCreateOrConnectWithoutBusinessesInputSchema).optional(),
			connect: z.lazy(() => fiscal_devicesWhereUniqueInputSchema).optional(),
		})
		.strict();

export default fiscal_devicesCreateNestedOneWithoutBusinessesInputSchema;
