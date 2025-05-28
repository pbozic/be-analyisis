import { config } from 'dotenv';

import prisma from './prisma.js';
import userSeed from './seeders/userSeeder.js';
import allergernSeed from './seeders/alergenSeeder.js';
import fiscalDevicesSeeder from './seeders/fiscalDevicesSeeder.js';
import categoriesSeed from './seeders/categoriesSeeder.js';
import cuisinesSeed from './seeders/dietsSeeder.js';
import promoSectionSeed from './seeders/promoSectionSeeder.js';
import municipalitiesSeeder from './seeders/municipalitiesSeeder.js';
import settlementSeeder from './seeders/settlementSeeder.js';
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
