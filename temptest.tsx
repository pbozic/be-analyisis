/**
 * testFreeTrialSubscription.tsx
 * Run with: npx tsx testFreeTrialSubscription.tsx
 */

import prisma from './prisma/prisma.js';
import {
	createOrUpdateReservationModuleSubscription,
	syncReservationModuleWithStripe,
} from './lib/subscriptionHelpers.ts';

async function main() {
	try {
		const reservation_module_id = '244ecd6c-ada9-410a-a453-be87958af579';

		// 1️⃣ Get first addon in DB
		const firstAddon = await prisma.addon.findFirst();
		if (!firstAddon) throw new Error('No addon found in DB');
		const freeTrialBundle = await prisma.action_bundle.findFirst({ where: { name: 'Premium' } });
		if (!freeTrialBundle) throw new Error('No freeTrialBundle found in DB');

		console.log('Using addon:', firstAddon.name, 'price:', firstAddon.stripe_price_id);

		// 2️⃣ Create or update Free Trial subscription with first addon, quantity 2
		const result = await createOrUpdateReservationModuleSubscription({
			reservation_module_id,
			bundleId: freeTrialBundle.stripe_price_id,
			addonPriceIds: [
				// { priceId: firstAddon.stripe_price_id, quantity: 2 }
			],
		});

		console.log('Subscription created/updated:', result);

		// 3️⃣ Sync DB with Stripe subscription
		await syncReservationModuleWithStripe(reservation_module_id);

		// 4️⃣ Fetch updated reservation module including addons
		const updatedModule = await prisma.reservation_module.findUnique({
			where: { reservation_module_id },
			include: { addons: true, action_bundle: true },
		});

		console.log('Updated reservation module in DB:', updatedModule);
	} catch (err) {
		console.error('Test failed:', err);
	} finally {
		process.exit(0);
	}
}

main();
