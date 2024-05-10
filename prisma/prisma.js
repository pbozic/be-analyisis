const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient().$extends({
    query: {
        users: {
            async $allOperations({ model, operation, args, query }) {
                // Proceed with the operation
                let result = await query(args);

                // If the operation is a query on the `users` model
                if (operation.startsWith('find')) {
                    if (result !== null && typeof result === 'object') {
                        // If the result is a single user object, remove the password
                        const { password, ...rest } = result;
                        result = rest;
                    }
                    if (result !== null && typeof result === 'array') {
                        // If the result is an array of users, remove the password from each user
                        result = result.map(user => {
                            const { password, ...rest } = user;
                            return rest;
                        });
                    }
                }
                // Return the modified result
                return result;
            },
        },
        allergens: {
            async $allOperations({ model, operation, args, query }) {
                // Proceed with the operation
                let result = await query(args);

                // If the operation is a query on the `allergens` model
                if (operation.startsWith('find')) {
                   args = {
                        orderBy: {
                            code: 'asc',
                        },
                        ...args
                    };
                }
                // Return the modified result
                return result;
            },
        }
    },
});

module.exports = prisma;