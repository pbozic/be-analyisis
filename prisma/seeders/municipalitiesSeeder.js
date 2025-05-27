const prisma = require('../prisma');
const MUNICIPALITIES = require('./municipalities.json');
const requiresLicense = [
	'Ljubljana',
	'Maribor',
	'Ptuj',
	'Celje',
	'Velenje',
	'Murska Sobota',
	'Kranj',
	'Bled',
	'Bohinj',
	'Kranjska Gora',
	'Koper',
	'Piran',
	'Izola',
	'Nova Gorica',
	'Tolmin',
];

async function municipalitiesSeeder() {
	console.log(MUNICIPALITIES.type);
	for (let muGJ of MUNICIPALITIES.features) {
		console.log(muGJ);
		if (!requiresLicense.includes(muGJ.properties.NAZIV)) continue;
		let exists = await prisma.municipalities.findFirst({
			where: {
				name: muGJ.properties.NAZIV,
			},
		});
		if (exists) continue;
		console.log('Municipality not found, creating: ', muGJ.properties.NAZIV);
		await prisma.municipalities.create({
			data: {
				geojson: muGJ.geometry,
				requires_license: requiresLicense.includes(muGJ.properties.NAZIV),
				gis_sifra: muGJ.properties.GIS_SIFRA,
				eid_obcina: muGJ.properties.EID_OBCINA.toString(),
				feature_id: muGJ.properties.FEATURE_ID,
				name: muGJ.properties.NAZIV,
			},
		});
		console.log('Municipality created: ', muGJ.properties.NAZIV);
	}
}
module.exports = municipalitiesSeeder;
