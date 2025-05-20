import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { businessFindManyArgsSchema } from '../outputTypeSchemas/businessFindManyArgsSchema';
import { FinancesCountOutputTypeArgsSchema } from '../outputTypeSchemas/FinancesCountOutputTypeArgsSchema';

export const financesIncludeSchema: z.ZodType<Prisma.financesInclude> = z
	.object({
		business: z.union([z.boolean(), z.lazy(() => businessFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => FinancesCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export default financesIncludeSchema;
