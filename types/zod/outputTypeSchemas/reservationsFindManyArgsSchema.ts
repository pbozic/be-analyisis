import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reservationsIncludeSchema } from '../inputTypeSchemas/reservationsIncludeSchema';
import { reservationsWhereInputSchema } from '../inputTypeSchemas/reservationsWhereInputSchema';
import { reservationsOrderByWithRelationInputSchema } from '../inputTypeSchemas/reservationsOrderByWithRelationInputSchema';
import { reservationsWhereUniqueInputSchema } from '../inputTypeSchemas/reservationsWhereUniqueInputSchema';
import { ReservationsScalarFieldEnumSchema } from '../inputTypeSchemas/ReservationsScalarFieldEnumSchema';
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

export const reservationsFindManyArgsSchema: z.ZodType<Prisma.reservationsFindManyArgs> = z
	.object({
		select: reservationsSelectSchema.optional(),
		include: reservationsIncludeSchema.optional(),
		where: reservationsWhereInputSchema.optional(),
		orderBy: z
			.union([reservationsOrderByWithRelationInputSchema.array(), reservationsOrderByWithRelationInputSchema])
			.optional(),
		cursor: reservationsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([ReservationsScalarFieldEnumSchema, ReservationsScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();

export default reservationsFindManyArgsSchema;
