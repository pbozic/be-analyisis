const prisma = require("../prisma/prisma");

const getGroupUsersByParentId = async (parent_id) => {
	try {
		return await prisma.group_users.findUnique({
			where: {
				parent_user_id: parent_id,
			}
		});
	} catch (error) {
		console.error("Error retrieving group_users by parent_id:", error);
		throw new Error(error);
	}
};

const getGroupUserByChildId = async (child_id) => {
	try {
		return await prisma.group_users.findFirst({
			where: {
				child_user_id: child_id,
			},
			include: {parent_user:true, allowance: true}
		});
	} catch (error) {
		console.error("Error retrieving group_user by child_id:", error);
		throw new Error(error);
	}
};

const createGroupUser = async (group_user_data) => {
	const group_user = await prisma.group_users.create({
		data: {
			parent_user: { connect: { user_id: group_user_data.parent_user_id } },
			child_user:{ connect: { user_id: group_user_data.child_user_id } },
		},
	});
	await prisma.allowances.create({
		data: {
			user: {
				connect: {
					group_user_id: group_user_id,
				}
			}
		}
	});
	return group_user;
}

const deleteGroupUser = async (group_user_id) => {
	return await prisma.group_users.delete({
		where:{ group_user_id: group_user_id }
	});
}

const updateGroupUserEnabled = async (group_user_id,value) => {
	console.log("UPDATE ENABLED FOR GROUP_USER: ",group_user_id," TO VALUE: ",value);
	return await prisma.group_users.update({
		where: {
			group_user_id: group_user_id,
		},
		data: {
			enabled: value,
		},
	});
}

const updateGroupUserAllowance = async (group_user_id, value, type) => {
	const group_user = await prisma.group_users.findUnique({
		where: {
			group_user_id: group_user_id,
		},
		include: {
			allowance: true
		}
	});
	const updateData = {};
	if (type === 'Taxi') {
		updateData.amount_taxi = value;
	} else if (type === 'Transfer') {
		updateData.amount_transfer = value;
	} else if (type === 'Delivery') {
		updateData.amount_delivery = value;
	} else if (type === 'Any') {
		updateData.amount_any = value;
	}
	let allowance = group_user?.allowance;
	if (!allowance) {
		await prisma.allowances.create({
			data: {
				user: {
					connect: {
						group_user_id: group_user_id,
					}
				},
				...updateData
			}
		});
	} else {
		await prisma.allowances.update({
			where: {
				group_user_id: group_user_id,
			},
			data: updateData
		});
	}
	return group_user;
}

module.exports = {
	getGroupUsersByParentId,
	getGroupUserByChildId,
	createGroupUser,
	deleteGroupUser,
	updateGroupUserEnabled,
	updateGroupUserAllowance
};