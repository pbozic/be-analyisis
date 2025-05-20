import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUncheckedCreateNestedManyWithoutFiscal_deviceInputSchema } from './businessUncheckedCreateNestedManyWithoutFiscal_deviceInputSchema';

export const fiscal_devicesUncheckedCreateInputSchema: z.ZodType<Prisma.fiscal_devicesUncheckedCreateInput> = z
	.object({
		fiscal_devices_id: z.string().uuid().optional(),
		name: z.string(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		businesses: z.lazy(() => businessUncheckedCreateNestedManyWithoutFiscal_deviceInputSchema).optional(),
	})
	.strict();

export default fiscal_devicesUncheckedCreateInputSchema;
