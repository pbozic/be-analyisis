import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateWithoutFiscal_deviceInputSchema } from './businessUpdateWithoutFiscal_deviceInputSchema';
import { businessUncheckedUpdateWithoutFiscal_deviceInputSchema } from './businessUncheckedUpdateWithoutFiscal_deviceInputSchema';

export const businessUpdateWithWhereUniqueWithoutFiscal_deviceInputSchema: z.ZodType<Prisma.businessUpdateWithWhereUniqueWithoutFiscal_deviceInput> =
	z
		.object({
			where: z.lazy(() => businessWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => businessUpdateWithoutFiscal_deviceInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutFiscal_deviceInputSchema),
			]),
		})
		.strict();

export default businessUpdateWithWhereUniqueWithoutFiscal_deviceInputSchema;
