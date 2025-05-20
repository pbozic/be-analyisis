import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { lost_itemsWhereUniqueInputSchema } from './lost_itemsWhereUniqueInputSchema';
import { lost_itemsUpdateWithoutUserInputSchema } from './lost_itemsUpdateWithoutUserInputSchema';
import { lost_itemsUncheckedUpdateWithoutUserInputSchema } from './lost_itemsUncheckedUpdateWithoutUserInputSchema';

export const lost_itemsUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.lost_itemsUpdateWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => lost_itemsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => lost_itemsUpdateWithoutUserInputSchema),
				z.lazy(() => lost_itemsUncheckedUpdateWithoutUserInputSchema),
			]),
		})
		.strict();

export default lost_itemsUpdateWithWhereUniqueWithoutUserInputSchema;
