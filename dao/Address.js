const prisma = require("../prisma/prisma");
async function addAddress(address) {
	delete address.name;
	delete address.icon;
	try {
		return prisma.addresses.upsert({
			where: {
				uniqueAddressIdentifier: {
					address: address.address,
					latitude: address.latitude,
					longitude: address.longitude,
				},
			},
			update: { ...address },
			create: { ...address },
		});
	} catch (error) {
		//console.log(error);
		return new Error(error);
	}
}
async function deleteUserAddress(user_id, address_id) {
	try {
		return prisma.user_address.delete({
			where: {
				user_id_address_id: {
					user_id,
					address_id,
				},
			},
		});
	} catch (error) {
		return new Error(error);
	}
}
async function addUserAddress(user_id, address_id) {
	try {
		let primary = false;
		let addresses = await prisma.user_address.findMany({
			where: {
				user_id,
			},
		});
		if (!addresses.length) primary = true;
		return prisma.user_address.upsert({
			where: {
				user_id_address_id: {
					user_id,
					address_id,
				},
			},
			update: {},
			create: { user_id, address_id, primary },
		});
	} catch (error) {
		return new Error(error);
	}
}
async function editUserAddress(user_id, address_id, data) {
	try {
		return prisma.user_address.update({
			where: {
				user_id_address_id: {
					user_id,
					address_id,
				},
			},
			data,
		});
	} catch (error) {
		return new Error(error);
	}
}
async function setPrimaryUserAddress(user_id, address_id) {
	try {
		await prisma.user_address.updateMany({
			where: {
				user_id,
			},
			data: {
				primary: false,
			},
		});
		return prisma.user_address.update({
			where: {
				user_id_address_id: {
					user_id,
					address_id,
				},
			},
			data: {
				primary: true,
			},
		});
	} catch (error) {
		return new Error(error);
	}
}

const updateAddressByAddressId = async (addressId, updateData) => {
	try {
		const existingAddress = await prisma.addresses.findUnique({
			where: { address_id: addressId },
		});

		if (!existingAddress) {
			throw new Error("Address not found");
		}

		return await prisma.addresses.update({
			where: { address_id: addressId },
			data: updateData,
		});
	} catch (error) {
		console.error("Error updating user address:", error);
		throw new Error(error);
	}
};

module.exports = {
	addAddress,
	addUserAddress,
	deleteUserAddress,
	editUserAddress,
	setPrimaryUserAddress,
	updateAddressByAddressId
};
