import { BUSINESS_TYPE } from '@prisma/client';
import AddressDao from '../../dao/Address.js';
import LocalLocationDao from '../../dao/LocalLocation.js';
import prisma from '../prisma.js';

interface Location {
	address: string;
	latitude: string;
	longitude: string;
}

export default async function seedLocations(locations: Location[], shouldPopulate: boolean): Promise<void> {
	console.log('🔄 Starting locations seeding...');
	for (const location of locations) {
		try {
			const addr = await AddressDao.addAddress(location);
			if (!addr) {
				console.error(`❌ Error creating address for location ${location.address}`);
				continue;
			}

			const local_location = await LocalLocationDao.createLocation(addr);
			if (local_location) {
				console.log(`✅ Created location: ${local_location.address.address}`);
			}
		} catch (error) {
			console.error(`❌ Error creating location ${location.address}:`, error);
		}
	}
	if (shouldPopulate) {
		try {
			const businesses = await prisma.business.findMany({
				where: {
					type: BUSINESS_TYPE.LOCAL,
				},
			});
			const localLocations = await LocalLocationDao.getAllLocalLocations();
			for (const business of businesses) {
				for (const loc of localLocations) {
					await LocalLocationDao.createBusinessLocalLocation(
						business.business_id,
						loc.local_location_id,
						new Date().toISOString()
					);
				}
			}
		} catch (error) {
			console.error('❌ Error populating local locations:', error);
		}
	}
	console.log('✅ Locations seeding completed!');
}

// Example usage:
export const LOCATIONS: Location[] = [
	{
		address: 'Tržnica Koseze, Vodnikova cesta 187, 1000 Ljubljana',
		latitude: '46.074148443126965',
		longitude: '14.475325939583001',
	},
	{
		address: 'Tržnica BTC City, Italijanska ulica 7, 1000 Ljubljana',
		latitude: '46.06465810800961',
		longitude: '14.544126066569467',
	},
	{
		address: 'Tržnica Moste, Zaloška cesta 55, 1000 Ljubljana',
		latitude: '46.05643348612501',
		longitude: '14.534395968417801',
	},
	{
		address: 'Tržnica Šiška Ljubljana, Drenikova ulica 35, 1000 Ljubljana',
		latitude: '46.06690172399823',
		longitude: '14.493352168418221',
	},
	{
		address: 'Tržnica Bežigrad, Linhartov podhod 39, 1000 Ljubljana',
		latitude: '46.0649828860328',
		longitude: '14.50959477047251',
	},
	{
		address: 'Tržnica, Pogačarjev trg 2, 1000 Ljubljana',
		latitude: '46.05120234481381',
		longitude: '14.50864762608861',
	},
];
// seedLocations(LOCATIONS, false)
// 	.then(() => console.log('Done!'))
// 	.catch((err) => console.error(err));
