import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { fiscal_devicesIncludeSchema } from '../inputTypeSchemas/fiscal_devicesIncludeSchema';
import { fiscal_devicesWhereUniqueInputSchema } from '../inputTypeSchemas/fiscal_devicesWhereUniqueInputSchema';
import { businessFindManyArgsSchema } from '../outputTypeSchemas/businessFindManyArgsSchema';
import { Fiscal_devicesCountOutputTypeArgsSchema } from '../outputTypeSchemas/Fiscal_devicesCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const fiscal_devicesSelectSchema: z.ZodType<Prisma.fiscal_devicesSelect> = z
	.object({
		fiscal_devices_id: z.boolean().optional(),
		name: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		businesses: z.union([z.boolean(), z.lazy(() => businessFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => Fiscal_devicesCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const fiscal_devicesFindUniqueArgsSchema: z.ZodType<Prisma.fiscal_devicesFindUniqueArgs> = z
	.object({
		select: fiscal_devicesSelectSchema.optional(),
		include: fiscal_devicesIncludeSchema.optional(),
		where: fiscal_devicesWhereUniqueInputSchema,
	})
	.strict();

export default fiscal_devicesFindUniqueArgsSchema;
