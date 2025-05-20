import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_municipalitiesIncludeSchema } from '../inputTypeSchemas/driver_municipalitiesIncludeSchema';
import { driver_municipalitiesWhereInputSchema } from '../inputTypeSchemas/driver_municipalitiesWhereInputSchema';
import { driver_municipalitiesOrderByWithRelationInputSchema } from '../inputTypeSchemas/driver_municipalitiesOrderByWithRelationInputSchema';
import { driver_municipalitiesWhereUniqueInputSchema } from '../inputTypeSchemas/driver_municipalitiesWhereUniqueInputSchema';
import { Driver_municipalitiesScalarFieldEnumSchema } from '../inputTypeSchemas/Driver_municipalitiesScalarFieldEnumSchema';
import { driversArgsSchema } from '../outputTypeSchemas/driversArgsSchema';
import { municipalitiesArgsSchema } from '../outputTypeSchemas/municipalitiesArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const driver_municipalitiesSelectSchema: z.ZodType<Prisma.driver_municipalitiesSelect> = z
	.object({
		driver_municipalities_id: z.boolean().optional(),
		driver_id: z.boolean().optional(),
		municipalities_id: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		drivers: z.union([z.boolean(), z.lazy(() => driversArgsSchema)]).optional(),
		municipalities: z.union([z.boolean(), z.lazy(() => municipalitiesArgsSchema)]).optional(),
	})
	.strict();

export const driver_municipalitiesFindFirstArgsSchema: z.ZodType<Prisma.driver_municipalitiesFindFirstArgs> = z
	.object({
		select: driver_municipalitiesSelectSchema.optional(),
		include: driver_municipalitiesIncludeSchema.optional(),
		where: driver_municipalitiesWhereInputSchema.optional(),
		orderBy: z
			.union([
				driver_municipalitiesOrderByWithRelationInputSchema.array(),
				driver_municipalitiesOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: driver_municipalitiesWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([Driver_municipalitiesScalarFieldEnumSchema, Driver_municipalitiesScalarFieldEnumSchema.array()])
			.optional(),
	})
	.strict();

export default driver_municipalitiesFindFirstArgsSchema;
