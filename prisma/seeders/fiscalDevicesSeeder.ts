import prisma from '../prisma.js';
async function fiscalDevicesSeeder() {
	await prisma.fiscal_devices.upsert({
		where: {
			name: 'Phanteon Web Lite',
		},
		update: {
			name: 'Phanteon Web Lite',
		},
		create: {
			name: 'Phanteon Web Lite',
		},
	});
}
export default fiscalDevicesSeeder;
