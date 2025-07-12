import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function createBusinessMoneyFlow(data: Prisma.business_money_flowsCreateInput) {
	return await prisma.business_money_flows.create({ data });
}

export async function getBusinessMoneyFlowById(id: string) {
	return await prisma.business_money_flows.findUnique({
		where: { balance_change_id: id },
	});
}

export async function getBusinessMoneyFlowsByBusinessId(businessId: string) {
	return await prisma.business_money_flows.findMany({
		where: { business_id: businessId },
	});
}

export async function getBusinessMoneyFlowsByDateRange(from: Date, to: Date) {
	return await prisma.business_money_flows.findMany({
		where: {
			created_at: {
				gte: from,
				lte: to,
			},
		},
	});
}

export async function getAllBusinessMoneyFlows() {
	return await prisma.business_money_flows.findMany();
}

export default {
	createBusinessMoneyFlow,
	getBusinessMoneyFlowById,
	getBusinessMoneyFlowsByBusinessId,
	getBusinessMoneyFlowsByDateRange,
	getAllBusinessMoneyFlows,
};
