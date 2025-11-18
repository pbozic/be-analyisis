import fs from 'fs';
import path from 'node:path';
import url from 'node:url';
import { Buffer } from 'node:buffer';

import Holidays from 'date-holidays';
import { TokenType, TAXI_ORDER_STATUS, VEHICLE_CLASS } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import { DeliveryOrderBase, DeliveryOrderDetail } from '../schemas/dto/DeliveryOrders/deliveryOrder.dto.js';
import { BusinessBase } from '../schemas/dto/Business/business.js';
import { TaxiOrderBase } from '../schemas/dto/TaxiOrders/taxiOrder.dto.js';
import { DriverDetail } from '../schemas/dto/Driver/index.js';
import { DriverEarnings, DriverTotalEarnings, DriverDailyEarningsBreakdown } from '../schemas/dto/Driver/driver.dto.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type LatLng = { latitude: number; longitude: number };

/**
 * Sleeps for the given milliseconds.
 * @param {number} ms - Milliseconds to wait.
 * @returns {Promise<void>} Resolves after the timeout.
 */
export function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => globalThis.setTimeout(resolve, ms));
}

type TruthyRecord = Record<string, string | number | boolean | null | undefined>;
/**
 * Validates that all provided fields are truthy.
 * @param {TruthyRecord} fields - Key-value pairs to validate.
 * @returns {boolean} True if all values are truthy; otherwise false.
 */
export const validateUserInput = (fields: TruthyRecord): boolean => {
	for (const key in fields) {
		if (!fields[key]) {
			return false;
		}
	}
	return true;
};

type QueryPreferences = {
	adults?: number | string;
	children_under_140?: number | string;
	fixedPrice?: number | string;
	isAbove?: number | string;
	isBelow?: number | string;
};

type QueryWhere = {
	preferences?: QueryPreferences;
	rideRequirements?: Record<string, boolean>;
	driver_id?: string;
	status?: string | string[];
};

/**
 * Builds a Prisma-compatible where object based on a query filter.
 * @param {QueryWhere} queryWhere - Filter with preferences, ride requirements, driver_id, status.
 * @returns {object} Where clause for Prisma queries.
 */
export const buildWhereObject = (queryWhere: QueryWhere): Record<string, unknown> => {
	const where: Record<string, unknown> = {};
	if (queryWhere.preferences) {
		const { adults, children_under_140, fixedPrice, isAbove, isBelow } = queryWhere.preferences;
		if (adults !== undefined) {
			where.preferences = {
				path: ['adults'],
				equals: parseInt(String(adults)),
			};
		}
		if (children_under_140 !== undefined) {
			where.preferences = {
				...(where.preferences as object),
				path: ['children_under_140'],
				equals: parseInt(String(children_under_140)),
			};
		}
		if (fixedPrice !== undefined) {
			where.payment = {
				...(where.preferences as object),
				path: ['price'],
				equals: parseFloat(String(fixedPrice)),
			};
		}
		if (isAbove !== undefined) {
			where.payment = {
				...(where.payment as object),
				path: ['price'],
				gt: parseFloat(String(isAbove)),
			};
		}
		if (isBelow !== undefined) {
			where.payment = {
				...(where.payment as object),
				path: ['price'],
				lt: parseFloat(String(isBelow)),
			};
		}
	}
	if (queryWhere.rideRequirements) {
		const selectedRequirements = Object.keys(queryWhere.rideRequirements).filter((req) =>
			Boolean(queryWhere.rideRequirements?.[req])
		);
		if (selectedRequirements.length > 0) {
			selectedRequirements.forEach((req) => {
				where.preferences = {
					...(where.preferences as object),
					path: ['ride_requirements', req],
					equals: true,
				};
			});
		}
	}
	if (queryWhere.driver_id) {
		where['driver_id'] = queryWhere.driver_id;
	}
	if (queryWhere.status) {
		where['status'] = Array.isArray(queryWhere.status) ? { in: queryWhere.status } : queryWhere.status;
	}
	return where;
};
/**
 * Attempts to JSON.parse a value and falls back to original on error.
 * @param {string | object} item - Value to parse.
 * @returns {object} Parsed value or original input.
 */
export const jsonParse = (item: string | object): string | object => {
	const value = item;
	try {
		return typeof item === 'string' ? JSON.parse(item) : item;
	} catch {
		return value;
	}
};
/**
 * Formats a date as `D. M. YYYY` for menu display.
 * @param {Date|string|number} date - Date input.
 * @returns {string} Formatted date.
 */
