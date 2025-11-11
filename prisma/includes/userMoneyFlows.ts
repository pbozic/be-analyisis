import { Prisma } from '@prisma/client';

export const userMoneyFlowWithUserInclude = Prisma.validator<Prisma.user_money_flowsInclude>()({
	user: true,
});

export type UserMoneyFlowWithUserPrisma = Prisma.user_money_flowsGetPayload<{
	include: typeof userMoneyFlowWithUserInclude;
}>;

export type UserMoneyFlowDefaultPrisma = Prisma.user_money_flowsGetPayload<Record<string, never>>;

export default userMoneyFlowWithUserInclude;
