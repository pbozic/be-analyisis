const prisma = require("../prisma/prisma");

const reportFoundItem = async (foundItemData, user) => {
	try {
		return await prisma.lost_items.create({
			data: {
				...foundItemData,
				user: {
					connect: { user_id: user.user_id }
				}
			},
		});
	} catch (error) {
		console.error("Error adding found item:", error);
		throw new Error("Error adding found item");
	}
};


const deleteFoundItem = async ( lost_item_id ) => {
	try {
		// Disconnect the user from the lost item
		// await prisma.lost_items.update({
		// 	where: { lost_item_id },
		// 	data: { user: { disconnect: true } }
		// });

		return await prisma.lost_items.delete({
			where: { lost_item_id },
		});
	} catch (error) {
		console.error("Error deleting found item:", error);
		throw new Error(error);
	}
};

const getLostItems = async () => {
	try {
		return await prisma.lost_items.findMany({
			include: {
				documents: {
					include: {
						files: true,
					},
				},
				user: true
			},
		});
	} catch (error) {
		console.error("Error fetching lost items with documents and files:", error);
		throw new Error("Could not retrieve lost items");
	}
};

module.exports = {
	reportFoundItem,
	deleteFoundItem,
	getLostItems
};
