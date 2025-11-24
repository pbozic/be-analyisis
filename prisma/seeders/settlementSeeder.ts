import prisma from '../prisma.js';
import SETTLEMENTS from './settlements.json';
async function settlementSeeder() {
	for (let setGJ of (SETTLEMENTS as { type: string; features: any[] }).features) {
		let exists = await prisma.settlements.findFirst({
			where: {
				name: setGJ.properties.NAZIV,
			},
		});
		if (exists) continue;
		console.log('Settlement not found, creating: ', setGJ.properties.NAZIV);
		let Municipality = await prisma.municipalities.findFirst({
			where: {
				eid_obcina: setGJ.properties.EID_OBCINA.toString(),
			},
		});
		await prisma.settlements.create({
			data: {
				geojson: setGJ.geometry,
				eid_naselje: setGJ.properties.EID_NASELJE.toString(),
				feature_id: setGJ.properties.FEATUREID,
				name: setGJ.properties.NAZIV,
				...(Municipality && {
					municipality: {
						connect: {
							municipalities_id: Municipality.municipalities_id,
						},
					},
				}),
			},
		});
		console.log('Settlement created: ', setGJ.properties.NAZIV);
	}
}
export default settlementSeeder;
