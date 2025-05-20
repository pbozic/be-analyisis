import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { lost_itemsWhereUniqueInputSchema } from './lost_itemsWhereUniqueInputSchema';
import { lost_itemsUpdateWithoutUserInputSchema } from './lost_itemsUpdateWithoutUserInputSchema';
import { lost_itemsUncheckedUpdateWithoutUserInputSchema } from './lost_itemsUncheckedUpdateWithoutUserInputSchema';
import { lost_itemsCreateWithoutUserInputSchema } from './lost_itemsCreateWithoutUserInputSchema';
import { lost_itemsUncheckedCreateWithoutUserInputSchema } from './lost_itemsUncheckedCreateWithoutUserInputSchema';

export const lost_itemsUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.lost_itemsUpsertWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => lost_itemsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => lost_itemsUpdateWithoutUserInputSchema),
				z.lazy(() => lost_itemsUncheckedUpdateWithoutUserInputSchema),
			]),
			create: z.union([
				z.lazy(() => lost_itemsCreateWithoutUserInputSchema),
				z.lazy(() => lost_itemsUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default lost_itemsUpsertWithWhereUniqueWithoutUserInputSchema;
