require("dotenv").config();

const prisma = require("./prisma");
const userSeed = require("./seeders/userSeeder");
const allergernSeed = require("./seeders/alergenSeeder");
const driverSeed = require("./seeders/driverSeeder");
const categoriesSeed = require("./seeders/categoriesSeeder");
const cuisinesSeed = require("./seeders/dietsSeeder");
const promoSectionSeed = require("./seeders/promoSectionSeeder");
const municipalitiesSeeder = require("./seeders/municipalitiesSeeder");

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
