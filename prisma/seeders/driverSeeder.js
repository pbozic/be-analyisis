const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');

const prisma = require('../prisma');
const BCRYPT_SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS) || 12;
async function deliveryDriverSeed() {
	return new Promise(async (resolve, reject) => {
		console.log('Seeding users...');
		const amountOfUsers = 5;
		const users = [];
		for (let i = 0; i < amountOfUsers; i++) {
			const firstName = faker.person.firstName();
			const lastName = faker.person.lastName();
			let user_role = 'PERSONAL';
			let hash = await bcrypt.hash('testuserpassword', BCRYPT_SALT_ROUNDS);
			const user = {
				first_name: firstName,
				last_name: lastName,
				date_of_birth: faker.date.past(30).toISOString(),
				email: `delivery_driver${i + 1}@veryfakeemail.com`,
				password: hash,
				telephone: faker.phone.number(),
				user_role: user_role,
				reviewable: {
					create: {},
				},
			};

			users.push(
				prisma.users.upsert({
					where: { email: user.email },
					update: { ...user },
					create: { ...user },
				})
			);
		}
		try {
			let values = await Promise.all(users);
			let drivers = [];
			let locations = [
				{ latitude: 46.050189, longitude: 14.477443 },
				{ latitude: 46.054879, longitude: 14.483 },
				{ latitude: 46.06437, longitude: 14.473872 },
				{ latitude: 46.065809, longitude: 14.522401 },
				{ latitude: 46.048624, longitude: 14.537979 },
			];
			let cnt = 0;
			for (let val of values) {
				drivers.push(
					prisma.delivery_drivers.upsert({
						where: { user_id: val.user_id },
						update: {
							user_id: val.user_id,
							location: {
								coordinates: locations[cnt],
							},
						},
						create: {
							user_id: val.user_id,
							location: {
								coordinates: locations[cnt],
							},
						},
					})
				);
				cnt++;
			}
			let vehicles = [];
			await prisma.vehicle_specifications.deleteMany({});
			await prisma.vehicles.deleteMany({});
			let valuesDrivers = await Promise.all(drivers);
			for (let val of valuesDrivers) {
				console.log('Driver seeded: ', val);

				vehicles.push(
					prisma.vehicles.create({
						data: {
							driver_id: val.driver_id,
						},
					})
				);
			}
			let vehicle_specifications = [];
			let vehiclesValues = await Promise.all(vehicles);
			for (let val of vehiclesValues) {
				vehicle_specifications.push(
					prisma.vehicle_specifications.create({
						data: {
							class: 'SUV',
							category: 'STANDARD',
							people: '1',
							start_cost: '1',
							per_kilometre: '1',
							per_minute: '1',
							vehicle_id: val.vehicle_id,
							vehicle: {
								connect: {
									vehicle_id: val.vehicle_id,
								},
							},
						},
					})
				);
			}
			let vehicleSpecValues = await Promise.all(vehicle_specifications);
			resolve();
		} catch (error) {
			reject(error);
		}
	});
}
async function driverSeed() {
	return new Promise(async (resolve, reject) => {
		console.log('Seeding users...');
		const amountOfUsers = 5;
		const users = [];
		for (let i = 0; i < amountOfUsers; i++) {
			const firstName = faker.person.firstName();
			const lastName = faker.person.lastName();
			let user_role = 'PERSONAL';
			let hash = await bcrypt.hash('testuserpassword', BCRYPT_SALT_ROUNDS);
			const user = {
				first_name: firstName,
				last_name: lastName,
				date_of_birth: faker.date.past(30).toISOString(),
				email: `driver${i + 1}@veryfakeemail.com`,
				password: hash,
				telephone: faker.phone.number(),
				user_role: user_role,
				reviewable: {
					create: {},
				},
			};

			users.push(
				prisma.users.upsert({
					where: { email: user.email },
					update: { ...user },
					create: { ...user },
				})
			);
		}
		try {
			let values = await Promise.all(users);
			let drivers = [];
			let locations = [
				{ latitude: 46.050189, longitude: 14.477443 },
				{ latitude: 46.054879, longitude: 14.483 },
				{ latitude: 46.06437, longitude: 14.473872 },
				{ latitude: 46.065809, longitude: 14.522401 },
				{ latitude: 46.048624, longitude: 14.537979 },
			];
			let cnt = 0;
			for (let val of values) {
				drivers.push(
					prisma.drivers.upsert({
						where: { user_id: val.user_id },
						update: {
							user_id: val.user_id,
							location: {
								coordinates: locations[cnt],
							},
						},
						create: {
							user_id: val.user_id,
							location: {
								coordinates: locations[cnt],
							},
						},
					})
				);
				cnt++;
			}
			let vehicles = [];
			await prisma.vehicle_specifications.deleteMany({});
			await prisma.vehicles.deleteMany({});
			let valuesDrivers = await Promise.all(drivers);
			for (let val of valuesDrivers) {
				console.log('Driver seeded: ', val);

				vehicles.push(
					prisma.vehicles.create({
						data: {
							driver_id: val.driver_id,
						},
					})
				);
			}
			let vehicle_specifications = [];
			let vehiclesValues = await Promise.all(vehicles);
			for (let val of vehiclesValues) {
				vehicle_specifications.push(
					prisma.vehicle_specifications.create({
						data: {
							class: 'SUV',
							category: 'STANDARD',
							people: '1',
							start_cost: '1',
							per_kilometre: '1',
							per_minute: '1',
							vehicle_id: val.vehicle_id,
							vehicle: {
								connect: {
									vehicle_id: val.vehicle_id,
								},
							},
						},
					})
				);
			}
			let vehicleSpecValues = await Promise.all(vehicle_specifications);
			resolve();
		} catch (error) {
			reject(error);
		}
	});
}
async function seedBothTypes() {
	await deliveryDriverSeed();
	await driverSeed();
}
module.exports = seedBothTypes;
