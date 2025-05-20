import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BUSINESS_TYPESchema } from './BUSINESS_TYPESchema';
import { EnumBUSINESS_TYPEFieldUpdateOperationsInputSchema } from './EnumBUSINESS_TYPEFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { usersUpdateOneRequiredWithoutUser_favorite_businessesNestedInputSchema } from './usersUpdateOneRequiredWithoutUser_favorite_businessesNestedInputSchema';

export const user_favorite_businessesUpdateWithoutBusinessesInputSchema: z.ZodType<Prisma.user_favorite_businessesUpdateWithoutBusinessesInput> =
	z
		.object({
			user_favorite_businesses_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			business_type: z
				.union([
					z.lazy(() => BUSINESS_TYPESchema),
					z.lazy(() => EnumBUSINESS_TYPEFieldUpdateOperationsInputSchema),
				])
				.optional(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			users: z.lazy(() => usersUpdateOneRequiredWithoutUser_favorite_businessesNestedInputSchema).optional(),
		})
		.strict();

export default user_favorite_businessesUpdateWithoutBusinessesInputSchema;
