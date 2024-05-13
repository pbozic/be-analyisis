const prisma = require("../prisma/prisma");
async function addAddress(address) {
	try {
		return prisma.addresses.upsert({
			where: {
				uniqueAdressIdentifier: {
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
module.exports = {
	addAddress,
	addUserAddress,
	deleteUserAddress,
	editUserAddress,
	setPrimaryUserAddress,
};
