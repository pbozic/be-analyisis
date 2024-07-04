const prisma = require("../prisma/prisma");

const reportFoundItem = async (foundItemData) => {
	try {
		return await prisma.lost_items.create({
			data: foundItemData,
		});
	} catch (error) {
		console.error("Error adding found item:", error);
		throw new Error(error);
	}
};

const deleteFoundItem = async ( lost_item_id ) => {
	try {
		return await prisma.lost_items.delete({
			where: { lost_item_id },
		});
	} catch (error) {
		console.error("Error deleting found item:", error);
		throw new Error(error);
	}
};

module.exports = {
	reportFoundItem,
	deleteFoundItem,
};
