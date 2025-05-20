import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reservationsIncludeSchema } from '../inputTypeSchemas/reservationsIncludeSchema';
import { reservationsCreateInputSchema } from '../inputTypeSchemas/reservationsCreateInputSchema';
import { reservationsUncheckedCreateInputSchema } from '../inputTypeSchemas/reservationsUncheckedCreateInputSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const reservationsSelectSchema: z.ZodType<Prisma.reservationsSelect> = z
	.object({
		reservation_id: z.boolean().optional(),
		seats: z.boolean().optional(),
		date: z.boolean().optional(),
		time: z.boolean().optional(),
		datetime: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		business_id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		status: z.boolean().optional(),
		table: z.boolean().optional(),
		business: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
		user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
	})
	.strict();

export const reservationsCreateArgsSchema: z.ZodType<Prisma.reservationsCreateArgs> = z
	.object({
		select: reservationsSelectSchema.optional(),
		include: reservationsIncludeSchema.optional(),
		data: z.union([reservationsCreateInputSchema, reservationsUncheckedCreateInputSchema]),
	})
	.strict();

export default reservationsCreateArgsSchema;
