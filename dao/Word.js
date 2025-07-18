import prisma from '../prisma/prisma.js';
import { client as stripe } from '../lib/stripe.js';
import BusinessUserDao from './BusinessUsers.js';
import BusinessDao from './Business.js';

async function createWord(word, category_id, translations) {
	// Create a new translatable record
	let translatable = await prisma.translatable.create({
		data: {},
	});
	// Create the word with its relationships
	let new_word = await prisma.words.create({
		data: {
			word: word,
			popularity: 0,
			category: {
				connect: {
					categories_id: category_id,
				},
			},
			translatable: {
				connect: {
					translatable_id: translatable.translatable_id,
				},
			},
		},
		include: {
			translatable: true,
			category: true,
		},
	});
	// Create translations
	let translats = [];
	for (let translation of translations) {
		let trans = await prisma.translations.create({
			data: {
				translation: translation.translation,
				language: translation.language,
				translatable: {
					connect: {
						translatable_id: translatable.translatable_id,
					},
				},
			},
		});
		translats.push(trans);
	}
	// Attach translations to the response
	new_word.translations = translats;
	return new_word;
}
async function updateWord(id, word, categories_id, translations) {
	// First get the existing word to access its translatable_id
	const existingWord = await prisma.words.findUnique({
		where: {
			word_id: id,
		},
		include: {
			translatable: true,
		},
	});
	if (!existingWord) {
		throw new Error('Word not found');
	}
	// Update the word
	const updatedWord = await prisma.words.update({
		where: {
			word_id: id,
		},
		data: {
			word,
			...(categories_id
				? {
					category: {
						connect: {
							categories_id: categories_id,
						},
					},
				}
				: {}),
		},
		include: {
			category: true,
			translatable: true,
		},
	});
	if (translations && translations.length > 0) {
		// Delete existing translations
		await prisma.translations.deleteMany({
			where: {
				translatable_id: existingWord.translatable_id,
			},
		});
		// Create new translations
		let translats = [];
		for (let translation of translations) {
			let trans = await prisma.translations.create({
				data: {
					translation: translation.translation,
					language: translation.language,
					translatable: {
						connect: {
							translatable_id: existingWord.translatable_id,
						},
					},
				},
			});
			translats.push(trans);
		}
		updatedWord.translations = translats;
	}
	return updatedWord;
}
async function deleteWord(id) {
	return await prisma.words.delete({
		where: {
			word_id: id,
		},
	});
}
async function getWordById(id) {
	try {
		let word = await prisma.words.findUnique({
			where: {
				word_id: id,
			},
			include: {
				translatable: {
					include: {
						translations: true,
					},
				},
				category: true,
			},
		});
		if (!word) {
			throw new Error('Word not found');
		}
		word.translations = word.translatable.translations;
		delete word.translatable;
		return word;
	} catch (error) {
		console.error('Error getting word by ID:', error);
		throw new Error('Failed to get word');
	}
}
async function getAllWords() {
	try {
		let words = await prisma.words.findMany({
			include: {
				translatable: {
					include: {
						translations: true,
					},
				},
				category: true,
			},
		});
		for (let word of words) {
			word.translations = word.translatable.translations;
			delete word.translatable;
		}
		return words;
	} catch (error) {
		console.error('Error getting words:', error);
		throw new Error('Failed to get words');
	}
}
async function getAllWordsByCategory(category) {
	return await prisma.words.findMany({
		where: {
			category: {
				category_id: category,
			},
		},
	});
}
async function removeCategoryFromWord(id) {
	return await prisma.words.update({
		where: {
			word_id: id,
		},
		data: {
			category: {
				disconnect: true,
			},
		},
	});
}
async function addCategoryToWord(id, category) {
	// if word already has a category then remove it
	const word = await getWordById(id);
	if (word.category) {
		await removeCategoryFromWord(id);
	}
	return await prisma.words.update({
		where: {
			word_id: id,
		},
		data: {
			category: {
				connect: {
					category_id: category,
				},
			},
		},
	});
}
async function createWordBuy(args) {
	return await prisma.word_buy.create({
		data: {
			word_buy_id: args.word_buyer_id,
			word: {
				connect: {
					word_id: args.word,
				},
			},
			business: {
				connect: {
					business_id: args.business_id,
				},
			},
			price: args.price,
			stripe_subscription_id: args.stripe_subscription_id || null,
		},
	});
}

