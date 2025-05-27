const { municipalitiesSeeder } = require('./prisma/seeders/municipalitiesSeeder');

(async () => {
	try {
		await municipalitiesSeeder();
		console.log('Municipalities seeding completed successfully.');
	} catch (error) {
		console.error('Error during municipalities seeding:', error);
	}
})();
