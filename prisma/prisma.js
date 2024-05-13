require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
console.log(process.env.DATABASE_URL);
const { handleAddressPivotTable, addAddressPivotTable } = require("./middlewares/address");
const { handleHidePassword } = require("./middlewares/user");
const prisma = new PrismaClient().$extends({
	query: {
		users: {
			async $allOperations({ model, operation, args, query }) {
				args = await addAddressPivotTable(model, operation, args, query);
				// Proceed with the operation
				let result = await query(args);
				// If the operation is a query on the `users` model
				result = await handleHidePassword(model, operation, args, query, result);
				result = await handleAddressPivotTable(model, operation, args, query, result);

				// Return the modified result
				return result;
			},
		},
		allergens: {
			async $allOperations({ model, operation, args, query }) {
				// If the operation is a query on the `allergens` model
				if (operation.startsWith("find")) {
					args = {
						orderBy: {
							code: "asc",
						},
						...args,
					};
				}
				// Proceed with the operation
				let result = await query(args);
				// Return the modified result
				return result;
			},
		},
	},
});

module.exports = prisma;