export const displayValidFromMenuFormat = (date: Date | string | number): string => {
	const d = new Date(date);
	const day = d.getDate();
	const month = d.getMonth() + 1;
	const year = d.getFullYear();
	console.log('DATE:', date, `${day}. ${month}. ${year}`);
	return `${day}. ${month}. ${year}`;
};
/**
 * Formats a numeric price to 2 decimals with comma separator.
 * @param {number|string} price - Price input.
 * @returns {string} Formatted price string.
 */
export const displayPrice = (price: number | string): string => {
	return displayDecimalValue(Number(price).toFixed(2));
};
/**
 * Replaces decimal point with comma.
 * @param {number|string} price - Numeric string.
 * @returns {string} String with comma decimal.
 */
export const displayDecimalValue = (price: number | string): string => {
	return price.toString().replace('.', ',');
};
/**
 * Loads a local image file and returns a base64 data URL.
 * @param {string} imagePath - Relative path to image under current dir.
 * @returns {string|null} Data URL, or null when imagePath is falsy.
 */
export function getImageInBase64(imagePath: string | null | undefined): string | null {
	if (imagePath) {
		const imageFileType = imagePath.substring(imagePath.lastIndexOf('.') + 1);
		const base64Prefix = `data:image/${imageFileType};charset=utf-8;base64,`;
		const image = fs.readFileSync(path.join(__dirname, imagePath));
		return base64Prefix + Buffer.from(image).toString('base64');
	}
	return null;
}
/**
 * Tries to detect a MIME type from a file extension string.
 * @param {string} fileExt - Filename or extension.
 * @returns {string|null} MIME type, currently only pdf, otherwise null.
 */
export const parseMimeType = (fileExt?: string | null): string | null => {
	if (!fileExt) {
		return null;
	}
	if (fileExt.includes('.pdf')) {
		return 'application/pdf';
	}
	return null;
};
/**
 * Calculates haversine distance in kilometers between two {latitude, longitude} coordinates.
 * @param {LatLng} coords1 - First point.
 * @param {LatLng} coords2 - Second point.
 * @returns {number} Distance in km.
 */
