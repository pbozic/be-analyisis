import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_addressScalarWhereInputSchema } from './user_addressScalarWhereInputSchema';
import { user_addressUpdateManyMutationInputSchema } from './user_addressUpdateManyMutationInputSchema';
import { user_addressUncheckedUpdateManyWithoutAddressInputSchema } from './user_addressUncheckedUpdateManyWithoutAddressInputSchema';

export const user_addressUpdateManyWithWhereWithoutAddressInputSchema: z.ZodType<Prisma.user_addressUpdateManyWithWhereWithoutAddressInput> =
	z
		.object({
			where: z.lazy(() => user_addressScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => user_addressUpdateManyMutationInputSchema),
				z.lazy(() => user_addressUncheckedUpdateManyWithoutAddressInputSchema),
			]),
		})
		.strict();

export default user_addressUpdateManyWithWhereWithoutAddressInputSchema;
