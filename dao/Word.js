import prisma from '../prisma/prisma.js';
import stripe from './lib/stripe.js';

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
export async function createWordBuySubscription(word_id, business_id, price, stripe_price_id, userId) {
	try {
		// 1) Load business & verify Stripe customer
		const business = await prisma.business.findUnique({
			where: { business_id },
		});
		if (!business?.stripe_customer_id) {
			throw new Error('Business has no Stripe customer on file');
			// return res.status(400).json({ error: 'Business has no Stripe customer on file' });
		}

		// 2) Create the subscription in “incomplete” mode so we get a PaymentIntent
		const subscription = await stripe.client.subscriptions.create({
			customer: business.stripe_customer_id,
			items: [{ price: stripe_price_id }],
			payment_behavior: 'default_incomplete',
			expand: ['latest_invoice.payment_intent'],
			metadata: {
				type: 'word_buy',
				word_id: word_id,
				business_id: business_id,
				user_id: userId,
				price: price.toString(),
			},
		});

		// grab the PaymentIntent so the front‐end can confirm it
		const paymentIntent = subscription.latest_invoice.payment_intent;
		if (!paymentIntent?.client_secret) {
			console.error('No PaymentIntent client_secret on subscription:', subscription.id);
			throw new Error('PaymentIntent not created');
			// return res.status(500).json({ error: 'PaymentIntent not created' });
		}

		// 3) Create your DB record (paid defaults to false)
		const wordBuy = await prisma.word_buy.create({
			data: {
				word: { connect: { word_id } },
				business: { connect: { business_id } },
				price,
				stripe_subscription_id: subscription.id,
				// paid: false by default
			},
		});

		// 4) Return the subscription + client secret
		return {
			wordBuyId: wordBuy.word_buy_id,
			subscriptionId: subscription.id,
			clientSecret: paymentIntent.client_secret,
		};
	} catch (err) {
		console.error('createWordBuySubscription error:', err);
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
};
