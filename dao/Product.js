const prisma = require('../prisma');
const dotenv = require('dotenv');
dotenv.config();



const createProduct = async (product) => {
    // check if it exists

    const product = await prisma.local_product.findUnique({
        where: {
            stripe_product_id: product.stripe_product_id,
        }
    })
    if (product) {
        return product;
    }
    try {
        const result = await prisma.local_product.create({
            data: {
                name: product.name,
                description: product.description,
                stripe_product_id: product.stripe_product_id,
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
        const price = await prisma.local_price.findUnique({
            where: {
                stripe_price_id: price.stripe_price_id,
            }
        })

        if (price) {
            return price
        }

        const result = await prisma.local_price.create({
            data: {
                amount: price.amount,
                currency: price.currency,
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
        const result = await prisma.local_product.findUnique({
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
        const result = await prisma.local_price.findUnique({
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
        const result = await prisma.local_product.findUnique({
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
        const result = await prisma.local_price.findUnique({
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
        const result = await prisma.local_product.update({
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
        const result = await prisma.local_price.update({
            where: {
                stripe_price_id: stripe_price_id
            },
            data: {
                amount: price.amount,
                currency: price.currency,
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
        const result = await prisma.local_product.delete({
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
        const result = await prisma.local_price.delete({
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



module.exports = {
    createProduct,
    createPrice,
    getProductByStripeId,
    getPriceByStripeId,
    getProduct,
    getPrice
}