export async function updateUserSubscription(userId, business_id) {
	try {
		// Fetch business & word buys
		console.log(userId, 'userId');
		const businessUser = await BusinessUserDao.getBusinessUserByUserId(userId);
		console.log(businessUser, 'businessUser');
		const business = await BusinessDao.getBusinessById(business_id || businessUser?.business_id);
		const wordBuys = await getAllWordBuysByBusiness(business_id || businessUser?.business_id);
		// If no active word buys, cancel the subscription if it exists
		if (wordBuys.length === 0) {
			if (business?.word_buy_stripe_subscription_id) {
				await stripe.subscriptions.del(business.word_buy_stripe_subscription_id);
				// Remove subscription ID from the business in the database
				await prisma.business.update({
					where: { business_id: business.business_id },
					data: { word_buy_stripe_subscription_id: null },
				});
				console.log('Subscription canceled as last word_buy was removed.');
			}
			return { success: true, message: 'No active word buys' };
		}
		if (!business?.stripe_customer_id) throw new Error('User does not have a Stripe customer ID');
		// Calculate total price of all `word_buys`
		const totalPrice = wordBuys.reduce((sum, wb) => sum + wb.price, 0);
		// Create a new Stripe price
		const newPriceData = await stripe.prices.create({
			unit_amount: Math.round(totalPrice * 100), // Convert to cents
			currency: 'eur',
			recurring: { interval: 'month' },
			product_data: { name: 'Klikni Word Advertise' },
		});
		let subscription;
		let paymentRequired = false;
		let clientSecret = null;
		let checkoutUrl = null;
		if (business.word_buy_stripe_subscription_id) {
			subscription = await stripe.subscriptions.retrieve(business.word_buy_stripe_subscription_id);
			if (subscription.items.data.length === 0) {
				throw new Error('Subscription has no items, cannot update price.');
			}
			// Update the subscription price & trigger proration
			const updatedSubscription = await stripe.subscriptions.update(subscription.id, {
				items: [{ id: subscription.items.data[0].id, price: newPriceData.id }],
				proration_behavior: 'create_prorations',
				expand: ['latest_invoice.payment_intent'],
				metadata: { business_id: business.business_id, type: 'word_buys' },
			});
			console.log('🟡 Subscription updated:', updatedSubscription.id);
			if (updatedSubscription.latest_invoice?.payment_intent?.status === 'requires_payment_method') {
				paymentRequired = true;
				clientSecret = updatedSubscription.latest_invoice.payment_intent.client_secret;
			}
		} else {
			// Create a new subscription with Stripe Checkout
			subscription = await stripe.subscriptions.create({
				customer: business.stripe_customer_id,
				items: [{ price: newPriceData.id }],
				payment_behavior: 'default_incomplete',
				expand: ['latest_invoice.payment_intent'],
				metadata: { business_id: business.business_id, type: 'word_buys' },
			});
			console.log(subscription, 'subscription123');
			await prisma.business.update({
				where: { business_id: business.business_id },
				data: { word_buy_stripe_subscription_id: subscription.id },
			});
			console.log('New subscription created:', subscription.id);
			if (subscription.latest_invoice?.payment_intent?.status === 'requires_payment_method') {
				paymentRequired = true;
				clientSecret = subscription.latest_invoice.payment_intent.client_secret;
			}
		}
		// Update `word_buys` with the subscription ID
		await prisma.word_buy.updateMany({
			where: { business_id: business.business_id, deleted_at: null },
			data: { stripe_subscription_id: subscription.id },
		});
		// If payment is required, create a Stripe Checkout Session
		if (paymentRequired) {
			const paymentIntent = await stripe.paymentIntents.create({
				amount: Math.round(totalPrice * 100), // cents
				currency: 'eur',
				customer: business.stripe_customer_id,
				metadata: {
					business_id: business.business_id,
					type: 'word_buys',
				},
				automatic_payment_methods: { enabled: true },
			});

			clientSecret = paymentIntent.client_secret;
			console.log('🟢 Created PaymentIntent:', paymentIntent.id);
		}
		return {
			success: true,
			subscriptionId: subscription.id,
			paymentRequired,
			clientSecret,
		};
	} catch (error) {
		console.error('Error updating subscription:', error);
		return { success: false, error: error.message };
	}
}
export async function createWordBuySubscription(words, business_id) {
	try {
		// 1) Load business & verify Stripe customer
		const business = await prisma.business.findUnique({
			where: { business_id },
		});
		if (!business?.stripe_customer_id) {
			throw new Error('Business has no Stripe customer on file');
		}
		// 2) Create new word_buy entry (unpaid, no stripe_sub yet)
		words.map(async (word) => {
			try {
				const { word_id, price } = word;
				const wordBuy = await prisma.word_buy.upsert({
					where: {
						word_id_business_id: {
							word_id,
							business_id,
						},
					},
					update: {
						price,
					},
					create: {
						word: { connect: { word_id } },
						business: { connect: { business_id } },
						price,
					},
				});
			} catch (error) {
				console.error('Error creating/updating word_buy:', error);
			}
		});
		async function updateExpiresAt(subscriptionId) {
			const subscription = await stripe.subscriptions.retrieve(subscriptionId);
			if (subscription && subscription.current_period_end) {
				const expiresAt = new Date(subscription.current_period_end * 1000);
				console.log('Updating expires_at to:', expiresAt);
				await prisma.word_buy.update({
					where: { word_buy_id: wordBuy.word_buy_id },
					data: { expires_at: expiresAt },
				});
				console.log(`expires_at updated for word_buy_id: ${wordBuy.word_buy_id}`);
			} else {
				console.log('No current_period_end found on subscription');
			}
		}

		// 3) Check if existing subscription
		if (business.word_buy_stripe_subscription_id) {
			console.log('🔁 Existing subscription found. Updating...');
			const result = await updateUserSubscription(userId, business_id);
			console.log('updateUserSubscription result:', result);

			if (result.subscriptionId) {
				await updateExpiresAt(result.subscriptionId);
			}

			console.log('✅ createWordBuySubscription succeeded (reused subscription)');
			return {
				wordBuyId: wordBuy.word_buy_id,
				subscriptionId: result.subscriptionId,
				clientSecret: result.clientSecret,
				paymentRequired: result.paymentRequired,
				reusedSubscription: true,
			};
		}

		// 4) No subscription, create new one
		const result = await updateUserSubscription(userId, business_id);

		if (result.subscriptionId) {
			console.log('getting expires_at ( about to trigger function )');
			await updateExpiresAt(result.subscriptionId);
		} else {
			console.log('No subscriptionId returned');
		}
		return {
			wordBuyId: wordBuy.word_buy_id,
			subscriptionId: result.subscriptionId,
			clientSecret: result.clientSecret,
			paymentRequired: result.paymentRequired,
			reusedSubscription: false,
		};
	} catch (err) {
		console.error('❌ createWordBuySubscription error:', err);
		throw new Error(err.message);
	}
}

