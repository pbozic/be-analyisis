import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUserMoneyFlow(data: Prisma.user_money_flowsCreateInput) {
	return await prisma.user_money_flows.create({ data });
}

export async function getUserMoneyFlowById(id: string) {
	return await prisma.user_money_flows.findUnique({
		where: { balance_change_id: id },
	});
}

export async function getUserMoneyFlowsByUserId(userId: string) {
	return await prisma.user_money_flows.findMany({
		where: { user_id: userId },
	});
}

export async function getUserMoneyFlowsByDateRange(from: Date, to: Date) {
	return await prisma.user_money_flows.findMany({
		where: {
			created_at: {
				gte: from,
				lte: to,
			},
		},
	});
}

export async function getAllUserMoneyFlows() {
	return await prisma.user_money_flows.findMany();
}

export default {
	createUserMoneyFlow,
	getUserMoneyFlowById,
	getUserMoneyFlowsByUserId,
	getUserMoneyFlowsByDateRange,
	getAllUserMoneyFlows,
};
