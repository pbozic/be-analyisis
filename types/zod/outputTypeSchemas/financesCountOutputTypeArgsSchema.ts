import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { financesCountOutputTypeSelectSchema } from './financesCountOutputTypeSelectSchema';

export const financesCountOutputTypeArgsSchema: z.ZodType<Prisma.financesCountOutputTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => financesCountOutputTypeSelectSchema).nullish(),
	})
	.strict();

export default financesCountOutputTypeSelectSchema;
