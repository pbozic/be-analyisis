require("dotenv").config();

const prisma = require("./prisma");
const userSeed = require("./seeders/userSeeder");
const allergernSeed = require("./seeders/alergenSeeder");
const fiscalDevicesSeeder = require("./seeders/fiscalDevicesSeeder");
const categoriesSeed = require("./seeders/categoriesSeeder");
const cuisinesSeed = require("./seeders/dietsSeeder");
const promoSectionSeed = require("./seeders/promoSectionSeeder");
const municipalitiesSeeder = require("./seeders/municipalitiesSeeder");
const settlementSeeder = require("./seeders/settlementSeeder");
async function main() {
	if (process.env.ENVIRONMENT === "development") {
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
