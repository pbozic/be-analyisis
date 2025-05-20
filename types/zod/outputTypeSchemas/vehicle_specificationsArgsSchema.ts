import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehicle_specificationsSelectSchema } from '../inputTypeSchemas/vehicle_specificationsSelectSchema';
import { vehicle_specificationsIncludeSchema } from '../inputTypeSchemas/vehicle_specificationsIncludeSchema';

export const vehicle_specificationsArgsSchema: z.ZodType<Prisma.vehicle_specificationsDefaultArgs> = z
	.object({
		select: z.lazy(() => vehicle_specificationsSelectSchema).optional(),
		include: z.lazy(() => vehicle_specificationsIncludeSchema).optional(),
	})
	.strict();

export default vehicle_specificationsArgsSchema;
