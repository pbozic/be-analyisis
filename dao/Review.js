import prisma from '../prisma/prisma.js';
async function createReviewableBusiness(bussines_id) {
	try {
		return prisma.reviewable.create({
			data: {
				business: {
					connect: {
						business_id: bussines_id,
					},
				},
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
async function createReviewableUser(user_id) {
	try {
		return prisma.reviewable.create({
			data: {
				user: {
					connect: {
						user_id: user_id,
					},
				},
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
async function createReview(review) {
	try {
		return prisma.reviews.create({
			data: review,
		});
	} catch (e) {
		throw new Error(e);
	}
}

async function getReviewsByUserId(user_id) {
	try {
		return prisma.reviews.findMany({
			where: {
				author_id: user_id,
			},
		});
	} catch (e) {
		throw new Error(e);
	}
}
export { createReviewableBusiness };
export { createReviewableUser };
export { createReview };
export { getReviewsByUserId };
// --- New helpers for reviewables on various entities ---
async function ensureDriverReviewable(driver_id) {
	const driver = await prisma.drivers.findUnique({ where: { driver_id }, select: { reviewable_id: true } });
	if (driver?.reviewable_id) return driver.reviewable_id;
	const created = await prisma.reviewable.create({ data: { driver: { connect: { driver_id } } } });
	await prisma.drivers.update({ where: { driver_id }, data: { reviewable_id: created.reviewable_id } });
	return created.reviewable_id;
}

async function ensureBookingReviewable(booking_id) {
	const booking = await prisma.booking.findUnique({ where: { booking_id }, select: { reviewable_id: true } });
	if (booking?.reviewable_id) return booking.reviewable_id;
	const created = await prisma.reviewable.create({ data: { reservation_booking: { connect: { booking_id } } } });
	await prisma.booking.update({ where: { booking_id }, data: { reviewable_id: created.reviewable_id } });
	return created.reviewable_id;
}

async function ensureReservationModuleReviewable(reservation_module_id) {
	const mod = await prisma.reservation_module.findUnique({
		where: { reservation_module_id },
		select: { reviewable_id: true },
	});
	if (mod?.reviewable_id) return mod.reviewable_id;
	const created = await prisma.reviewable.create({
		data: { reservation_module: { connect: { reservation_module_id } } },
	});
	await prisma.reservation_module.update({
		where: { reservation_module_id },
		data: { reviewable_id: created.reviewable_id },
	});
	return created.reviewable_id;
}

async function ensureTransportModuleReviewable(transport_module_id) {
	const mod = await prisma.transport_module.findUnique({
		where: { transport_module_id },
		select: { reviewable_id: true },
	});
	if (mod?.reviewable_id) return mod.reviewable_id;
	const created = await prisma.reviewable.create({
		data: { transport_module: { connect: { transport_module_id } } },
	});
	await prisma.transport_module.update({
		where: { transport_module_id },
		data: { reviewable_id: created.reviewable_id },
	});
	return created.reviewable_id;
}

async function ensureStoresReviewable(stores_id) {
	const s = await prisma.stores.findUnique({ where: { stores_id }, select: { reviewable_id: true } });
	if (s?.reviewable_id) return s.reviewable_id;
	const created = await prisma.reviewable.create({ data: { stores: { connect: { stores_id } } } });
	await prisma.stores.update({ where: { stores_id }, data: { reviewable_id: created.reviewable_id } });
	return created.reviewable_id;
}

async function ensureFoodDrinksReviewable(food_drinks_id) {
	const fd = await prisma.food_drinks.findUnique({ where: { food_drinks_id }, select: { reviewable_id: true } });
	if (fd?.reviewable_id) return fd.reviewable_id;
	const created = await prisma.reviewable.create({ data: { food_drinks: { connect: { food_drinks_id } } } });
	await prisma.food_drinks.update({ where: { food_drinks_id }, data: { reviewable_id: created.reviewable_id } });
	return created.reviewable_id;
}

// --- Public review creators ---
export async function reviewDriver(author_id, driver_id, { rating = null, comment = null, feedback = null } = {}) {
	try {
		const reviewable_id = await ensureDriverReviewable(driver_id);
		return await prisma.reviews.create({
			data: { author_id, reviewable_id, rating, comment, feedback },
		});
	} catch (e) {
		console.error('Error reviewing driver:', e);
		throw new Error(e);
	}
}

export async function reviewBooking(author_id, booking_id, { rating = null, comment = null, feedback = null } = {}) {
	try {
		const reviewable_id = await ensureBookingReviewable(booking_id);
		return await prisma.reviews.create({ data: { author_id, reviewable_id, rating, comment, feedback } });
	} catch (e) {
		console.error('Error reviewing booking:', e);
		throw new Error(e);
	}
}

export async function reviewReservationBusiness(
	author_id,
	reservation_module_id,
	{ rating = null, comment = null, feedback = null } = {}
) {
	try {
		const reviewable_id = await ensureReservationModuleReviewable(reservation_module_id);
		return await prisma.reviews.create({ data: { author_id, reviewable_id, rating, comment, feedback } });
	} catch (e) {
		console.error('Error reviewing reservation module:', e);
		throw new Error(e);
	}
}

export async function reviewTransportBusiness(
	author_id,
	transport_module_id,
	{ rating = null, comment = null, feedback = null } = {}
) {
	try {
		const reviewable_id = await ensureTransportModuleReviewable(transport_module_id);
		return await prisma.reviews.create({ data: { author_id, reviewable_id, rating, comment, feedback } });
	} catch (e) {
		console.error('Error reviewing transport module:', e);
		throw new Error(e);
	}
}

export async function reviewStore(author_id, stores_id, { rating = null, comment = null, feedback = null } = {}) {
	try {
		const reviewable_id = await ensureStoresReviewable(stores_id);
		return await prisma.reviews.create({ data: { author_id, reviewable_id, rating, comment, feedback } });
	} catch (e) {
		console.error('Error reviewing store:', e);
		throw new Error(e);
	}
}

export async function reviewFoodDrinks(
	author_id,
	food_drinks_id,
	{ rating = null, comment = null, feedback = null } = {}
) {
	try {
		const reviewable_id = await ensureFoodDrinksReviewable(food_drinks_id);
		return await prisma.reviews.create({ data: { author_id, reviewable_id, rating, comment, feedback } });
	} catch (e) {
		console.error('Error reviewing food_drinks:', e);
		throw new Error(e);
	}
}

export async function getReviewsForDriver(driver_id) {
	try {
		const driver = await prisma.drivers.findUnique({ where: { driver_id }, select: { reviewable_id: true } });
		if (!driver?.reviewable_id) return [];
		return await prisma.reviews.findMany({
			where: { reviewable_id: driver.reviewable_id },
			orderBy: { created_at: 'desc' },
		});
	} catch (e) {
		console.error('Error fetching driver reviews:', e);
		throw new Error(e);
	}
}
export default {
	createReviewableBusiness,
	createReviewableUser,
	createReview,
	getReviewsByUserId,
	reviewDriver,
	reviewBooking,
	reviewReservationBusiness,
	reviewTransportBusiness,
	reviewStore,
	reviewFoodDrinks,
	getReviewsForDriver,
};
