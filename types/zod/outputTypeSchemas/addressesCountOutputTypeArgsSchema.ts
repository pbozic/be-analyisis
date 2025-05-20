import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { addressesCountOutputTypeSelectSchema } from './addressesCountOutputTypeSelectSchema';

export const addressesCountOutputTypeArgsSchema: z.ZodType<Prisma.addressesCountOutputTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => addressesCountOutputTypeSelectSchema).nullish(),
	})
	.strict();

export default addressesCountOutputTypeSelectSchema;
