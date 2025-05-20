import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const fiscal_devicesCreateWithoutBusinessesInputSchema: z.ZodType<Prisma.fiscal_devicesCreateWithoutBusinessesInput> =
	z
		.object({
			fiscal_devices_id: z.string().uuid().optional(),
			name: z.string(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
		})
		.strict();

export default fiscal_devicesCreateWithoutBusinessesInputSchema;
