import prisma from '../prisma/prisma.js';
import { SERVICE_TYPE } from '../lib/constants.js';
const getGroupUsersByParentId = async (parent_id) => {
	try {
		return await prisma.group_users.findUnique({
			where: {
				parent_user_id: parent_id,
			},
		});
	} catch (error) {
		console.error('Error retrieving group_users by parent_id:', error);
		throw new Error(error);
	}
};
const getGroupUserByChildId = async (child_id) => {
	try {
		return await prisma.group_users.findFirst({
			where: {
				child_user_id: child_id,
			},
			include: { parent_user: true, allowance: true },
		});
	} catch (error) {
		console.error('Error retrieving group_user by child_id:', error);
		throw new Error(error);
	}
};
const createGroupUser = async (group_user_data) => {
	const group_user = await prisma.group_users.create({
		data: {
			parent_user: { connect: { user_id: group_user_data.parent_user_id } },
			child_user: { connect: { user_id: group_user_data.child_user_id } },
		},
	});
	await prisma.allowances.create({
		data: {
			user: {
				connect: {
					group_user_id: group_user.group_user_id,
				},
			},
		},
	});
	return group_user;
};
const deleteGroupUser = async (group_user_id) => {
	return await prisma.group_users.delete({
		where: { group_user_id: group_user_id },
	});
};
const updateGroupUserEnabled = async (group_user_id, value) => {
	console.log('UPDATE ENABLED FOR GROUP_USER: ', group_user_id, ' TO VALUE: ', value);
	return await prisma.group_users.update({
		where: {
			group_user_id: group_user_id,
		},
		data: {
			enabled: value,
		},
	});
};
const updateGroupUserAllowance = async (group_user_id, value, type) => {
	const updateData = {};
	switch (type) {
		case SERVICE_TYPE.TAXI:
			updateData.amount_taxi_wallet = value;
			break;
		case SERVICE_TYPE.TRANSFER:
			updateData.amount_transfer_wallet = value;
			break;
		case SERVICE_TYPE.DELIVERY:
			updateData.amount_delivery_wallet = value;
			break;
		case SERVICE_TYPE.ANY:
			updateData.amount_any_wallet = value;
			break;
		default:
			throw new Error('Invalid allowance type given');
	}
	await prisma.allowances.upsert({
		where: { group_user_id },
		update: updateData,
		create: { group_user_id, ...updateData },
	});
	return await prisma.group_users.findUnique({
		where: { group_user_id },
		include: { allowance: true },
	});
};
export { getGroupUsersByParentId };
export { getGroupUserByChildId };
export { createGroupUser };
export { deleteGroupUser };
export { updateGroupUserEnabled };
export { updateGroupUserAllowance };
export default {
	getGroupUsersByParentId,
	getGroupUserByChildId,
	createGroupUser,
	deleteGroupUser,
	updateGroupUserEnabled,
	updateGroupUserAllowance,
};
