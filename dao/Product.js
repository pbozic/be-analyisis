import dotenv from 'dotenv';

import prisma from '../prisma/prisma.js';
dotenv.config();
/**
 * Create a local product record mirroring a Stripe product, if not already existing.
 *
 * @param {object} product - Product payload (name, description, stripe_product_id, currency?).
 * @returns {Promise<object>} The existing or newly created product.
 */
const createProduct = async (product) => {
	// check if it exists
	const isProduct = await prisma.local_products.findUnique({
		where: {
			stripe_product_id: product.stripe_product_id,
		},
	});
	if (isProduct) {
		return isProduct;
	}
	try {
		const result = await prisma.local_products.create({
			data: {
				name: product.name,
				description: product.description,
				stripe_product_id: product.stripe_product_id,
				currency: product.currency || 'eur',
			},
		});
		return result;
	} catch (error) {
		console.log(error);
		return error;
	}
};
/**
 * Create a local price record mirroring a Stripe price, if not already existing.
 *
 * @param {object} price - Price payload (amount, currency?, stripe_price_id, stripe_product_id).
 * @returns {Promise<object>} The existing or newly created price.
 */
const createPrice = async (price) => {
	try {
		const existingPrice = await prisma.local_prices.findUnique({
			where: {
				stripe_price_id: price.stripe_price_id,
			},
		});
		if (existingPrice) {
			return existingPrice;
		}
		const result = await prisma.local_prices.create({
			data: {
				amount: price.amount,
				currency: price.currency || 'eur',
				stripe_price_id: price.stripe_price_id,
				stripe_product_id: price.stripe_product_id,
				product: {
					connect: {
						stripe_product_id: price.stripe_product_id,
					},
				},
			},
		});
		return result;
	} catch (error) {
		console.log(error);
		return error;
	}
};
/**
 * Get a local product by Stripe product ID.
 *
 * @param {string} stripe_product_id - Stripe product ID.
 * @returns {Promise<object|null>} The product or null.
 */
const getProductByStripeId = async (stripe_product_id) => {
	try {
		const result = await prisma.local_products.findUnique({
			where: {
				stripe_product_id: stripe_product_id,
			},
		});
		return result;
	} catch (error) {
		console.log(error);
		return error;
	}
};
/**
 * Get a local price by Stripe price ID.
 *
 * @param {string} stripe_price_id - Stripe price ID.
 * @returns {Promise<object|null>} The price or null.
 */
const getPriceByStripeId = async (stripe_price_id) => {
	try {
		const result = await prisma.local_prices.findUnique({
			where: {
				stripe_price_id: stripe_price_id,
			},
		});
		return result;
	} catch (error) {
		console.log(error);
		return error;
	}
};
/**
 * Get a local product by its local_product_id.
 *
 * @param {string} product_id - Local product ID.
 * @returns {Promise<object|null>} The product or null.
 */
const getProduct = async (product_id) => {
	try {
		const result = await prisma.local_products.findUnique({
			where: {
				local_product_id: product_id,
			},
		});
		return result;
	} catch (error) {
		console.log(error);
		return error;
	}
};
/**
 * Get a local price by its local_price_id.
 *
 * @param {string} price_id - Local price ID.
 * @returns {Promise<object|null>} The price or null.
 */
const getPrice = async (price_id) => {
	try {
		const result = await prisma.local_prices.findUnique({
			where: {
				local_price_id: price_id,
			},
		});
		return result;
	} catch (error) {
		console.log(error);
		return error;
	}
};
/**
 * Update a local product's metadata by its Stripe product ID.
 *
 * @param {string} stripe_product_id - Stripe product ID.
 * @param {object} product - Partial fields (name, description).
 * @returns {Promise<object>} The updated product.
 */
const updateProductByStripeId = async (stripe_product_id, product) => {
	try {
		const result = await prisma.local_products.update({
			where: {
				stripe_product_id: stripe_product_id,
			},
			data: {
				name: product.name,
				description: product.description,
			},
		});
		return result;
	} catch (error) {
		console.log(error);
		return error;
	}
};
/**
 * Update a local price by its Stripe price ID.
 *
 * @param {string} stripe_price_id - Stripe price ID.
 * @param {object} price - Partial fields (amount, currency?).
 * @returns {Promise<object>} The updated price.
 */
const updatePriceByStripeId = async (stripe_price_id, price) => {
	try {
		const result = await prisma.local_prices.update({
			where: {
				stripe_price_id: stripe_price_id,
			},
			data: {
				amount: price.amount,
				currency: price.currency || 'eur',
			},
		});
		return result;
	} catch (error) {
		console.log(error);
		return error;
	}
};
/**
 * Delete a local product by its Stripe product ID.
 *
 * @param {string} stripe_product_id - Stripe product ID.
 * @returns {Promise<object>} The deleted product.
 */
const deleteProductByStripeId = async (stripe_product_id) => {
	try {
		const result = await prisma.local_products.delete({
			where: {
				stripe_product_id: stripe_product_id,
			},
		});
		return result;
	} catch (error) {
		console.log(error);
		return error;
	}
};
/**
 * Delete a local price by its Stripe price ID.
 *
 * @param {string} stripe_price_id - Stripe price ID.
 * @returns {Promise<object>} The deleted price.
 */
const deletePriceByStripeId = async (stripe_price_id) => {
	try {
		const result = await prisma.local_prices.delete({
			where: {
				stripe_price_id: stripe_price_id,
			},
		});
		return result;
	} catch (error) {
		console.log(error);
		return error;
	}
};
/**
 * List local prices by local product ID.
 *
 * @param {string} product_id - Local product ID.
 * @returns {Promise<object[]>} Array of prices.
 */
async function getPricesByProductId(product_id) {
	try {
		const result = await prisma.local_prices.findMany({
			where: {
				local_product_id: product_id,
			},
		});
		return result;
	} catch (error) {
		console.log(error);
		return error;
	}
}
/**
 * List local prices by Stripe product ID.
 *
 * @param {string} stripe_product_id - Stripe product ID.
 * @returns {Promise<object[]>} Array of prices.
 */
async function getPricesByStripeProductId(stripe_product_id) {
	try {
		const result = await prisma.local_prices.findMany({
			where: {
				stripe_product_id: stripe_product_id,
			},
		});
		return result;
	} catch (error) {
		console.log(error);
		return error;
	}
}
export { createProduct };
export { createPrice };
export { getProductByStripeId };
export { getPriceByStripeId };
export { getProduct };
export { getPrice };
export { updateProductByStripeId };
export { updatePriceByStripeId };
export { deleteProductByStripeId };
export { deletePriceByStripeId };
export { getPricesByProductId };
export { getPricesByStripeProductId };
export default {
	createProduct,
	createPrice,
	getProductByStripeId,
	getPriceByStripeId,
	getProduct,
	getPrice,
	updateProductByStripeId,
	updatePriceByStripeId,
	deleteProductByStripeId,
	deletePriceByStripeId,
	getPricesByProductId,
	getPricesByStripeProductId,
};