async function addStripeSubToWordBuy(id, stripe_subscription_id) {
	return await prisma.word_buy.update({
		where: {
			word_buy_id: id,
		},
		data: {
			stripe_subscription_id: stripe_subscription_id,
		},
	});
}
async function getWordBuyById(id) {
	const wb = await prisma.word_buy.findUnique({
		where: {
			word_buy_id: id,
		},
	});
	wb.translations = wb.translatable.translations;
	delete wb.translatable;
	return wb;
}
async function getAllWordBuys() {
	const wbs = await prisma.word_buy.findMany();
	for (let wb of wbs) {
		wb.word.translations = wb.word.translatable.translations;
		delete wb.word.translatable;
	}
	return wbs;
}
async function getAllWordBuysByWord(word) {
	const wbs = await prisma.word_buy.findMany({
		where: {
			word: {
				word_id: word,
			},
		},
	});
	for (let wb of wbs) {
		wb.word.translations = wb.word.translatable.translations;
		delete wb.word.translatable;
	}
	return wbs;
}
async function getAllWordBuysByBusiness(business) {
	const wbs = await prisma.word_buy.findMany({
		where: {
			business: {
				business_id: business,
			},
		},
		include: {
			word: {
				include: {
					translatable: {
						include: {
							translations: true,
						},
					},
				},
			},
		},
	});
	for (let wb of wbs) {
		wb.word.translations = wb.word.translatable.translations;
		delete wb.word.translatable;
	}
	return wbs;
}

async function deleteWordBuy(word_buy_id) {
	const deletedWordBuy = await prisma.word_buy.update({
		where: {
			word_buy_id: word_buy_id,
		},
		data: {
			stripe_subscription_id: null,
		},
	});
	console.log(deletedWordBuy, 'deletedWordBuy');
}

export { createWord };
export { updateWord };
export { deleteWord };
export { getWordById };
export { getAllWords };
export { getAllWordsByCategory };
export { createWordBuy };
export { addStripeSubToWordBuy };
export { getWordBuyById };
export { getAllWordBuys };
export { getAllWordBuysByWord };
export { getAllWordBuysByBusiness };
export { removeCategoryFromWord };
export { addCategoryToWord };
export { deleteWordBuy };
export default {
	createWord,
	updateWord,
	deleteWord,
	getWordById,
	getAllWords,
	getAllWordsByCategory,
	createWordBuy,
	addStripeSubToWordBuy,
	getWordBuyById,
	getAllWordBuys,
	getAllWordBuysByWord,
	getAllWordBuysByBusiness,
	removeCategoryFromWord,
	addCategoryToWord,
	createWordBuySubscription,
	updateUserSubscription,
	deleteWordBuy,
};
