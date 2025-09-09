import stripe from './lib/stripe.js';

type SubscriptionUpdatePreview = {
	isIncrease: boolean;
	totalDifference: number; // in cents
};

type SubscriptionUpdatePreview = {
	isIncrease: boolean;
	totalDifference: number; // in cents
};

type UpdatedItem = { price: string; quantity: number };

export async function previewSubscriptionUpdate(
	subscriptionId: string,
	updatedItems: UpdatedItem[]
): Promise<SubscriptionUpdatePreview> {
	// 1️⃣ Retrieve current subscription
	const currentSub = await stripe.client.subscriptions.retrieve(subscriptionId, {
		expand: ['items.data.price'],
	});

	// 2️⃣ Map priceId → subscription_item_id
	const priceIdToItemId = new Map<string, string>();
	currentSub.items.data.forEach((item) => {
		priceIdToItemId.set(item.price.id, item.id);
	});

	// 3️⃣ Build items array for invoice preview
	const itemsForPreview = updatedItems.map((u) => {
		const existingItemId = priceIdToItemId.get(u.price);
		if (existingItemId) {
			return { id: existingItemId, quantity: u.quantity }; // update existing item
		} else {
			return { price: u.price, quantity: u.quantity }; // new item
		}
	});

	// 4️⃣ Retrieve upcoming invoice
	const invoicePreview = await stripe.client.invoices.retrieveUpcoming({
		subscription: subscriptionId,
		subscription_items: itemsForPreview,
		subscription_proration_behavior: 'create_prorations',
	});

	if (!invoicePreview) throw new Error('Unable to retrieve upcoming invoice preview');

	const totalDifference = invoicePreview.total ?? 0; // total amount in cents
	const isIncrease = totalDifference > 0;

	return { isIncrease, totalDifference };
}

// Usage example:
const updatedItems = [
	{ price: 'price_1S3vZiI9NRgffbADxn2NCIdH', quantity: 1 }, // bundle premium
	{ price: 'price_1S3vamI9NRgffbADBjNO3mAv', quantity: 10 }, // addon SMS
	{ price: 'price_1S3vapI9NRgffbADwIP2HmUw', quantity: 2 }, // addon Location
	{ price: 'price_1S3vaoI9NRgffbAD4Lycfrfn', quantity: 2 }, // addon employee
];

const { isIncrease, totalDifference } = await previewSubscriptionUpdate('sub_1S5NjtI9NRgffbADrt1p5QW9', updatedItems);

console.log(`The subscription would ${isIncrease ? 'increase' : 'decrease'} by $${(totalDifference / 100).toFixed(2)}`);

// Use this to decide proration_behavior:
// isIncrease -> 'create_prorations' or 'always_invoice'
// decrease   -> 'none'
