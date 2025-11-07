import prisma from '../prisma/prisma.js';
import { UpdateUserAddress } from '../schemas/dto/UserAddress/userAddress.dto.js';
import { UUID } from '../schemas/primitives.js';
import { CreateAddressInput } from '../types/addresses/Address.js';

/**
 * Add a user address link. Checks if the address exists first, and creates it if it doesn't.
 *
 * @param {UUID} userId - The ID of the user.
 * @param {CreateAddressInput} addressData - The address data to create or link.
 * @param {object} details - Additional details for the address (optional).
 * @param {string} type - The type of the address (e.g., 'HOME', 'WORK') (optional).
 * @returns {Promise<object>} The created user_address record.
 */
async function addUserAddress(userId: UUID, addressData: CreateAddressInput, details?: object, type: string = 'HOME') {
	try {
		// Check if the address already exists
		const existingAddress = await prisma.addresses.findUnique({
			where: {
				uniqueAddressIdentifier: {
					address: addressData.address,
					latitude: addressData.latitude,
					longitude: addressData.longitude,
				},
			},
		});

		let addressId: UUID;

		if (existingAddress) {
			// Use the existing address ID
			addressId = existingAddress.address_id;
		} else {
			// Create a new address and get its ID
			const newAddress = await prisma.addresses.create({
				data: { ...addressData },
			});
			addressId = newAddress.address_id;
		}

		// Check if the user already has addresses
		const existingUserAddresses = await prisma.user_address.findMany({
			where: { user_id: userId },
		});

		// Determine if this should be the primary address
		const isPrimary = existingUserAddresses.length === 0;

		// Create the user_address link
		return await prisma.user_address.create({
			data: {
				user_id: userId,
				address_id: addressId,
				primary: isPrimary,
				details,
				type,
			},
		});
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : String(error));
	}
}

/**
 * Delete a user address link.
 *
 * @param {UUID} userId - The ID of the user.
 * @param {UUID} addressId - The ID of the address.
 * @returns {Promise<object>} The deleted user_address record.
 */
async function deleteUserAddress(userId: UUID, addressId: UUID) {
	try {
		return await prisma.user_address.delete({
			where: {
				user_id_address_id: {
					user_id: userId,
					address_id: addressId,
				},
			},
		});
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : String(error));
	}
}

/**
 * Edit a user address link. If address data is updated, connect to a different address.
 *
 * @param {UUID} userId - The ID of the user.
 * @param {UUID} addressId - The ID of the current address.
 * @param {object} updateData - Fields to update on the user_address or address.
 * @returns {Promise<object>} The updated user_address record.
 */
async function editUserAddress(userId: UUID, addressId: UUID, updateData: UpdateUserAddress) {
	try {
		// Check if address data needs to be updated
		if (updateData.address) {
			// Check if the current address matches the provided address data
			const currentAddress = await prisma.addresses.findUnique({
				where: { address_id: addressId },
			});

			if (
				currentAddress &&
				currentAddress.address === updateData.address.address &&
				currentAddress.latitude === updateData.address.latitude &&
				currentAddress.longitude === updateData.address.longitude
			) {
				// If the address matches, only update the user_address fields
				return await prisma.user_address.update({
					where: {
						user_id_address_id: {
							user_id: userId,
							address_id: addressId,
						},
					},
					data: {
						details: updateData.details,
						type: updateData.type,
					},
				});
			} else {
				// If the address does not match, check if the new address already exists
				const existingAddress = await prisma.addresses.findUnique({
					where: {
						uniqueAddressIdentifier: {
							address: updateData.address.address,
							latitude: updateData.address.latitude,
							longitude: updateData.address.longitude,
						},
					},
				});

				let newAddressId: UUID;

				if (existingAddress) {
					// Use the existing address
					newAddressId = existingAddress.address_id;
				} else {
					// Create a new address
					const newAddress = await prisma.addresses.create({
						data: { ...updateData.address },
					});
					newAddressId = newAddress.address_id;
				}

				// Update the user_address to point to the new address
				return await prisma.user_address.update({
					where: {
						user_id_address_id: {
							user_id: userId,
							address_id: addressId,
						},
					},
					data: {
						address_id: newAddressId,
						details: updateData.details,
						type: updateData.type,
					},
				});
			}
		}

		// If no address data is updated, just update the user_address fields
		return await prisma.user_address.update({
			where: {
				user_id_address_id: {
					user_id: userId,
					address_id: addressId,
				},
			},
			data: {
				details: updateData.details,
				type: updateData.type,
			},
		});
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : String(error));
	}
}

export { addUserAddress, deleteUserAddress, editUserAddress };
