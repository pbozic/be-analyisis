require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
console.log(process.env.DATABASE_URL);
const { handleAddressPivotTable, addAddressPivotTable } = require("./middlewares/address");
const { handleHidePassword, alwaysAddWalletBalance, handleWalletBalance } = require("./middlewares/user");
const { handleS3LinkForFiles } = require("./middlewares/file");
const { handleS3LinkForDocuments } = require("./middlewares/documents");
const {generateS3LinksRecursively } = require("./middlewares/$allModels")
const prisma = new PrismaClient().$extends({
	query: {
		$allModels: {
			async $allOperations({ model, operation, args, query }) {
				// Proceed with the operation
				
				let result = await query(args);
				result = await generateS3LinksRecursively(args, result);
				// Return the modified result
				return result;
			},
		},
		users: {
			async $allOperations({ model, operation, args, query }) {
				args = await addAddressPivotTable(model, operation, args, query);
				//args = await alwaysAddWalletBalance(model, operation, args, query);
				// Proceed with the operation
				let result = await query(args);
				// If the operation is a query on the `users` model
				result = await handleHidePassword(model, operation, args, query, result);
				result = await handleAddressPivotTable(model, operation, args, query, result);
				//result = await handleWalletBalance(model, operation, args, query, result);
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
		files: {
			async $allOperations({ model, operation, args, query }) {
				// If the operation is a query on the `files` model
			
				// Proceed with the operation
				let result = await query(args);
				result = await handleS3LinkForFiles(model, operation, args, query, result);
				// Return the modified result
				return result;
			}
		},
		documents: {
			async $allOperations({ model, operation, args, query }) {
				// If the operation is a query on the `documents` model
				// Proceed with the operation
				let result = await query(args);
				result = await handleS3LinkForDocuments(model, operation, args, query, result);
				// Return the modified result
				return result;
			}
		}
	},
});

module.exports = prisma;
