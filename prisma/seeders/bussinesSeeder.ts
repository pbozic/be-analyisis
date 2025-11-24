import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import prisma from '../prisma';
import { config } from 'dotenv';
config();
const BCRYPT_SALT_ROUNDS: number = Number(process.env.BCRYPT_SALT_ROUNDS) || 12;

async function bussinesSeed() {
	try {
		console.log('Seeding bussines users...');
		for (let i = 0; i < 3; i++) {
			const firstName = faker.person.firstName();
			const lastName = faker.person.lastName();
			let user_role = i == 0 ? 'ADMIN' : 'PERSONAL';
			let hash = await bcrypt.hash('testuserpassword', BCRYPT_SALT_ROUNDS);
			const user = {
				first_name: firstName,
				last_name: lastName,
				date_of_birth: faker.date.past({ years: 30 }).toISOString(),
				email: `bussines${i + 1}@veryfakeemail.com`,
				password: hash,
				telephone: faker.phone.number(),
				user_role: user_role,
			};

			await prisma.users.upsert({
				where: { email: user.email },
				update: { ...user },
				create: { ...user },
			});
		}
	} catch (error) {
		console.error('Error seeding bussines users:', error);
	}
}

module.exports = bussinesSeed;
