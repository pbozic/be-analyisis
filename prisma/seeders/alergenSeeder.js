import prisma from '../prisma.js';
const allergens = [
	{
		code: 1,
		name: 'Gluten',
		description: 'Vsebuje ga pšenica, rž, ječmen, oves, pira, kamut ali njihovi križanci in proizvodi iz njih.',
	},
	{
		code: 2,
		name: 'Raki',
		description: 'Vse vrste rakov in proizvodi iz njih, kot so škampi, jastogi, raki in kozice.',
	},
	{
		code: 3,
		name: 'Jajca',
		description: 'Vse vrste jajc in proizvodi iz njih.',
	},
	{
		code: 4,
		name: 'Ribe',
		description: 'Vse vrste rib in proizvodi iz njih.',
	},
	{ code: 5, name: 'Arašidi', description: 'Arašidi in proizvodi iz njih.' },
	{ code: 6, name: 'Soja', description: 'Soja in proizvodi iz nje.' },
	{
		code: 7,
		name: 'Mleko',
		description: 'Mleko in mlečni proizvodi, vključno z laktozo.',
	},
	{
		code: 8,
		name: 'Oreščki',
		description:
			'Vključuje mandlje, lešnike, orehe, indijske oreščke, pekane, brazilske oreščke, pistacije in makadamije ter proizvode iz njih.',
	},
	{ code: 9, name: 'Zelena', description: 'Zelena in proizvodi iz nje.' },
	{ code: 10, name: 'Gorčica', description: 'Gorčica in proizvodi iz nje.' },
	{
		code: 11,
		name: 'Sezamova semena',
		description: 'Sezamova semena in proizvodi iz njih.',
	},
	{
		code: 12,
		name: 'Žveplov dioksid in sulfiti',
		description: 'Če je koncentracija večja od 10 mg/kg ali 10 mg/l, izraženo kot skupni SO2.',
	},
	{
		code: 13,
		name: 'Volčji bob',
		description: 'Volčji bob in proizvodi iz njega.',
	},
	{
		code: 14,
		name: 'Mehkužci',
		description: 'Mehkužci in proizvodi iz njih, kot so školjke, lignji, polži.',
	},
];
async function alergenSeed() {
	return new Promise(async (resolve, reject) => {
		console.log('Seeding alergens...');
		let promisses = [];
		for (let allergen of allergens) {
			promisses.push(
				prisma.allergens.upsert({
					where: { code: allergen.code },
					update: { ...allergen },
					create: { ...allergen },
				})
			);
		}
		try {
			await Promise.all(promisses).then((values) => {
				console.log('Alergens seeded!');
				resolve();
			});
		} catch (error) {
			reject(error);
		}
	});
}
export default alergenSeed;
