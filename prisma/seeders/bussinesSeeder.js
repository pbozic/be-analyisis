const prisma = require("../prisma");
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");
const BCRYPT_SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS) || 12;

async function bussinesSeed() {
	return new Promise(async (resolve, reject) => {
		console.log("Seeding bussines users...");
		const users = [];
		
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        let user_role = i == 0 ? "ADMIN" : "PERSONAL";
        let hash = await bcrypt.hash("testuserpassword", BCRYPT_SALT_ROUNDS);
        const user = {
            first_name: firstName,
            last_name: lastName,
            date_of_birth: faker.date.past(30).toISOString(),
            email: `bussines${i + 1}@veryfakeemail.com`,
            password: hash,
            telephone: faker.phone.number(),
            user_role: user_role,
        };

        users.push(
            prisma.users.upsert({
                where: { email: user.email },
                update: { ...user },
                create: { ...user },
            }),
        );
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

module.exports = bussinesSeed;
