require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
console.log(process.env.DATABASE_URL);
const { handleAddressPivotTable, addAddressPivotTable } = require("./middlewares/address");
const { handleHidePassword, alwaysAddWalletBalance, handleWalletBalance } = require("./middlewares/user");
const { handleS3LinkForFiles } = require("./middlewares/file");
const { handleS3LinkForDocuments } = require("./middlewares/documents");
const {generateS3LinksRecursively } = require("./middlewares/$allModels")
const turf = require('@turf/turf');

const prisma = new PrismaClient({
	log: ['warn', 'error'],
}).$extends({
	query: {
		$allModels: {
			async $allOperations({ model, operation, args, query }) {
				// Proceed with the operation
				
				let result = await query(args);
				if (args.include && args.include.user) {
					result = removeSensitiveProperties(result);
				}
				result = await generateS3LinksRecursively(args, result, model, operation);
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
		promo_sections: {
			async findMany({ args, query }) {
				args.orderBy = args.orderBy ?? { order: 'asc' };
				return query(args);
			},
		},
	},
	model: {
		settlements: {
			async getSettlementFromLatLng({ latitude, longitude }) {
				const settlement = await prisma.$queryRaw`
					SELECT *
					FROM settlements
					WHERE ST_Intersects(
						geom_generated,
						ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)
					)
					LIMIT 1;
				`;
				return settlement[0] || null;
			},
			async checkIfTwoPointsAreInSameSettlement(point1, point2) {
				const settlement = await prisma.$queryRaw`
					SELECT settlement_id, name, municipalities_id, eid_naselje, feature_id,created_at, updated_at, geom_generated    
					FROM settlements
					WHERE ST_Intersects(geom_generated, ST_SetSRID(ST_MakePoint(${point1.longitude}, ${point1.latitude}), 4326))
					INTERSECT
					SELECT settlement_id, name, municipalities_id, eid_naselje, feature_id,created_at, updated_at, geom_generated 
					FROM settlements
					WHERE ST_Intersects(geom_generated, ST_SetSRID(ST_MakePoint(${point2.longitude}, ${point2.latitude}), 4326))
				`;

				return settlement[0] || null;
			},
			async checkIfAllPointsAreInSameSettlement(points) {
				if (points.length < 2) throw new Error("At least two points are required.");

				const [first, ...rest] = points;

				const [settlement] = await prisma.$queryRaw`
					SELECT settlement_id, name, geojson
					FROM settlements
					WHERE ST_Intersects(
					  geom_generated,
					  ST_SetSRID(ST_MakePoint(${first.longitude}, ${first.latitude}), 4326)
					)
					LIMIT 1;
		  		`;

				if (!settlement) return null;

				const polygon = turf.polygon(settlement.geojson.coordinates);
				const allInside = rest.every(({ longitude, latitude }) => {
					const pt = turf.point([longitude, latitude]);
					return turf.booleanPointInPolygon(pt, polygon);
				});

				return allInside ? settlement : null;
			}
		},
		drivers: {
			async inRadius(point, radiusInMeters, requirements, vehicleFilters) {
				console.log("vehicle filters", vehicleFilters);
				console.log("requirements", requirements);
			
				const drivers = await prisma.$queryRaw`
					SELECT drivers.*, vehicles.*
					FROM drivers
					JOIN vehicles ON vehicles.vehicle_id = drivers.current_vehicle_id
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
			
					-- Class filter (allow all unless specified)
					AND (
						${vehicleFilters.class} = '' 
						OR vehicles.class::TEXT = ${vehicleFilters.class.toUpperCase()}
					)
			
					-- Category filter
					AND (
						${vehicleFilters.category} = '' 
						OR vehicles.category::TEXT = ${vehicleFilters.category.toUpperCase()}
					)
			
					-- Ride requirement filters with COALESCE to avoid NULL
					AND COALESCE((drivers.ride_requirements->>'child_seats')::BOOLEAN, FALSE) = ${requirements.child_seats}
					AND COALESCE((drivers.ride_requirements->>'traveling_with_pet')::BOOLEAN, FALSE) = ${requirements.traveling_with_pet}
					AND COALESCE((drivers.ride_requirements->>'wheelchair_accessibility')::BOOLEAN, FALSE) = ${requirements.wheelchair_accessibility}
					AND COALESCE((drivers.ride_requirements->>'air_conditioning')::BOOLEAN, FALSE) = ${requirements.air_conditioning}
					AND COALESCE((drivers.ride_requirements->>'quiet_ride')::BOOLEAN, FALSE) = ${requirements.quiet_ride}
					AND COALESCE((drivers.ride_requirements->>'luggage')::BOOLEAN, FALSE) = ${requirements.luggage}
			
					-- Language filter
					AND (
					(${requirements.language_en} = FALSE AND
					${requirements.language_it} = FALSE AND
					${requirements.language_de} = FALSE AND
					${requirements.language_es} = FALSE AND
					${requirements.language_fr} = FALSE AND
					${requirements.language_ru} = FALSE AND
					${requirements.language_cro} = FALSE)
					OR (
						(${requirements.language_en} = TRUE AND COALESCE((drivers.ride_requirements->>'language_en')::BOOLEAN, FALSE) = TRUE) OR
						(${requirements.language_it} = TRUE AND COALESCE((drivers.ride_requirements->>'language_it')::BOOLEAN, FALSE) = TRUE) OR
						(${requirements.language_de} = TRUE AND COALESCE((drivers.ride_requirements->>'language_de')::BOOLEAN, FALSE) = TRUE) OR
						(${requirements.language_es} = TRUE AND COALESCE((drivers.ride_requirements->>'language_es')::BOOLEAN, FALSE) = TRUE) OR
						(${requirements.language_fr} = TRUE AND COALESCE((drivers.ride_requirements->>'language_fr')::BOOLEAN, FALSE) = TRUE) OR
						(${requirements.language_ru} = TRUE AND COALESCE((drivers.ride_requirements->>'language_ru')::BOOLEAN, FALSE) = TRUE) OR
						(${requirements.language_cro} = TRUE AND COALESCE((drivers.ride_requirements->>'language_cro')::BOOLEAN, FALSE) = TRUE)
					)
					)
				`;
			
				return drivers;
			}
			
			
		}
	}
});


const removeSensitiveProperties = (data, propertiesToRemove = ['password']) => {
	if (Array.isArray(data)) {
	  // Recursively process array items
	  return data.map(item => removeSensitiveProperties(item, propertiesToRemove));
	} else if (data && typeof data === 'object') {
	  if (data instanceof Date) {
		// Preserve Date objects as-is
		return data;
	  }
	  
	  // Create a new object excluding the properties to remove
	  const result = {};
	  for (const [key, value] of Object.entries(data)) {
		if (propertiesToRemove.includes(key)) {
		  // Skip the properties that should be removed
		  continue;
		}
		if (value && typeof value === 'object') {
		  result[key] = removeSensitiveProperties(value, propertiesToRemove);
		} else {
		  result[key] = value;
		}
	  }
	  return result;
	}
	
	// Return the data as-is if it's not an array or object
	return data;
  };

module.exports = prisma;
