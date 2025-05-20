import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { addressesSelectSchema } from '../inputTypeSchemas/addressesSelectSchema';
import { addressesIncludeSchema } from '../inputTypeSchemas/addressesIncludeSchema';

export const addressesArgsSchema: z.ZodType<Prisma.addressesDefaultArgs> = z
	.object({
		select: z.lazy(() => addressesSelectSchema).optional(),
		include: z.lazy(() => addressesIncludeSchema).optional(),
	})
	.strict();

export default addressesArgsSchema;
