import prisma from '../prisma/prisma.js';
import { UUID } from '../schemas/primitives.js';
import { UpdateAddressInput } from '../types/addresses/Address.js';
import { toAddressResponse } from '../schemas/dto/Address/address.mappers.js';
import { toUserAddressResponse } from '../schemas/dto/UserAddress/userAddress.mappers.js';
import type { AddressDefaultPrisma } from '../prisma/includes/address.js';
import type { UserAddressDefaultPrisma } from '../prisma/includes/userAddress.js';
import type { UserAddressResponse } from '../types/users/UserAddress.js';
import { AddAddressDaoInput, BusinessAddress, AddressResponse, UpdateUserAddressInput } from '../schemas/dto/Address';

/**
 * Upsert an address by unique coordinates and address string.
 *
 * @param {object} address - Address payload (address, latitude, longitude, etc.).
 * @returns {Promise<object>} The created or updated address record.
 */
async function addAddress(address: AddAddressDaoInput): Promise<AddressResponse | Error> {
	// delete address.name;
	// delete address.icon;
	try {
		const row = await prisma.addresses.upsert({
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

		return toAddressResponse(row as AddressDefaultPrisma);
	} catch (error) {
		//console.log(error);
		return new Error(error instanceof Error ? error.message : String(error));
	}
}

/**
 * Add an address if it doesn't exist, or link it to a module if it already exists.
 *
 * @param {object} address - Address payload (address, latitude, longitude, etc.).
 * @param {string} linkType - The link type to link the address to (e.g., 'stores', 'food_drinks', 'businesses').
 * @param {string} linkTarget - The ID of the target to link the address to.
 * @returns {Promise<object>} The created or linked address record.
 */
async function addOrLinkAddress(
	address: BusinessAddress,
	linkType: string,
	linkTarget: string,
	tx: any = prisma
): Promise<AddressResponse | Error> {
	try {
		// Find or create the address
		const addressRecord = await tx.addresses.upsert({
			where: {
				uniqueAddressIdentifier: {
					address: address.address,
					latitude: address.latitude,
					longitude: address.longitude,
				},
			},
			update: {},
			create: { ...address },
		});

		// Link the address to the specified module
		await linkAddress(addressRecord.address_id, linkType, linkTarget, tx);

		return toAddressResponse(addressRecord as AddressDefaultPrisma);
	} catch (error) {
		return new Error(error instanceof Error ? error.message : String(error));
	}
}

/**
 * Link an existing address to a module.
 *
 * @param {string} addressId - The ID of the address to link.
 * @param {string} linkType - The link type (e.g., 'stores', 'food_drinks', 'businesses').
 * @param {string} linkTarget - The ID of the target to link the address to.
 * @returns {Promise<void>} Resolves when the link is created.
 */
async function linkAddress(addressId: UUID, linkType: string, linkTarget: string, tx: any = prisma): Promise<void> {
	try {
		switch (linkType) {
			case 'user_address':
				await tx.user_address.create({
					data: { user_id: linkTarget, address_id: addressId },
				});
				break;
			case 'businesses':
				await tx.businesses.update({
					where: { business_id: linkTarget },
					data: { address_id: addressId },
				});
				break;
			case 'stores':
				await tx.stores_module.update({
					where: { stores_id: linkTarget },
					data: { delivery_address_id: addressId },
				});
				break;
			case 'food_drinks':
				await tx.food_drinks_module.update({
					where: { food_drinks_id: linkTarget },
					data: { delivery_address_id: addressId },
				});
				break;
			case 'business_users':
				await tx.business_users.update({
					where: { business_user_id: linkTarget },
					data: { operating_address_id: addressId },
				});
				break;
			case 'daily_meals':
				await tx.daily_meal_subscriptions.update({
					where: { id: linkTarget },
					data: { delivery_address_id: addressId },
				});
				break;
			case 'local_locations':
				await tx.local_locations.update({
					where: { id: linkTarget },
					data: { address_id: addressId },
				});
				break;
			case 'locations':
				await tx.locations.update({
					where: { location_id: linkTarget },
					data: { address_id: addressId },
				});
				break;
			default:
				throw new Error(`Unsupported link type: ${linkType}`);
		}
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : String(error));
	}
}

/**
 * Unlink an address from a module.
 *
 * @param {string} addressId - The ID of the address to unlink.
 * @param {string} linkType - The link type (e.g., 'stores', 'food_drinks', 'businesses').
 * @param {string} linkTarget - The ID of the target to unlink the address from.
 * @returns {Promise<void>} Resolves when the link is removed.
 */
async function unlinkAddress(addressId: UUID, linkType: string, linkTarget: string): Promise<void> {
	try {
		switch (linkType) {
			case 'user_address':
				await prisma.user_address.delete({
					where: {
						user_id_address_id: {
							user_id: linkTarget,
							address_id: addressId,
						},
					},
				});
				break;
			case 'businesses':
				await prisma.businesses.update({
					where: { business_id: linkTarget },
					data: { address_id: null },
				});
				break;
			case 'stores':
				await prisma.stores_module.update({
					where: { stores_id: linkTarget },
					data: { delivery_address_id: null },
				});
				break;
			case 'food_drinks':
				await prisma.food_drinks_module.update({
					where: { food_drinks_id: linkTarget },
					data: { delivery_address_id: null },
				});
				break;
			case 'business_users':
				await prisma.business_users.update({
					where: { business_user_id: linkTarget },
					data: { operating_address_id: null },
				});
				break;
			case 'daily_meals':
				await prisma.daily_meal_subscriptions.update({
					where: { id: linkTarget },
					data: { delivery_address_id: null },
				});
				break;
			case 'local_locations':
				await prisma.local_locations.update({
					where: { id: linkTarget },
					data: { address_id: null },
				});
				break;
			case 'locations':
				await prisma.locations.update({
					where: { location_id: linkTarget },
					data: { address_id: null },
				});
				break;
			default:
				throw new Error(`Unsupported link type: ${linkType}`);
		}
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : String(error));
	}
}

