import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_addressWhereUniqueInputSchema } from './user_addressWhereUniqueInputSchema';
import { user_addressUpdateWithoutAddressInputSchema } from './user_addressUpdateWithoutAddressInputSchema';
import { user_addressUncheckedUpdateWithoutAddressInputSchema } from './user_addressUncheckedUpdateWithoutAddressInputSchema';

export const user_addressUpdateWithWhereUniqueWithoutAddressInputSchema: z.ZodType<Prisma.user_addressUpdateWithWhereUniqueWithoutAddressInput> =
	z
		.object({
			where: z.lazy(() => user_addressWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => user_addressUpdateWithoutAddressInputSchema),
				z.lazy(() => user_addressUncheckedUpdateWithoutAddressInputSchema),
			]),
		})
		.strict();

export default user_addressUpdateWithWhereUniqueWithoutAddressInputSchema;
