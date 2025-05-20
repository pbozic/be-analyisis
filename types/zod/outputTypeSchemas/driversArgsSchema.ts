import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driversSelectSchema } from '../inputTypeSchemas/driversSelectSchema';
import { driversIncludeSchema } from '../inputTypeSchemas/driversIncludeSchema';

export const driversArgsSchema: z.ZodType<Prisma.driversDefaultArgs> = z
	.object({
		select: z.lazy(() => driversSelectSchema).optional(),
		include: z.lazy(() => driversIncludeSchema).optional(),
	})
	.strict();

export default driversArgsSchema;
