import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateWithoutAddressInputSchema } from './businessUpdateWithoutAddressInputSchema';
import { businessUncheckedUpdateWithoutAddressInputSchema } from './businessUncheckedUpdateWithoutAddressInputSchema';

export const businessUpdateWithWhereUniqueWithoutAddressInputSchema: z.ZodType<Prisma.businessUpdateWithWhereUniqueWithoutAddressInput> =
	z
		.object({
			where: z.lazy(() => businessWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => businessUpdateWithoutAddressInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutAddressInputSchema),
			]),
		})
		.strict();

export default businessUpdateWithWhereUniqueWithoutAddressInputSchema;
