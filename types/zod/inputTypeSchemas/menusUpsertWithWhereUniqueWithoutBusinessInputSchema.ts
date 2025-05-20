import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusWhereUniqueInputSchema } from './menusWhereUniqueInputSchema';
import { menusUpdateWithoutBusinessInputSchema } from './menusUpdateWithoutBusinessInputSchema';
import { menusUncheckedUpdateWithoutBusinessInputSchema } from './menusUncheckedUpdateWithoutBusinessInputSchema';
import { menusCreateWithoutBusinessInputSchema } from './menusCreateWithoutBusinessInputSchema';
import { menusUncheckedCreateWithoutBusinessInputSchema } from './menusUncheckedCreateWithoutBusinessInputSchema';

export const menusUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.menusUpsertWithWhereUniqueWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => menusWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => menusUpdateWithoutBusinessInputSchema),
				z.lazy(() => menusUncheckedUpdateWithoutBusinessInputSchema),
			]),
			create: z.union([
				z.lazy(() => menusCreateWithoutBusinessInputSchema),
				z.lazy(() => menusUncheckedCreateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default menusUpsertWithWhereUniqueWithoutBusinessInputSchema;
