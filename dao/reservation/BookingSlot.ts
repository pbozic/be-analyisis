import prisma from '../../prisma/prisma';
import type {
	CreateBookingSlotRequest,
	UpdateBookingSlotRequest,
	BookingSlotResponse,
} from '../../schemas/dto/reservations/booking-slot/booking-slot.dto';
import {
	toBookingSlotResponse,
	toBookingSlotList,
} from '../../schemas/dto/reservations/booking-slot/booking-slot.mappers';
/**
 * Retrieves all booking slots for a given schedule slot ID.
 * @param {string} scheduleSlotId - The schedule slot ID.
 * @returns {Promise<BookingSlotResponse[]>} A promise that resolves to an array of booking slot responses.
 * @throws {Error} If there is an error retrieving the booking slots.
 */
export async function getBookingSlotsByScheduleSlotId(scheduleSlotId: string): Promise<BookingSlotResponse[]> {
	try {
		const records = await prisma.booking_slots.findMany({
			where: { schedule_slot_id: scheduleSlotId },
		});
		return toBookingSlotList(records);
	} catch (error) {
		throw new Error('Error retrieving booking slots');
	}
}

/**
 * Creates a new booking slot.
 * @param {CreateBookingSlotRequest} data - The data for the new booking slot.
 * @returns {Promise<BookingSlotResponse>} A promise that resolves to the created booking slot response.
 * @throws {Error} If there is an error creating the booking slot.
 */
export async function createBookingSlot(data: CreateBookingSlotRequest): Promise<BookingSlotResponse> {
	try {
		const record = await prisma.booking_slots.create({
			data: {
				schedule_slot_id: data.schedule_slot_id,
				start_time: data.start_time,
				end_time: data.end_time,
			},
		});
		return toBookingSlotResponse(record);
	} catch (error) {
		throw new Error('Error creating booking slot');
	}
}

/**
 * Updates an existing booking slot.
 * @param {string} id - The ID of the booking slot to update.
 * @param {UpdateBookingSlotRequest} data - The data to update.
 * @returns {Promise<BookingSlotResponse>} A promise that resolves to the updated booking slot response.
 * @throws {Error} If there is an error updating the booking slot.
 */
export async function updateBookingSlot(id: string, data: UpdateBookingSlotRequest): Promise<BookingSlotResponse> {
	try {
		const record = await prisma.booking_slots.update({
			where: { booking_slot_id: id },
			data: {
				schedule_slot_id: data.schedule_slot_id,
				start_time: data.start_time,
				end_time: data.end_time,
			},
		});
		return toBookingSlotResponse(record);
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
 * @returns {Promise<BookingSlotResponse | null>} A promise that resolves to the booking slot response or null.
 * @throws {Error} If there is an error retrieving the booking slot.
 */
export async function getBookingSlotById(id: string): Promise<BookingSlotResponse | null> {
	try {
		const record = await prisma.booking_slots.findUnique({
			where: { booking_slot_id: id },
		});
		return record ? toBookingSlotResponse(record) : null;
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
