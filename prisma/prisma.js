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
				if (args.include && args.include.user) {
					result = removePasswords(result);
				}
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
		},
	},
	model: {
		drivers: {
			async inRadius(point, radiusInMeters, requirements, vehicleFilters) { 
				console.log("vehicles", vehicleFilters)
				console.log("point", point);
				console.log("radius", radiusInMeters);
				// const drivers = await prisma.$queryRaw`
				//  	SELECT *
				// 	FROM drivers 
				// 	WHERE online = true
				// 	AND on_order = false
				// 	AND ST_DWithin(
				// 		ST_MakePoint(
				// 			CAST((location->'coordinates'->>'longitude') AS FLOAT),
				// 			CAST((location->'coordinates'->>'latitude') AS FLOAT)
				// 		)::geography,
				// 		ST_MakePoint(${point.longitude}, ${point.latitude})::geography,
				// 		${radiusInMeters}
				// 	)
				// `;
				const drivers = await prisma.$queryRaw`
					SELECT drivers.*, vehicles.*, vehicle_specifications.*
					FROM drivers
					JOIN vehicles ON vehicles.driver_id = drivers.driver_id
					JOIN vehicle_specifications ON vehicle_specifications.vehicle_id = vehicles.vehicle_id
					WHERE drivers.online = true
					AND drivers.on_order = false
					AND ST_DWithin(
					ST_MakePoint(
						CAST((drivers.location->'coordinates'->>'longitude') AS FLOAT),
						CAST((drivers.location->'coordinates'->>'latitude') AS FLOAT)
					)::geography,
					ST_MakePoint(${point.longitude}, ${point.latitude})::geography,
					${radiusInMeters}
					)
					AND (COALESCE(${requirements.traveling_with_pet}, FALSE) = FALSE OR (drivers.ride_requirements->'traveling_with_pet')::BOOLEAN = ${requirements.traveling_with_pet})
					AND (COALESCE(${requirements.child_seat}, FALSE) = FALSE OR (drivers.ride_requirements->'child_seat')::BOOLEAN = ${requirements.child_seat})
					AND (COALESCE(${requirements.wheelchair_accessibility}, FALSE) = FALSE OR (drivers.ride_requirements->'wheelchair_accessibility')::BOOLEAN = ${requirements.wheelchair_accessibility})
					AND (COALESCE(${vehicleFilters.class}, '') = '' OR vehicles.class::TEXT = ${vehicleFilters.class.toUpperCase()})
					AND (COALESCE(${vehicleFilters.category}, '') = '' OR vehicles.category::TEXT = ${vehicleFilters.category.toUpperCase()});
			  `;

				return drivers;
			}
		}
	}
});


const removePasswords = (data) => {
    if (Array.isArray(data)) {
        return data.map(item => removePasswords(item));
    } else if (data && typeof data === 'object') {
        const { password, ...rest } = data;
        for (const key in rest) {
            if (typeof rest[key] === 'object') {
                rest[key] = removePasswords(rest[key]);
            }
        }
        return rest;
    }
    return data;
};

module.exports = prisma;
