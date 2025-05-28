import readline from 'readline';

import moment from 'moment';

import prisma from '../prisma/prisma.js';
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const connectBusinessToPromoSections = async (businessId, promoSectionIds) => {
	for (const id of promoSectionIds) {
		console.log(`Connecting business ${businessId} to promo section ${id}`);
		const promoSection = await prisma.promo_sections.findUnique({
			where: {
				promo_sections_id: id,
			},
		});
		console.log('promoSection: ', promoSection);
		let today = moment();
		let in30Days = moment().add(30, 'days');
		const promoSectionBuy = await prisma.promo_sections_buy.create({
			data: {
				business: {
					connect: {
						business_id: businessId,
					},
				},
				promo_section: {
					connect: {
						promo_sections_id: promoSection.promo_sections_id,
					},
				},
				tier: [1, 2, 3][Math.floor(Math.random() * 3)],
				active_at: today.toDate(),
				expires_at: in30Days.toDate(),
			},
		});
		console.log('promoSectionBuy: ', promoSectionBuy);
		const business = await prisma.business.update({
			where: {
				business_id: businessId,
			},
			data: {
				promo_sections: {
					connect: {
						promo_sections_buy_id: promoSectionBuy.promo_sections_buy_id,
					},
				},
			},
		});
	}
	return true;
};
async function main() {
	rl.question(
		'Are you sure you want to run this, this will randomly connect businesses to promo_Sections, without them paying anything? (yes/no) ',
		async (answer) => {
			if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
				console.log('Running the script...');
				let businesses = await prisma.business.findMany();
				let promoSections = await prisma.promo_sections.findMany();
				console.log('promoSections: ', promoSections);
				for (let business of businesses) {
					let promoSectionIds = getRandomElements(promoSections, 1, 4).map(
						(promoSection) => promoSection.promo_sections_id
					);
					console.log('promoSectionIds: ', promoSectionIds);
					await connectBusinessToPromoSections(business.business_id, promoSectionIds);
				}
			} else {
				console.log('Operation canceled.');
			}
			rl.close();
		}
	);
}
function getRandomElements(array, min, max) {
	const count = Math.floor(Math.random() * (max - min + 1)) + min;
	return array.sort(() => Math.random() - 0.5).slice(0, count);
}
main().catch((e) => {
	console.error(e);
	process.exit(1);
});
