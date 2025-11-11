import { Prisma } from '@prisma/client';

export const businessMoneyFlowWithBusinessInclude = Prisma.validator<Prisma.business_money_flowsInclude>()({
	business: true,
});

export type BusinessMoneyFlowWithBusinessPrisma = Prisma.business_money_flowsGetPayload<{
	include: typeof businessMoneyFlowWithBusinessInclude;
}>;

export type BusinessMoneyFlowDefaultPrisma = Prisma.business_money_flowsGetPayload<Record<string, never>>;

export default businessMoneyFlowWithBusinessInclude;