export const haversineDistance = (coords1: LatLng, coords2: LatLng): number => {
	const toRad = (x: number) => (x * Math.PI) / 180;
	const R = 6371;
	const dLat = toRad(coords2.latitude - coords1.latitude);
	const dLon = toRad(coords2.longitude - coords1.longitude);
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(toRad(coords1.latitude)) * Math.cos(toRad(coords2.latitude)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	return R * c;
};
/**
 * Finds nearest address to a given coordinate.
 * @param {LatLng} currentAddress - Origin coordinate.
 * @param {LatLng[]} addresses - Candidate list.
 * @returns {LatLng|null} Nearest address or null.
 */
export const findNearestAddress = (currentAddress: LatLng, addresses: LatLng[]): LatLng | null => {
	if (addresses.length === 0) return null;
	return addresses.reduce<{ address: LatLng; distance: number } | null>((nearest, address) => {
		const distance = haversineDistance(currentAddress, address);
		if (!nearest || distance < nearest.distance) {
			return { address, distance };
		}
		return nearest;
	}, null)!.address;
};
/**
 * Produces a route via greedy nearest-neighbor heuristic (addresses array).
 * @param {LatLng[]} addresses - Address list (>=1).
 * @returns {LatLng[]} Sorted addresses.
 */
export const sortLocationsByNearestNeighbor = (addresses: LatLng[]): LatLng[] => {
	if (addresses.length <= 2) return addresses;
	const startAddress = addresses[0]!;
	const remainingAddresses = addresses.slice(1);
	const sortedRoute: LatLng[] = [startAddress];
	let currentAddress: LatLng = startAddress;
	while (remainingAddresses.length > 0) {
		const nearestAddress = findNearestAddress(currentAddress, remainingAddresses);
		if (!nearestAddress) break;
		sortedRoute.push(nearestAddress);
		currentAddress = nearestAddress;
		remainingAddresses.splice(remainingAddresses.indexOf(nearestAddress), 1);
	}
	return sortedRoute;
};

type ObjWithAddress<T = unknown> = T & { address: LatLng };

/**
 * Finds nearest object by comparing nested address coordinates with haversine.
 * @param {ObjWithAddress} current - Current object.
 * @param {ObjWithAddress[]} arr - Candidate objects.
 * @returns {object|null} Nearest object or null.
 */
export const findNearestObj = <T>(
	current: ObjWithAddress<T>,
	arr: Array<ObjWithAddress<T>>
): ObjWithAddress<T> | null => {
	if (!arr || arr.length === 0) return null;
	const result = arr.reduce<{ obj: ObjWithAddress<T>; distance: number } | null>((nearest, obj) => {
		const distance = haversineDistance(current.address, obj.address);
		if (!nearest || distance < nearest.distance) {
			return { obj, distance };
		}
		return nearest;
	}, null);
	return result?.obj ?? null;
};
/**
 * Greedy nearest-neighbor sort for objects with address.{latitude,longitude}.
 * @param {Array<ObjWithAddress<T>>} objects - Objects to sort.
 * @returns {Array<ObjWithAddress<T>>} Sorted objects.
 */
export const sortObjectsByNearestNeighbor = <T>(objects: Array<ObjWithAddress<T>>): Array<ObjWithAddress<T>> => {
	if (!objects || objects.length <= 2) return objects;
	const startObject = objects[0]!;
	const unsortedObjects = objects.slice(1);
	const sortedObjects: Array<ObjWithAddress<T>> = [startObject];
	let currentObject: ObjWithAddress<T> = startObject;
	while (unsortedObjects.length > 0) {
		const nearestObject = findNearestObj(currentObject, unsortedObjects);
		if (!nearestObject) break;
		sortedObjects.push(nearestObject);
		currentObject = nearestObject;
		unsortedObjects.splice(unsortedObjects.indexOf(nearestObject), 1);
	}
	return sortedObjects;
};
// Haversine formula to calculate distance between two points (in kilometers)
/**
 * Computes distance (km) between two lat/lon pairs using haversine implementation.
 * @param {number} lat1
 * @param {number} lon1
 * @param {number} lat2
 * @param {number} lon2
 * @returns {number} Distance in km.
 */
export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
	const R = 6371;
	const dLat = (lat2 - lat1) * (Math.PI / 180);
	const dLon = (lon2 - lon1) * (Math.PI / 180);
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	return R * c;
};
// Function to calculate time difference in minutes
/**
 * Calculates absolute time difference in minutes between two timestamps.
 * @param {Date|string|number} time1
 * @param {Date|string|number} time2
 * @returns {number} Minutes difference.
 */
export const calculateTimeDifference = (time1: Date | string | number, time2: Date | string | number): number => {
	const diffMs = Math.abs(+new Date(time2) - +new Date(time1));
	return diffMs / (1000 * 60);
};
/**
 * Formats distance and HH:MM components into display strings.
 * @param {number} distance - Distance in km.
 * @param {number} hours - Hours traveled.
 * @param {number} minutes - Minutes traveled.
 * @returns {[string,string]} [distanceStr, timeStr] display values.
 */
function formatDistanceTimeTravelled(distance: number, hours: number, minutes: number): [string, string] {
	const distanceStr = distance > 0 ? `${distance.toFixed(2)} km` : '';
	let timeStr = '';
	if (hours > 0) {
		timeStr += `${hours}h`;
	}
	if (minutes > 0) {
		timeStr += ` ${minutes}min`;
	}
	return [distanceStr, timeStr];
}

const hd = new Holidays('SI');
/**
 * Checks if today is a public holiday in SI locale.
 * @returns {boolean} True if today is a holiday.
 */
export function isTodayHoliday(): boolean {
	const now = new Date();
	const today = now.toISOString().split('T')[0]!; // YYYY-MM-DD
	const holiday = hd.isHoliday(today as string);
	return holiday !== null;
}
/**
 * Determines if a business is open now, checking current day ranges and holidays.
 * @param {Record<string, string[][]>} working_hours - Map day->time-range tuples [[start,end]].
 * @returns {boolean} True when open.
 */
