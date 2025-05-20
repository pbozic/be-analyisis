import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { usersUpdateOneRequiredWithoutAddressesNestedInputSchema } from './usersUpdateOneRequiredWithoutAddressesNestedInputSchema';

export const user_addressUpdateWithoutAddressInputSchema: z.ZodType<Prisma.user_addressUpdateWithoutAddressInput> = z
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
		users: z.lazy(() => usersUpdateOneRequiredWithoutAddressesNestedInputSchema).optional(),
	})
	.strict();

export default user_addressUpdateWithoutAddressInputSchema;
