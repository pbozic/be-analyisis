import { Prisma } from '@prisma/client';

export const paymentSplitsDefaultInclude = Prisma.validator<Prisma.payment_splitsInclude>()({
    payment: true,
});

export type PaymentSplitWithIncludesPrisma = Prisma.payment_splitsGetPayload<{
    include: typeof paymentSplitsDefaultInclude;
}>;

export default paymentSplitsDefaultInclude;
