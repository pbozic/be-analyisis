import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateNestedManyWithoutFiscal_deviceInputSchema } from './businessCreateNestedManyWithoutFiscal_deviceInputSchema';

export const fiscal_devicesCreateInputSchema: z.ZodType<Prisma.fiscal_devicesCreateInput> = z
	.object({
		fiscal_devices_id: z.string().uuid().optional(),
		name: z.string(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		businesses: z.lazy(() => businessCreateNestedManyWithoutFiscal_deviceInputSchema).optional(),
	})
	.strict();

export default fiscal_devicesCreateInputSchema;
