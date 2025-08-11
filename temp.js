import { findSlots } from '../lib/bookingHelpers';

const services = ['3a93e124-6264-42a3-a557-5cb57600dcdb'];
const locations = ['4dd328ff-a2cd-4e45-844b-f93aa30b3ac0'];
const employees = ['6b163bd9-aded-4bae-b72d-aaa8ab6fd802'];
const reservationModuleId = '0b1e85a2-81cb-4a93-947f-7b1eb61a5bb1';
const date = '2025-10-01T00:00:00Z';

async function testFindSlots() {
	try {
		const slots = await findSlots({
			services,
			locationId: locations[0],
			employeeId: employees[0],
			reservationModuleId,
			date,
			duration: 60, // 1 hour
			timezone: 'Europe/Prague',
		});
		console.log('Available slots:', slots);
	} catch (error) {
		console.error('Error finding slots:', error);
	}
}

testFindSlots();

export default testFindSlots;