export function isBusinessOpen(working_hours: Record<string, string[][]>): boolean {
	const now = new Date();
	let currentDay: string = now.toLocaleString('en-US', { weekday: 'long' }).toLowerCase().substring(0, 3);
	const currentTime: string = now.toTimeString().split(' ')[0]!;
	if (isTodayHoliday()) {
		currentDay = 'holidays';
	}
	const workingHours = working_hours[currentDay];
	if (!workingHours) return false;
	for (const range of workingHours) {
		const [startTime, endTime] = range as [string, string];
		if (currentTime >= startTime && currentTime <= endTime) {
			return true;
		}
	}
	return false;
}

/**
 * Summarizes business earnings and time/distance traveled from orders.
 * @param {DeliveryOrderDetail[]} orders - Completed orders including items and timeline.
 * @param {BusinessBase} business - Business object for working hours and name.
 * @returns {object} Summary metrics for dashboards.
 */
export function calculateBusinessEarnings(orders: DeliveryOrderDetail[], business: BusinessBase) {
	if (orders && orders.length > 0) {
		const totalEarnings = orders.reduce((sum, order) => {
			const totalItemsPrice = order.items?.reduce((itemSum, item) => {
				return itemSum + parseFloat(String(item.price || 0));
			}, 0) as number;
			return sum + (totalItemsPrice - parseFloat(String(order.details?.delivery_cost)) || 0) || 0;
		}, 0);
		const totalDurationInMinutes = orders.reduce((sum, order) => {
			const timeline = order.timeline;
			const acceptedTimestamp = timeline.find((entry) => entry.status === 'DELIVERY_ACCEPTED')?.location
				?.timestamp;
			const completedTimestamp = timeline.find((entry) => entry.status === 'DELIVERY_COMPLETED')?.location
				?.timestamp;
			if (acceptedTimestamp && completedTimestamp) {
				const start = new Date(acceptedTimestamp);
				const end = new Date(completedTimestamp);
				const durationInMinutes = (Number(end) - Number(start)) / (1000 * 60);
				return sum + durationInMinutes;
			}
			return sum;
		}, 0);
		const totalDurationInHours = totalDurationInMinutes / 60;
		const hourlyEarnings = totalDurationInHours > 0 ? (totalEarnings / totalDurationInHours).toFixed(2) : '0.00';
		const distance = orders.reduce((totalDistance, order) => {
			return totalDistance + parseFloat(String(order.details?.distance || 0));
		}, 0);
		const hours = Math.floor(totalDurationInMinutes / 60);
		const minutes = Math.floor(totalDurationInMinutes % 60);
		const [distance_travelled, time_travelled] = formatDistanceTimeTravelled(distance, hours, minutes);
		return {
			are_open: isBusinessOpen(business.working_hours as Record<string, string[][]>),
			business: business.name,
			total_earnings: `€${totalEarnings.toFixed(2)}`,
			number_of_orders: orders.length,
			hourly_earnings: `${hourlyEarnings} €/h`,
			distance_travelled: distance_travelled !== '' ? distance_travelled : '0 km',
			time_travelled: time_travelled !== '' ? time_travelled : '0 min',
			earnings_fee: `€${(totalEarnings * 0.1).toFixed(2)}`,
		};
	}
	console.log('error in calculateBusinessEarnings! completedOrders length:', orders?.length || 0);
	return {
		are_open: isBusinessOpen(business.working_hours as Record<string, string[][]>),
		business: business.name,
		total_earnings: '€0.00',
		number_of_orders: 0,
		distance_travelled: '0 km',
		time_travelled: '0 min',
		hourly_earnings: '0.00 €/h',
		earnings_fee: '€0.00',
	};
}

/**
 * Aggregates driver earnings across taxi and delivery orders.
 * @param {(TaxiOrderBase | DeliveryOrderBase)[]} driverOrders - Orders for a driver.
 * @param {DriverDetail} driver - Driver object with user and vehicles.
 * @returns {object} Earnings summary.
 */
