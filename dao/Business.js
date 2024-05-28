const prisma = require("../prisma/prisma");

const getBusinesses = async (args) => {
	try {
		return await prisma.business.findMany({
			...args,
			include: {
				address: true,
				finances: true,
				business_users: {
					include: {
						users: true,
					},
				},
				parent_business: true,
				child_businesses: true,
				documents: false,
				taxi_orders: false,
				delivery_orders: false,
			},
		});
	} catch (error) {
		console.error("Error retrieving businesses:", error);
		throw new Error(error);
	}
};

const getBusinessById = async (business_id) => {
	try {
		return await prisma.business.findUnique({
			where: {
				business_id: business_id,
			},
			include: {
				address: true,
				finances: true,
				business_users: {
					include: {
						users: true,
					},
				},
				parent_business: true,
				child_businesses: true,
				documents: false,
				taxi_orders: false,
				delivery_orders: false,
			},
		});
	} catch (error) {
		console.error("Error retrieving business:", error);
		throw new Error(error);
	}
};

const getParentBusiness = async (business_id) => {
	try {
		const business = await prisma.business.findUnique({
			where: { business_id },
			include: { parent_business: true },
		});
		return business.parent_business;
	} catch (error) {
		console.error("Error retrieving parent business:", error);
		throw new Error(error);
	}
};

const getChildBusinesses = async (parent_business_id) => {
	try {
		return await prisma.business.findMany({
			where: { parent_business_id },
		});
	} catch (error) {
		console.error("Error retrieving child businesses:", error);
		throw new Error(error);
	}
};

const updateBusiness = async (business_id, businessData) => {
	try {
		delete businessData.business_id;
		delete businessData.type;
		delete businessData.is_business_unit;
		delete businessData.business_group_name;
		delete businessData.email;
		delete businessData.telephone;
		delete businessData.telephone_code;
		delete businessData.telephone_number;
		delete businessData.working_hours;
		delete businessData.popular;
		delete businessData.new;

		return await prisma.business.update({
			where: { business_id },
			data: { ...businessData },
		});
	} catch (error) {
		console.error("Error updating business:", error);
		throw new Error(error);
	}
};

const updateBusinessType = async (business_id, type) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { type },
		});
	} catch (error) {
		console.error("Error updating business type:", error);
		throw new Error(error);
	}
};

const updateIsBusinessUnit = async (business_id, is_business_unit) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { is_business_unit },
		});
	} catch (error) {
		console.error("Error updating is_business_unit:", error);
		throw new Error(error);
	}
};

const updateBusinessGroupName = async (business_id, business_group_name) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { business_group_name },
		});
	} catch (error) {
		console.error("Error updating business group name:", error);
		throw new Error(error);
	}
};

const updateBusinessEmail = async (business_id, email) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { email },
		});
	} catch (error) {
		console.error("Error updating business email:", error);
		throw new Error(error);
	}
};

const updateBusinessTelephone = async (business_id, telephone, telephone_code, telephone_number) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { telephone, telephone_code, telephone_number },
		});
	} catch (error) {
		console.error("Error updating business telephone:", error);
		throw new Error(error);
	}
};

const updateBusinessWorkingHours = async (business_id, working_hours) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { working_hours },
		});
	} catch (error) {
		console.error("Error updating business working hours:", error);
		throw new Error(error);
	}
};
const updateBusinessIsNew = async (business_id, isNew) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { new: isNew }, // Use 'new' property directly since 'new' is a reserved keyword in JavaScript, hence 'isNew' parameter name
		});
	} catch (error) {
		console.error("Error updating business new status:", error);
		throw new Error(error);
	}
};
const updateBusinessIsPopular = async (business_id, popular) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { popular },
		});
	} catch (error) {
		console.error("Error updating business popularity:", error);
		throw new Error(error);
	}
};


const createNewBusiness = async (business) => {
	try {
		return await prisma.business.create({
			data: business,
		});
	} catch (error) {
		console.error("Error creating new business:", error);
		throw new Error(error);
	}
};

const deleteBusiness = async (business_id) => {
	try {
		return await prisma.business.delete({
			where: { business_id },
		});
	} catch (error) {
		console.error("Error deleting business:", error);
		throw new Error(error);
	}
};

const updateParentBusiness = async (business_id, parent_business_id) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { parent_business_id },
		});
	} catch (error) {
		console.error("Error updating parent business:", error);
		throw new Error(error);
	}
};

const addChildBusiness = async (child_business_id, parent_business_id) => {
	try {
		return await prisma.business.update({
			where: { business_id: child_business_id },
			data: { parent_business_id },
		});
	} catch (error) {
		console.error("Error adding child business:", error);
		throw new Error(error);
	}
};

const removeChildBusiness = async (child_business_id) => {
	try {
		return await prisma.business.update({
			where: { business_id: child_business_id },
			data: { parent_business_id: null },
		});
	} catch (error) {
		console.error("Error removing child business:", error);
		throw new Error(error);
	}
};

const updateBusinessDeliveryAddress = async (business_id, delivery_address_id) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { delivery_address_id },
		});
	} catch (error) {
		console.error("Error updating business delivery address:", error);
		throw new Error(error);
	}
};

const removeBusinessDeliveryAddress = async (business_id) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { delivery_address_id: null },
		});
	} catch (error) {
		console.error("Error removing business delivery address:", error);
		throw new Error(error);
	}
};

module.exports = {
	getBusinesses,
	getBusinessById,
	createNewBusiness,
	updateBusiness,
	deleteBusiness,
	updateBusinessType,
	updateIsBusinessUnit,
	updateBusinessGroupName,
	updateBusinessEmail,
	updateBusinessTelephone,
	updateBusinessWorkingHours,
	updateBusinessIsNew,
	updateBusinessIsPopular,
	updateParentBusiness,
	updateBusinessDeliveryAddress,
	removeBusinessDeliveryAddress,
	addChildBusiness,
	removeChildBusiness,
	getChildBusinesses,
	getParentBusiness,
};