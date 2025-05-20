import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BUSINESS_TYPESchema } from './BUSINESS_TYPESchema';
import { EnumBUSINESS_TYPEFieldUpdateOperationsInputSchema } from './EnumBUSINESS_TYPEFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const user_favorite_businessesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.user_favorite_businessesUncheckedUpdateManyInput> =
	z
		.object({
			user_favorite_businesses_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			user_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			business_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			business_type: z
				.union([
					z.lazy(() => BUSINESS_TYPESchema),
					z.lazy(() => EnumBUSINESS_TYPEFieldUpdateOperationsInputSchema),
				])
				.optional(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		})
		.strict();

export default user_favorite_businessesUncheckedUpdateManyInputSchema;
