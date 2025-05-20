import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehiclesCountOutputTypeSelectSchema } from './vehiclesCountOutputTypeSelectSchema';

export const vehiclesCountOutputTypeArgsSchema: z.ZodType<Prisma.vehiclesCountOutputTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => vehiclesCountOutputTypeSelectSchema).nullish(),
	})
	.strict();

export default vehiclesCountOutputTypeSelectSchema;
