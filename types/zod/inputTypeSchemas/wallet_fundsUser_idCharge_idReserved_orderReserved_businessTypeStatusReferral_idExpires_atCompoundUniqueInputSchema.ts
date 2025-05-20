import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FUNDS_TYPESchema } from './FUNDS_TYPESchema';
import { CREDIT_STATUSSchema } from './CREDIT_STATUSSchema';

export const wallet_fundsUser_idCharge_idReserved_orderReserved_businessTypeStatusReferral_idExpires_atCompoundUniqueInputSchema: z.ZodType<Prisma.wallet_fundsUser_idCharge_idReserved_orderReserved_businessTypeStatusReferral_idExpires_atCompoundUniqueInput> =
	z
		.object({
			user_id: z.string(),
			charge_id: z.string(),
			reserved_order: z.string(),
			reserved_business: z.string(),
			type: z.lazy(() => FUNDS_TYPESchema),
			status: z.lazy(() => CREDIT_STATUSSchema),
			referral_id: z.string(),
			expires_at: z.coerce.date(),
		})
		.strict();

export default wallet_fundsUser_idCharge_idReserved_orderReserved_businessTypeStatusReferral_idExpires_atCompoundUniqueInputSchema;
