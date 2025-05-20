import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { fiscal_devicesIncludeSchema } from '../inputTypeSchemas/fiscal_devicesIncludeSchema';
import { fiscal_devicesCreateInputSchema } from '../inputTypeSchemas/fiscal_devicesCreateInputSchema';
import { fiscal_devicesUncheckedCreateInputSchema } from '../inputTypeSchemas/fiscal_devicesUncheckedCreateInputSchema';
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

export const fiscal_devicesCreateArgsSchema: z.ZodType<Prisma.fiscal_devicesCreateArgs> = z
	.object({
		select: fiscal_devicesSelectSchema.optional(),
		include: fiscal_devicesIncludeSchema.optional(),
		data: z.union([fiscal_devicesCreateInputSchema, fiscal_devicesUncheckedCreateInputSchema]),
	})
	.strict();

export default fiscal_devicesCreateArgsSchema;
