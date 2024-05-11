const prisma = require("../prisma");
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");
async function userSeed() {
	return new Promise(async (resolve, reject) => {
		console.log("Seeding users...");
		const amountOfUsers = 5;
		const users = [];
		for (let i = 0; i < amountOfUsers; i++) {
			const firstName = faker.person.firstName();
			const lastName = faker.person.lastName();
			let hash = await bcrypt.hash("testuserpassword", 12);
			const user = {
				first_name: firstName,
				last_name: lastName,
				email: `test${i + 1}@veryfakeemail.com`,
				password: hash,
				telephone: faker.phone.number(),
				user_role: "PERSONAL",
			};

			users.push(
				prisma.users.upsert({
					where: { email: user.email },
					update: { ...user },
					create: { ...user },
				}),
			);
		}
		try {
			await Promise.all(users).then((values) => {
				console.log("Users seeded!");
				resolve();
			});
		} catch (error) {
			reject(error);
		}
	});
}

module.exports = userSeed;
