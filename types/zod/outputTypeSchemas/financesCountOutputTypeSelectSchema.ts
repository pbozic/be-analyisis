import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const financesCountOutputTypeSelectSchema: z.ZodType<Prisma.financesCountOutputTypeSelect> = z
	.object({
		business: z.boolean().optional(),
	})
	.strict();

export default financesCountOutputTypeSelectSchema;
