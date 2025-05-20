import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema';
import { COMPANY_ROLESchema } from './COMPANY_ROLESchema';
import { EnumCOMPANY_ROLEFieldUpdateOperationsInputSchema } from './EnumCOMPANY_ROLEFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { usersUpdateOneWithoutBusiness_usersNestedInputSchema } from './usersUpdateOneWithoutBusiness_usersNestedInputSchema';
import { businessUpdateOneWithoutBusiness_usersNestedInputSchema } from './businessUpdateOneWithoutBusiness_usersNestedInputSchema';
import { addressesUpdateOneWithoutBusiness_usersNestedInputSchema } from './addressesUpdateOneWithoutBusiness_usersNestedInputSchema';
import { allowancesUpdateOneWithoutBusiness_userNestedInputSchema } from './allowancesUpdateOneWithoutBusiness_userNestedInputSchema';

export const business_usersUpdateWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.business_usersUpdateWithoutTaxi_ordersInput> =
	z
		.object({
			business_users_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			online: z
				.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			company_role: z
				.union([
					z.lazy(() => COMPANY_ROLESchema),
					z.lazy(() => EnumCOMPANY_ROLEFieldUpdateOperationsInputSchema),
				])
				.optional(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			users: z.lazy(() => usersUpdateOneWithoutBusiness_usersNestedInputSchema).optional(),
			business: z.lazy(() => businessUpdateOneWithoutBusiness_usersNestedInputSchema).optional(),
			operating_address: z.lazy(() => addressesUpdateOneWithoutBusiness_usersNestedInputSchema).optional(),
			allowance: z.lazy(() => allowancesUpdateOneWithoutBusiness_userNestedInputSchema).optional(),
		})
		.strict();

export default business_usersUpdateWithoutTaxi_ordersInputSchema;