export function calculateDriversEarnings(
	driverOrders: (TaxiOrderBase | DeliveryOrderBase)[],
	driver: DriverDetail
): Partial<DriverEarnings> {
	if (driverOrders && driverOrders.length > 0) {
		const totalEarnings = driverOrders.reduce((sum, order) => {
			if (order.status === TAXI_ORDER_STATUS.TAXI_COMPLETED) {
				return (
					sum +
					(parseFloat(String(order.payment?.price)) || 0) +
					(parseFloat(String(order.payment?.extras?.price)) || 0)
				);
			}
			return sum + (parseFloat(String(order.details?.delivery_cost)) || 0);
		}, 0);
		const numberOfRides = driverOrders.length;
		const totalDurationInMinutes = driverOrders.reduce((sum, order) => {
			const timeline = order.timeline;
			const acceptedTimestamp = timeline.find((entry) => entry.status === 'TAXI_ACCEPTED')?.location?.timestamp;
			const completedTimestamp = timeline.find((entry) => entry.status === 'TAXI_COMPLETED')?.location?.timestamp;
			if (acceptedTimestamp && completedTimestamp) {
				const start = new Date(acceptedTimestamp);
				const end = new Date(completedTimestamp);
				const durationInMinutes = (Number(end) - Number(start)) / (1000 * 60);
				return sum + durationInMinutes;
			}
			return sum;
		}, 0);
		const totalDurationInHours = totalDurationInMinutes / 60;
		const hourlyEarnings = totalDurationInHours > 0 ? (totalEarnings / totalDurationInHours).toFixed(2) : '0.00';
		const distance = driverOrders.reduce((totalDistance, order) => {
			return totalDistance + parseFloat(String(order.payment?.distance || 0));
		}, 0);
		const hours = Math.floor(totalDurationInMinutes / 60);
		const minutes = Math.floor(totalDurationInMinutes % 60);
		const [distance_travelled, time_travelled] = formatDistanceTimeTravelled(distance, hours, minutes);
		return {
			is_online: driver?.online,
			license_plate: driver?.current_vehicle?.license_plate,
			driver: `${driver?.user?.first_name ?? ''} ${driver?.user?.last_name ?? ''}`.trim(),
			total_earnings: `€${totalEarnings.toFixed(2)}`,
			number_of_rides: numberOfRides,
			hourly_earnings: `${hourlyEarnings} €/h`,
			distance_travelled: distance_travelled !== '' ? distance_travelled : '0 km',
			time_travelled: time_travelled !== '' ? time_travelled : '0 min',
			earnings_fee: `€${(totalEarnings * 0.1).toFixed(2)}`,
		};
	}
	return {
		is_online: driver?.online,
		license_plate: driver?.current_vehicle?.license_plate,
		driver: `${driver?.user?.first_name ?? ''} ${driver?.user?.last_name ?? ''}`.trim(),
		total_earnings: '€0.00',
		number_of_rides: 0,
		hourly_earnings: '0.00 €/h',
		distance_travelled: '0 km',
		time_travelled: '0 min',
		earnings_fee: '€0.00',
	};
}

/**
 * Computes earnings totals (today, weekly, monthly, total) or per-day breakdown.
 * @param {(TaxiOrderBase | DeliveryOrderBase)[]} completedOrders - Orders list.
 * @param {boolean} [detailed=false] - If true, returns map of date->sum; else totals.
 * @param {boolean} [business=false] - If true, uses order.details.total_price instead of delivery cost.
 * @returns {object} Totals or daily breakdown.
 */
export function calculateTotalEarnings(
	completedOrders: (TaxiOrderBase | DeliveryOrderBase)[],
	detailed: boolean = false,
	business: boolean = false
): DriverTotalEarnings | DriverDailyEarningsBreakdown {
	if (completedOrders && completedOrders.length > 0) {
		let todaysEarnings = 0;
		let weeklyEarnings = 0;
		let monthlyEarnings = 0;
		let totalEarnings = 0;
		const now = new Date();
		const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
		const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
		const earningsByDate = completedOrders.reduce<Record<string, number>>((acc, order) => {
			const orderDate = new Date(order.updated_at as string);
			const daysDiff = Math.floor((Number(now) - Number(orderDate)) / (1000 * 60 * 60 * 24));
			const weeksDiff = Math.floor(daysDiff / 7);
			const monthsDiff = Math.floor(daysDiff / 30);
			let orderAmount = 0;
			if (order.status === TAXI_ORDER_STATUS.TAXI_COMPLETED) {
				orderAmount = parseFloat(String(order.payment?.price)) || 0;
				if ((order as TaxiOrderBase).preferences?.vehicle_class !== VEHICLE_CLASS.PRIVATE_DRIVER) {
					orderAmount += parseFloat(String(order.payment?.extras?.price)) || 0;
				}
			} else {
				orderAmount =
					parseFloat(String(business ? order.details?.total_price : order.details?.delivery_cost)) || 0;
			}
			if (!detailed) {
				totalEarnings += orderAmount;
				if (orderDate >= startOfDay && orderDate <= endOfDay) todaysEarnings += orderAmount;
				if (weeksDiff === 0) weeklyEarnings += orderAmount;
				if (monthsDiff === 0) monthlyEarnings += orderAmount;
			} else {
				const date = orderDate.toISOString().slice(0, 10);
				acc[date] = (acc[date] || 0) + orderAmount;
			}
			return acc;
		}, {});
		return !detailed
			? { todaysEarnings, weeklyEarnings, monthlyEarnings, totalEarnings }
			: { breakdown: earningsByDate };
	}
	console.log('Calculating total earnings, completed orders length:', completedOrders.length);
	return !detailed
		? { todaysEarnings: 0, weeklyEarnings: 0, monthlyEarnings: 0, totalEarnings: 0 }
		: { breakdown: {} };
}

