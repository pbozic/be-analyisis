require("dotenv").config();

const prisma = require("./prisma");
const userSeed = require("./seeders/userSeeder");
const allergernSeed = require("./seeders/alergenSeeder");

async function main() {
	if (process.env.ENVIRONMENT === "development") {
		await userSeed();
	}
	await allergernSeed();
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
