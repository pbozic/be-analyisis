import { config } from 'dotenv';
import { PrismaClient } from '@prisma/client';
import * as turf from '@turf/turf';

import { handleAddressPivotTable, addAddressPivotTable } from './middlewares/address.js';
import { handleHidePassword, alwaysAddWalletBalance, handleWalletBalance } from './middlewares/user.js';
import { handleS3LinkForFiles } from './middlewares/file.js';
import { handleS3LinkForDocuments } from './middlewares/documents.js';
import { generateS3LinksRecursively } from './middlewares/$allModels.js';
config();
console.log(process.env.DATABASE_URL);
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
				if (operation.startsWith('find')) {
					args = {
						orderBy: {
							code: 'asc',
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
			},
		},
		documents: {
			async $allOperations({ model, operation, args, query }) {
				// If the operation is a query on the `documents` model
				// Proceed with the operation
				let result = await query(args);
				result = await handleS3LinkForDocuments(model, operation, args, query, result);
				// Return the modified result
				return result;
			},
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
				if (points.length < 2) throw new Error('At least two points are required.');
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
			},
		},
		drivers: {
			async inRadius(
				point,
				radiusInMeters,
				requirements,
				vehicleFilters,
				region_id = null,
				region_license = false
			) {
				console.log('vehicle filters', vehicleFilters);
				console.log('requirements', requirements);
				const drivers = await prisma.$queryRaw`
					SELECT drivers.*, vehicles.*
					FROM drivers
					JOIN vehicles ON vehicles.vehicle_id = drivers.current_vehicle_id
					LEFT JOIN driver_municipalities dm
						ON dm.driver_id = drivers.driver_id
						AND dm.municipalities_id = ${region_id}::uuid
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
						AND (${region_license} = false OR dm.municipalities_id IS NOT NULL)
						AND (
						COALESCE(${requirements.traveling_with_pet}, FALSE) = FALSE
						OR (drivers.ride_requirements->'traveling_with_pet')::BOOLEAN = ${requirements.traveling_with_pet}
						)
						AND (
						COALESCE(${requirements.child_seat}, FALSE) = FALSE
						OR (drivers.ride_requirements->'child_seat')::BOOLEAN = ${requirements.child_seat}
						)
						AND (
						COALESCE(${requirements.wheelchair_accessibility}, FALSE) = FALSE
						OR (drivers.ride_requirements->'wheelchair_accessibility')::BOOLEAN = ${requirements.wheelchair_accessibility}
						)
						AND (
						(
							COALESCE(${vehicleFilters.class}, '') = ''
							AND vehicles.class::TEXT NOT IN ('MINIVAN', 'MINIBUS', 'BUS', 'CARGO_VAN')
						)
						OR vehicles.class::TEXT = ${vehicleFilters.class.toUpperCase()}
						)
						AND (
						COALESCE(${vehicleFilters.category}, '') = ''
						OR vehicles.category::TEXT = ${vehicleFilters.category.toUpperCase()}
						)
						AND (
						(
							COALESCE(${requirements.language_en}, FALSE) = FALSE AND
							COALESCE(${requirements.language_it}, FALSE) = FALSE AND
							COALESCE(${requirements.language_de}, FALSE) = FALSE AND
							COALESCE(${requirements.language_es}, FALSE) = FALSE AND
							COALESCE(${requirements.language_hr}, FALSE) = FALSE AND
							COALESCE(${requirements.language_fr}, FALSE) = FALSE AND
							COALESCE(${requirements.language_ru}, FALSE) = FALSE
						)
						OR (
							(COALESCE(${requirements.language_en}, FALSE) = TRUE AND (drivers.ride_requirements->'language_en')::BOOLEAN = TRUE) OR
							(COALESCE(${requirements.language_it}, FALSE) = TRUE AND (drivers.ride_requirements->'language_it')::BOOLEAN = TRUE) OR
							(COALESCE(${requirements.language_de}, FALSE) = TRUE AND (drivers.ride_requirements->'language_de')::BOOLEAN = TRUE) OR
							(COALESCE(${requirements.language_es}, FALSE) = TRUE AND (drivers.ride_requirements->'language_es')::BOOLEAN = TRUE) OR
							(COALESCE(${requirements.language_hr}, FALSE) = TRUE AND (drivers.ride_requirements->'language_cro')::BOOLEAN = TRUE) OR
							(COALESCE(${requirements.language_fr}, FALSE) = TRUE AND (drivers.ride_requirements->'language_fr')::BOOLEAN = TRUE) OR
							(COALESCE(${requirements.language_ru}, FALSE) = TRUE AND (drivers.ride_requirements->'language_ru')::BOOLEAN = TRUE)
						)
						);
				`;
				return drivers;
			},
		},
	},
});
const removeSensitiveProperties = (data, propertiesToRemove = ['password']) => {
	if (Array.isArray(data)) {
		// Recursively process array items
		return data.map((item) => removeSensitiveProperties(item, propertiesToRemove));
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
export default prisma;
