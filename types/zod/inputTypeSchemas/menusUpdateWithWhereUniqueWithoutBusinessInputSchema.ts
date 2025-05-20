import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusWhereUniqueInputSchema } from './menusWhereUniqueInputSchema';
import { menusUpdateWithoutBusinessInputSchema } from './menusUpdateWithoutBusinessInputSchema';
import { menusUncheckedUpdateWithoutBusinessInputSchema } from './menusUncheckedUpdateWithoutBusinessInputSchema';

export const menusUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.menusUpdateWithWhereUniqueWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => menusWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => menusUpdateWithoutBusinessInputSchema),
				z.lazy(() => menusUncheckedUpdateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default menusUpdateWithWhereUniqueWithoutBusinessInputSchema;
