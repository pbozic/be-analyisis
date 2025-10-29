import prisma from '../prisma/prisma.js';
/**
 * Upsert an address by unique coordinates and address string.
 *
 * @param {object} address - Address payload (address, latitude, longitude, etc.).
 * @returns {Promise<object>} The created or updated address record.
 */
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
/**
 * Delete a user_address link by composite key.
 *
 * @param {string} user_id - User ID.
 * @param {string} address_id - Address ID.
 * @returns {Promise<object>} The deleted user_address record.
 */
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
/**
 * Add a user_address link; marks as primary if it's the user's first address.
 *
 * @param {string} user_id - User ID.
 * @param {string} address_id - Address ID.
 * @returns {Promise<object>} The upserted user_address record.
 */
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
/**
 * Update fields on a user_address link.
 *
 * @param {string} user_id - User ID.
 * @param {string} address_id - Address ID.
 * @param {object} data - Fields to update on the user_address.
 * @returns {Promise<object>} The updated user_address record.
 */
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
/**
 * Set an address as the primary for a user (unsets all others first).
 *
 * @param {string} user_id - User ID.
 * @param {string} address_id - Address ID to set as primary.
 * @returns {Promise<object>} The updated user_address record.
 */
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
/**
 * Update an address by its address_id.
 *
 * @param {string} addressId - Address ID to update.
 * @param {object} updateData - Fields to update on the address.
 * @returns {Promise<object>} The updated address.
 */
const updateAddressByAddressId = async (addressId, updateData) => {
	try {
		const existingAddress = await prisma.addresses.findUnique({
			where: { address_id: addressId },
		});
		if (!existingAddress) {
			throw new Error('Address not found');
		}
		return await prisma.addresses.update({
			where: { address_id: addressId },
			data: updateData,
		});
	} catch (error) {
		throw new Error(error);
	}
};
/**
 * Find an address by exact latitude and longitude.
 *
 * @param {number} latitude - Latitude value.
 * @param {number} longitude - Longitude value.
 * @returns {Promise<object|null>} The matching address or null.
 */
async function findAddress(latitude, longitude) {
	try {
		let addresses = await prisma.addresses.findMany({
			where: {
				latitude,
				longitude,
			},
		});
		return addresses[0] || null;
	} catch (error) {
		return new Error(error);
	}
}

export { addAddress };
export { addUserAddress };
export { deleteUserAddress };
export { editUserAddress };
export { setPrimaryUserAddress };
export { updateAddressByAddressId };
export { findAddress };
export default {
	addAddress,
	addUserAddress,
	deleteUserAddress,
	editUserAddress,
	setPrimaryUserAddress,
	updateAddressByAddressId,
	findAddress,
};