/**
 * Delete a user_address link by composite key.
 *
 * @param {string} user_id - User ID.
 * @param {string} address_id - Address ID.
 * @returns {Promise<object>} The deleted user_address record.
 */
async function deleteUserAddress(user_id: UUID, address_id: UUID): Promise<UserAddressResponse | Error> {
	try {
		const row = await prisma.user_address.delete({
			where: {
				user_id_address_id: {
					user_id,
					address_id,
				},
			},
		});

		return toUserAddressResponse(row as UserAddressDefaultPrisma);
	} catch (error) {
		return new Error(error instanceof Error ? error.message : String(error));
	}
}
/**
 * Add a user_address link; marks as primary if it's the user's first address.
 *
 * @param {string} user_id - User ID.
 * @param {string} address_id - Address ID.
 * @returns {Promise<object>} The upserted user_address record.
 */
async function addUserAddress(user_id: UUID, address_id: UUID): Promise<UserAddressResponse> {
	try {
		let primary = false;
		let addresses = await prisma.user_address.findMany({
			where: {
				user_id,
			},
		});
		if (!addresses.length) primary = true;
		const row = await prisma.user_address.upsert({
			where: {
				user_id_address_id: {
					user_id,
					address_id,
				},
			},
			update: {},
			create: { user_id, address_id, primary },
		});

		return toUserAddressResponse(row as UserAddressDefaultPrisma);
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : String(error));
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
async function editUserAddress(
	user_id: UUID,
	address_id: UUID,
	data: UpdateUserAddressInput
): Promise<UserAddressResponse | Error> {
	try {
		const row = await prisma.user_address.update({
			where: {
				user_id_address_id: {
					user_id,
					address_id,
				},
			},
			data,
		});

		return toUserAddressResponse(row as UserAddressDefaultPrisma);
	} catch (error) {
		return new Error(error instanceof Error ? error.message : String(error));
	}
}
/**
 * Set an address as the primary for a user (unsets all others first).
 *
 * @param {string} user_id - User ID.
 * @param {string} address_id - Address ID to set as primary.
 * @returns {Promise<object>} The updated user_address record.
 */
async function setPrimaryUserAddress(user_id: UUID, address_id: UUID): Promise<UserAddressResponse | Error> {
	try {
		await prisma.user_address.updateMany({
			where: {
				user_id,
			},
			data: {
				primary: false,
			},
		});
		const row = await prisma.user_address.update({
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

		return toUserAddressResponse(row as UserAddressDefaultPrisma);
	} catch (error) {
		return new Error(error instanceof Error ? error.message : String(error));
	}
}
/**
 * Update an address by its address_id.
 *
 * @param {string} addressId - Address ID to update.
 * @param {object} updateData - Fields to update on the address.
 * @returns {Promise<object>} The updated address.
 */
const updateAddressByAddressId = async (addressId: UUID, updateData: UpdateAddressInput): Promise<AddressResponse> => {
	try {
		const existingAddress = await prisma.addresses.findUnique({
			where: { address_id: addressId },
		});
		if (!existingAddress) {
			throw new Error('Address not found');
		}
		const row = await prisma.addresses.update({
			where: { address_id: addressId },
			data: updateData,
		});

		return toAddressResponse(row as AddressDefaultPrisma);
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : String(error));
	}
};
/**
 * Find an address by exact latitude and longitude.
 *
 * @param {number} latitude - Latitude value.
 * @param {number} longitude - Longitude value.
 * @returns {Promise<object|null>} The matching address or null.
 */
async function findAddress(latitude: string, longitude: string): Promise<AddressResponse | null | Error> {
	try {
		let addresses = await prisma.addresses.findMany({
			where: {
				latitude,
				longitude,
			},
		});
		const row = addresses[0];
		return row ? toAddressResponse(row as AddressDefaultPrisma) : null;
	} catch (error) {
		return new Error(error instanceof Error ? error.message : String(error));
	}
}

export { addAddress };
export { addOrLinkAddress };
export { linkAddress };
export { unlinkAddress };
export { addUserAddress };
export { deleteUserAddress };
export { editUserAddress };
export { setPrimaryUserAddress };
export { updateAddressByAddressId };
export { findAddress };
export default {
	addAddress,
	addOrLinkAddress,
	linkAddress,
	unlinkAddress,
	addUserAddress,
	deleteUserAddress,
	editUserAddress,
	setPrimaryUserAddress,
	updateAddressByAddressId,
	findAddress,
};
