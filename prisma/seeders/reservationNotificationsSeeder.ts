// prisma/seeders/notificationEvents.ts
import prisma from '../prisma.js';

type SeedEvent = {
	key: string;
	name: string;
	description?: string | null;
};

const EVENTS: SeedEvent[] = [
	{ key: 'booking.created', name: 'Booking Created', description: 'Triggered when a booking is first created.' },
	{
		key: 'booking.reminder',
		name: 'Booking Reminder (1 Day before)',
		description: 'Reminder before the appointment.',
	},
	{ key: 'booking.rescheduled', name: 'Booking Rescheduled', description: 'Sent when a booking time changes.' },
	{ key: 'booking.cancelled', name: 'Booking Cancelled', description: 'Sent when a booking is cancelled.' },
];

async function notificationEventsSeeder() {
	console.log('Seeding notification_event…');

	for (const ev of EVENTS) {
		try {
			const existing = await prisma.notification_event.findUnique({
				where: { key: ev.key },
			});

			if (existing) {
				const updated = await prisma.notification_event.update({
					where: { notification_event_id: existing.notification_event_id },
					data: {
						name: ev.name,
						description: ev.description ?? null,
					},
				});
				console.log(`✓ Updated event: ${updated.key} (${updated.notification_event_id})`);
				continue;
			}

			const created = await prisma.notification_event.create({
				data: {
					key: ev.key,
					name: ev.name,
					description: ev.description ?? null,
				},
			});
			console.log(`+ Created event: ${created.key} (${created.notification_event_id})`);
		} catch (err) {
			console.error(`✗ Failed upserting event "${ev.key}":`, err);
		}
	}

	console.log('notification_event seeding complete.');
}

export default notificationEventsSeeder;
