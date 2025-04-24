const prisma = require("../prisma/prisma");

async function createLateEvent(business_id, user_id, delivery_order_id, taxi_order_id, seconds) {
	try {
		const newLateEvent = await prisma.late_events.create({
			data: {
				businesses: { connect: { business_id: business_id } },
				users: { connect: { user_id: user_id } },
				delivery_orders: delivery_order_id ? { connect: { order_id: delivery_order_id } } : undefined,
				taxi_orders: taxi_order_id ? { connect: { order_id: taxi_order_id } } : undefined,
				seconds: seconds
			}
		});
		console.info("Created late event: ", newLateEvent);
		return newLateEvent;
	} catch (error) {
		console.error('Error creating late event:', error);
		throw error;
	}
}

async function getLateEventById(late_events_id) {
	try {
		const lateEvent = await prisma.late_events.findUnique({
			where: {
				late_events_id: late_events_id
			},
			include: {
				users: true,
				businesses: true,
				delivery_orders: true,
				taxi_orders: true,
				scoring_points: true
			}
		});
		return lateEvent;
	} catch (error) {
		console.error("Error retrieving late event by ID:", error);
		throw error;
	}
}

async function getLateEventsByUserId(user_id) {
	try {
		const lateEvents = await prisma.late_events.findMany({
			where: {
				user_id: user_id
			},
			orderBy: {
				delivery_order_id: 'asc'
			},
			include: {
				users: true,
				businesses: true,
				delivery_orders: true,
				taxi_orders: true,
				scoring_points: true
			}
		});
		return lateEvents;
	} catch (error) {
		console.error("Error retrieving late events by user ID:", error);
		throw error;
	}
}

async function getLateEventsByBusinessId(business_id) {
	try {
		const lateEvents = await prisma.late_events.findMany({
			where: {
				business_id: business_id
			},
			orderBy: {
				delivery_order_id: 'asc'
			},
			include: {
				users: true,
				businesses: true,
				delivery_orders: true,
				taxi_orders: true,
				scoring_points: true
			}
		});
		return lateEvents;
	} catch (error) {
		console.error("Error retrieving late events by business ID:", error);
		throw error;
	}
}

async function updateLateEvent(late_events_id, data) {
	try {
		const updatedLateEvent = await prisma.late_events.update({
			where: {
				late_events_id: late_events_id
			},
			data: data,
			include: {
				users: true,
				businesses: true,
				delivery_orders: true,
				taxi_orders: true,
				scoring_points: true
			}
		});
		console.info("Updated late event: ", updatedLateEvent);
		return updatedLateEvent;
	} catch (error) {
		console.error("Error updating late event:", error);
		throw error;
	}
}

async function deleteLateEvent(late_events_id) {
	try {
		await prisma.late_events.delete({
			where: {
				late_events_id: late_events_id
			}
		});
		console.log(`Late event with ID ${late_events_id} has been deleted.`);
	} catch (error) {
		console.error(`Error deleting late event with ID ${late_events_id}:`, error);
		throw error;
	}
}

module.exports = {
	createLateEvent,
	getLateEventById,
	getLateEventsByUserId,
	getLateEventsByBusinessId,
	updateLateEvent,
	deleteLateEvent
}