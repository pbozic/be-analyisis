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
export default {
	createReviewableBusiness,
	createReviewableUser,
	createReview,
	getReviewsByUserId,
};
