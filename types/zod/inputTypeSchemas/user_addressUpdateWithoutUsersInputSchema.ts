import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { addressesUpdateOneRequiredWithoutUsersNestedInputSchema } from './addressesUpdateOneRequiredWithoutUsersNestedInputSchema';

export const user_addressUpdateWithoutUsersInputSchema: z.ZodType<Prisma.user_addressUpdateWithoutUsersInput> = z
	.object({
		name: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		icon: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		primary: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
		address: z.lazy(() => addressesUpdateOneRequiredWithoutUsersNestedInputSchema).optional(),
	})
	.strict();

export default user_addressUpdateWithoutUsersInputSchema;
