import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RESERVATION_STATUSSchema } from './RESERVATION_STATUSSchema';
import { EnumRESERVATION_STATUSFieldUpdateOperationsInputSchema } from './EnumRESERVATION_STATUSFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { businessUpdateOneRequiredWithoutReservationsNestedInputSchema } from './businessUpdateOneRequiredWithoutReservationsNestedInputSchema';
import { usersUpdateOneRequiredWithoutReservationsNestedInputSchema } from './usersUpdateOneRequiredWithoutReservationsNestedInputSchema';

export const reservationsUpdateInputSchema: z.ZodType<Prisma.reservationsUpdateInput> = z
	.object({
		reservation_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		seats: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
		date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		time: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		datetime: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		status: z
			.union([
				z.lazy(() => RESERVATION_STATUSSchema),
				z.lazy(() => EnumRESERVATION_STATUSFieldUpdateOperationsInputSchema),
			])
			.optional(),
		table: z
			.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		business: z.lazy(() => businessUpdateOneRequiredWithoutReservationsNestedInputSchema).optional(),
		user: z.lazy(() => usersUpdateOneRequiredWithoutReservationsNestedInputSchema).optional(),
	})
	.strict();

export default reservationsUpdateInputSchema;
