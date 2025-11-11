import { Prisma } from '@prisma/client';

export const paymentsDefaultInclude = Prisma.validator<Prisma.paymentsInclude>()({
	payment_splits: true,
	daily_meal_subscription: true,
});

export type PaymentWithIncludesPrisma = Prisma.paymentsGetPayload<{ include: typeof paymentsDefaultInclude }>;

export default paymentsDefaultInclude;
