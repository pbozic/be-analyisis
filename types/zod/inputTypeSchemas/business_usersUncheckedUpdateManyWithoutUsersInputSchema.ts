import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema';
import { COMPANY_ROLESchema } from './COMPANY_ROLESchema';
import { EnumCOMPANY_ROLEFieldUpdateOperationsInputSchema } from './EnumCOMPANY_ROLEFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';

export const business_usersUncheckedUpdateManyWithoutUsersInputSchema: z.ZodType<Prisma.business_usersUncheckedUpdateManyWithoutUsersInput> =
	z
		.object({
			business_users_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			online: z
				.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			company_role: z
				.union([
					z.lazy(() => COMPANY_ROLESchema),
					z.lazy(() => EnumCOMPANY_ROLEFieldUpdateOperationsInputSchema),
				])
				.optional(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			business_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			operating_address_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
		})
		.strict();

export default business_usersUncheckedUpdateManyWithoutUsersInputSchema;
