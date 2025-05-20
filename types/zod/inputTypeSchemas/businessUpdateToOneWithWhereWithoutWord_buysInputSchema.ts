import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessUpdateWithoutWord_buysInputSchema } from './businessUpdateWithoutWord_buysInputSchema';
import { businessUncheckedUpdateWithoutWord_buysInputSchema } from './businessUncheckedUpdateWithoutWord_buysInputSchema';

export const businessUpdateToOneWithWhereWithoutWord_buysInputSchema: z.ZodType<Prisma.businessUpdateToOneWithWhereWithoutWord_buysInput> =
	z
		.object({
			where: z.lazy(() => businessWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => businessUpdateWithoutWord_buysInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutWord_buysInputSchema),
			]),
		})
		.strict();

export default businessUpdateToOneWithWhereWithoutWord_buysInputSchema;
