import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { settlementsIncludeSchema } from '../inputTypeSchemas/settlementsIncludeSchema';
import { settlementsWhereUniqueInputSchema } from '../inputTypeSchemas/settlementsWhereUniqueInputSchema';
import { municipalitiesArgsSchema } from '../outputTypeSchemas/municipalitiesArgsSchema';
import { weather_dataFindManyArgsSchema } from '../outputTypeSchemas/weather_dataFindManyArgsSchema';
import { SettlementsCountOutputTypeArgsSchema } from '../outputTypeSchemas/SettlementsCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const settlementsSelectSchema: z.ZodType<Prisma.settlementsSelect> = z
	.object({
		settlement_id: z.boolean().optional(),
		name: z.boolean().optional(),
		municipalities_id: z.boolean().optional(),
		eid_naselje: z.boolean().optional(),
		feature_id: z.boolean().optional(),
		geojson: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		municipality: z.union([z.boolean(), z.lazy(() => municipalitiesArgsSchema)]).optional(),
		weather_data: z.union([z.boolean(), z.lazy(() => weather_dataFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => SettlementsCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const settlementsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.settlementsFindUniqueOrThrowArgs> = z
	.object({
		select: settlementsSelectSchema.optional(),
		include: settlementsIncludeSchema.optional(),
		where: settlementsWhereUniqueInputSchema,
	})
	.strict();

export default settlementsFindUniqueOrThrowArgsSchema;
