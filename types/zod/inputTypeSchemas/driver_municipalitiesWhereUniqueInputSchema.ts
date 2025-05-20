import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_municipalitiesDriver_idMunicipalities_idCompoundUniqueInputSchema } from './driver_municipalitiesDriver_idMunicipalities_idCompoundUniqueInputSchema';
import { driver_municipalitiesWhereInputSchema } from './driver_municipalitiesWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DriversRelationFilterSchema } from './DriversRelationFilterSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { MunicipalitiesRelationFilterSchema } from './MunicipalitiesRelationFilterSchema';
import { municipalitiesWhereInputSchema } from './municipalitiesWhereInputSchema';

export const driver_municipalitiesWhereUniqueInputSchema: z.ZodType<Prisma.driver_municipalitiesWhereUniqueInput> = z
	.union([
		z.object({
			driver_municipalities_id: z.string().uuid(),
			driver_id_municipalities_id: z.lazy(
				() => driver_municipalitiesDriver_idMunicipalities_idCompoundUniqueInputSchema
			),
		}),
		z.object({
			driver_municipalities_id: z.string().uuid(),
		}),
		z.object({
			driver_id_municipalities_id: z.lazy(
				() => driver_municipalitiesDriver_idMunicipalities_idCompoundUniqueInputSchema
			),
		}),
	])
	.and(
		z
			.object({
				driver_municipalities_id: z.string().uuid().optional(),
				driver_id_municipalities_id: z
					.lazy(() => driver_municipalitiesDriver_idMunicipalities_idCompoundUniqueInputSchema)
					.optional(),
				AND: z
					.union([
						z.lazy(() => driver_municipalitiesWhereInputSchema),
						z.lazy(() => driver_municipalitiesWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => driver_municipalitiesWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => driver_municipalitiesWhereInputSchema),
						z.lazy(() => driver_municipalitiesWhereInputSchema).array(),
					])
					.optional(),
				driver_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
				municipalities_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
				created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				drivers: z
					.union([z.lazy(() => DriversRelationFilterSchema), z.lazy(() => driversWhereInputSchema)])
					.optional(),
				municipalities: z
					.union([
						z.lazy(() => MunicipalitiesRelationFilterSchema),
						z.lazy(() => municipalitiesWhereInputSchema),
					])
					.optional(),
			})
			.strict()
	);

export default driver_municipalitiesWhereUniqueInputSchema;
