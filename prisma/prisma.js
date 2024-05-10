const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Middleware to remove password from user queries
prisma.$use(async (params, next) => {
    // Proceed with the operation
    let result = await next(params);

    // If the operation is a query on the `users` model
    if (params.model === 'users') {
        if (Array.isArray(result)) {
            // If the result is an array of users, remove the password from each user
            result = result.map(user => {
                const { password, ...rest } = user;
                return rest;
            });
        } else if (result !== null && typeof result === 'object') {
            // If the result is a single user object, remove the password
            const { password, ...rest } = result;
            result = rest;
        }
    }

    // Return the modified result
    return result;
});

module.exports = prisma;