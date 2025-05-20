import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { businessUpdateManyWithoutFiscal_deviceNestedInputSchema } from './businessUpdateManyWithoutFiscal_deviceNestedInputSchema';

export const fiscal_devicesUpdateInputSchema: z.ZodType<Prisma.fiscal_devicesUpdateInput> = z
	.object({
		fiscal_devices_id: z
			.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		businesses: z.lazy(() => businessUpdateManyWithoutFiscal_deviceNestedInputSchema).optional(),
	})
	.strict();

export default fiscal_devicesUpdateInputSchema;
