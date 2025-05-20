import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { businessFindManyArgsSchema } from '../outputTypeSchemas/businessFindManyArgsSchema';
import { Fiscal_devicesCountOutputTypeArgsSchema } from '../outputTypeSchemas/Fiscal_devicesCountOutputTypeArgsSchema';

export const fiscal_devicesIncludeSchema: z.ZodType<Prisma.fiscal_devicesInclude> = z
	.object({
		businesses: z.union([z.boolean(), z.lazy(() => businessFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => Fiscal_devicesCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export default fiscal_devicesIncludeSchema;
