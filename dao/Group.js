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

const createGroupUser = async (group_user_data) => {
	return await prisma.group_users.create({
		data: {
			allowance:group_user_data.allowance,
			parent_user: { connect: { user_id: group_user_data.parent_user_id } },
			child_user:{ connect: { user_id: group_user_data.child_user_id } },
		},
	});
}

const deleteGroupUser = async (group_user_id) => {
	return await prisma.group_users.delete({
		where:{ group_user_id: group_user_id }
	});
}

const updateGroupUserEnabled = async (group_user_id,value) => {
	return await prisma.group_users.update({
		where: {
			group_user_id: group_user_id,
		},
		data: {
			enabled: value,
		},
	});
}

const updateGroupUserAllowance = async (group_user_id,value) => {
	return await prisma.group_users.update({
		where: {
			group_user_id: group_user_id,
		},
		data: {
			allowance: value,
		},
	});
}



module.exports = {
	getGroupUsersByParentId,
	createGroupUser,
	deleteGroupUser,
	updateGroupUserEnabled,
	updateGroupUserAllowance
};