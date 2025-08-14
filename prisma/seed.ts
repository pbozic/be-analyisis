import { config } from 'dotenv';

import prisma from './prisma.js';
import allergernSeed from './seeders/alergenSeeder.js';
import fiscalDevicesSeeder from './seeders/fiscalDevicesSeeder.js';
import categoriesSeed from './seeders/restaurantsCategoriesSeeder.js';
import cuisinesSeed from './seeders/dailyMealsCategoriesSeeder.js';
import promoSectionSeed from './seeders/promoSectionSeeder.js';
import municipalitiesSeeder from './seeders/municipalitiesSeeder.js';
import settlementSeeder from './seeders/settlementSeeder.js';
import subscriptionSeeder from './seeders/subscriptionSeeder.ts';
import taxRatesSeeder, { TAX_RATES } from './seeders/taxRatesSeeder.ts';
import localLocationsSeeder, { LOCATIONS } from './seeders/localLocationsSeeder.ts';
import { seedRolesAndPermissions } from './seeders/ReservationRoleAndPermissionSeeder.ts';
({ config }).config();
async function main() {
	if (process.env.ENVIRONMENT === 'development') {
		// await userSeed();
		// await driverSeed();
	}
	await allergernSeed();
	await categoriesSeed();
	await cuisinesSeed();
	await promoSectionSeed();
	await municipalitiesSeeder();
	await fiscalDevicesSeeder();
	await settlementSeeder();
	await subscriptionSeeder();
	await taxRatesSeeder(TAX_RATES, false);
	await localLocationsSeeder(LOCATIONS, false);
	await seedRolesAndPermissions();
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
