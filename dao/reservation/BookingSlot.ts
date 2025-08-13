import prisma from '../../prisma/prisma';
import type {
	CreateBookingSlotInput,
	UpdateBookingSlotSchemaInput,
	BookingSlot,
} from '../../types/reservation/Schedule';

/**
 * Retrieves all booking slots for a given schedule slot ID.
 * @param {string} scheduleSlotId - The schedule slot ID.
 * @returns {Promise<BookingSlot[]>} A promise that resolves to an array of booking slot records.
 * @throws {Error} If there is an error retrieving the booking slots.
 */
export async function getBookingSlotsByScheduleSlotId(scheduleSlotId: string): Promise<BookingSlot[]> {
	try {
		const records = await prisma.booking_slots.findMany({
			where: { schedule_slot_id: scheduleSlotId },
		});
		return records;
	} catch (error) {
		throw new Error('Error retrieving booking slots');
	}
}

/**
 * Creates a new booking slot.
 * @param {CreateBookingSlotInput} data - The data for the new booking slot.
 * @returns {Promise<BookingSlot>} A promise that resolves to the created booking slot record.
 * @throws {Error} If there is an error creating the booking slot.
 */
export async function createBookingSlot(data: CreateBookingSlotInput): Promise<BookingSlot> {
	try {
		const record = await prisma.booking_slots.create({
			data: {
				schedule_slot_id: data.schedule_slot_id,
				start_time: data.start_time,
				end_time: data.end_time,
			},
		});
		return record;
	} catch (error) {
		throw new Error('Error creating booking slot');
	}
}

/**
 * Updates an existing booking slot.
 * @param {string} id - The ID of the booking slot to update.
 * @param {UpdateBookingSlotSchemaInput} data - The data to update.
 * @returns {Promise<BookingSlot>} A promise that resolves to the updated record.
 * @throws {Error} If there is an error updating the booking slot.
 */
export async function updateBookingSlot(id: string, data: UpdateBookingSlotSchemaInput): Promise<BookingSlot> {
	try {
		const record = await prisma.booking_slots.update({
			where: { booking_slot_id: id },
			data: {
				schedule_slot_id: data.schedule_slot_id,
				start_time: data.start_time,
				end_time: data.end_time,
			},
		});
		return record;
	} catch (error) {
		throw new Error('Error updating booking slot');
	}
}

/**
 * Deletes a booking slot.
 * @param {string} id - The ID of the booking slot to delete.
 * @returns {Promise<void>} A promise that resolves when the record is deleted.
 * @throws {Error} If there is an error deleting the booking slot.
 */
export async function deleteBookingSlot(id: string): Promise<void> {
	try {
		await prisma.booking_slots.delete({
			where: { booking_slot_id: id },
		});
	} catch (error) {
		throw new Error('Error deleting booking slot');
	}
}

/**
 * Retrieves a booking slot by ID.
 * @param {string} id - The ID of the booking slot.
 * @returns {Promise<BookingSlot | null>} A promise that resolves to the booking slot record or null.
 * @throws {Error} If there is an error retrieving the booking slot.
 */
export async function getBookingSlotById(id: string): Promise<BookingSlot | null> {
	try {
		const record = await prisma.booking_slots.findUnique({
			where: { booking_slot_id: id },
		});
		return record;
	} catch (error) {
		throw new Error('Error retrieving booking slot');
	}
}

export default {
	getBookingSlotsByScheduleSlotId,
	createBookingSlot,
	updateBookingSlot,
	deleteBookingSlot,
	getBookingSlotById,
};