/**
 * Sums earnings for orders that completed today for a given status type.
 * @param {(TaxiOrderBase | DeliveryOrderBase)[]} orders - Orders list with timeline.
 * @param {string} type - Timeline status to check (e.g., TAXI_COMPLETED).
 * @returns {number} Earnings today.
 */
export function todaysEarnings(orders: (TaxiOrderBase | DeliveryOrderBase)[], type: string): number {
	let todays = 0;
	if (orders && orders.length > 0) {
		orders.forEach((order) => {
			const matched = order.timeline?.find((item) => item.status === type);
			const timestamp = matched?.location?.timestamp;
			if (timestamp) {
				if (type === TAXI_ORDER_STATUS.TAXI_COMPLETED) {
					const taxiOrder = order as TaxiOrderBase;
					todays += parseFloat(String(taxiOrder.payment?.price)) || 0;
					if (taxiOrder.preferences?.vehicle_class !== VEHICLE_CLASS.PRIVATE_DRIVER) {
						todays += parseFloat(String(taxiOrder.payment?.extras?.price)) || 0;
					}
				} else {
					todays += parseFloat(String(order.details?.delivery_cost)) || 0;
				}
			}
		});
	} else {
		console.log("No orders found for today's earnings calculation.");
	}
	return todays;
}
/**
 * Normalizes SI phone numbers by stripping spaces and prefixing +386 when starting with 0.
 * @param {string} telephone - Phone input.
 * @returns {string} Normalized phone string.
 */
export function parseTelephone(telephone: string): string {
	if (telephone && !telephone.includes('@') && telephone.startsWith('0')) {
		return telephone.replace(/\s+/g, '').replace(/^0/, '+386');
	}
	return telephone;
}
/**
 * Generates an array [0..n-1].
 * @param {number} n - Count.
 * @returns {number[]} Range array.
 */
export const range = (n: number): number[] => Array.from(Array(n).keys());
/**
 * Computes private driver flat fee by distance brackets.
 * @param {number} distance - Distance in km.
 * @returns {number} Fee in currency units.
 */
export function calculatePrivateDriverFee(distance: number): number {
	if (distance <= 10) return 40;
	else if (distance <= 20) return 60;
	else if (distance <= 30) return 80;
	else if (distance <= 40) return 100;
	else if (distance <= 60) return 120;
	else if (distance <= 70) return 140;
	else if (distance <= 80) return 160;
	else if (distance <= 100) return 180;
	else if (distance <= 120) return 200;
	else if (distance <= 150) return 250;
	else return 0;
}
/**
 * Deletes expired business registration tokens from DB.
 * @returns {Promise<void>}
 */
export async function clearExpiredRegistrationTokens(): Promise<void> {
	await prisma.tokens.deleteMany({
		where: {
			type: TokenType.BUSINESS_REGISTRATION,
			expires_at: { lt: new Date() },
		},
	});
}

export default {
	buildWhereObject,
	validateUserInput,
	jsonParse,
	displayDecimalValue,
	displayPrice,
	displayValidFromMenuFormat,
	parseMimeType,
	haversineDistance,
	sortLocationsByNearestNeighbor,
	sortObjectsByNearestNeighbor,
	sleep,
	range,
	calculateDistance,
	calculateTimeDifference,
	calculateBusinessEarnings,
	calculateDriversEarnings,
	calculateTotalEarnings,
	todaysEarnings,
	parseTelephone,
	calculatePrivateDriverFee,
	clearExpiredRegistrationTokens,
	getImageInBase64,
};
