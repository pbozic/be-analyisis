import municipalitiesSeeder$0 from './prisma/seeders/municipalitiesSeeder.js';
const { municipalitiesSeeder } = municipalitiesSeeder$0;
(async () => {
	try {
		await municipalitiesSeeder();
		console.log('Municipalities seeding completed successfully.');
	} catch (error) {
		console.error('Error during municipalities seeding:', error);
	}
})();
