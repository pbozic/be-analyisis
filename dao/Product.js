const prisma = require('../prisma/prisma');
const dotenv = require('dotenv');
dotenv.config();



const createProduct = async (product) => {
    // check if it exists

    const isProduct = await prisma.local_products.findUnique({
        where: {
            stripe_product_id: product.stripe_product_id,
        }
    })
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
            }
        });
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const createPrice = async (price) => {
    try {
        const price = await prisma.local_prices.findUnique({
            where: {
                stripe_price_id: price.stripe_price_id,
            }
        })

        if (price) {
            return price
        }

        const result = await prisma.local_prices.create({
            data: {
                amount: price.amount,
                currency: price.currency || 'eur',
                stripe_price_id: price.stripe_price_id,
                stripe_product_id: price.stripe_product_id,
                product: {
                    connect: {
                        stripe_product_id: price.stripe_product_id
                    }
                }
            }
        });
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const getProductByStripeId = async (stripe_product_id) => {
    try {
        const result = await prisma.local_products.findUnique({
            where: {
                stripe_product_id: stripe_product_id
            }
        });
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const getPriceByStripeId = async (stripe_price_id) => {
    try {
        const result = await prisma.local_prices.findUnique({
            where: {
                stripe_price_id: stripe_price_id
            }
        });
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const getProduct = async (product_id) => {
    try {
        const result = await prisma.local_products.findUnique({
            where: {
                local_product_id: product_id
            }
        });
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const getPrice = async (price_id) => {
    try {
        const result = await prisma.local_prices.findUnique({
            where: {
                local_price_id: price_id
            }
        });
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const updateProductByStripeId = async (stripe_product_id, product) => {
    try {
        const result = await prisma.local_products.update({
            where: {
                stripe_product_id: stripe_product_id
            },
            data: {
                name: product.name,
                description: product.description,
            }
        });
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const updatePriceByStripeId = async (stripe_price_id, price) => {
    try {
        const result = await prisma.local_prices.update({
            where: {
                stripe_price_id: stripe_price_id
            },
            data: {
                amount: price.amount,
                currency: price.currency || 'eur',
            }
        });
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const deleteProductByStripeId = async (stripe_product_id) => {
    try {
        const result = await prisma.local_products.delete({
            where: {
                stripe_product_id: stripe_product_id
            }
        });
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const deletePriceByStripeId = async (stripe_price_id) => {
    try {
        const result = await prisma.local_prices.delete({
            where: {
                stripe_price_id: stripe_price_id
            }
        });
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function getPricesByProductId(product_id) {
    try {
        const result = await prisma.local_prices.findMany({
            where: {
                local_product_id: product_id
            }
        });
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function getPricesByStripeProductId(stripe_product_id) {
    try {
        const result = await prisma.local_prices.findMany({
            where: {
                stripe_product_id: stripe_product_id
            }
        });
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}
module.exports = {
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
    getPricesByStripeProductId

}