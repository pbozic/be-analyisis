const WordDao = require('../dao/Word');
const BusinessUserDao = require('../dao/BusinessUsers');
const BusinessDao = require('../dao/Business');
const stripe = require('../lib/stripe');

async function createWord(req, res) {
	try {
		const { wordData, translations } = req.body;
		const result = await WordDao.createWord(wordData.word, wordData.categories_id, translations);
		res.status(201).json(result);
	} catch (error) {
		console.error('Error creating word:', error);
		res.status(500).json({ error: 'Failed to create word' });
	}
}

async function updateWord(req, res) {
	try {
		const { id } = req.params;
		const { wordData, translations } = req.body;
		const result = await WordDao.updateWord(id, wordData.word, wordData.categories_id, translations);
		if (!result) {
			return res.status(404).json({ error: 'Word not found' });
		}
		res.status(200).json(result);
	} catch (error) {
		console.error('Error updating word:', error);
		res.status(500).json({ error: 'Failed to update word' });
	}
}

async function deleteWord(req, res) {
	try {
		const { id } = req.params;
		const result = await WordDao.deleteWord(id);
		if (!result) {
			return res.status(404).json({ error: 'Word not found' });
		}
		res.status(200).json({ message: 'Word deleted successfully' });
	} catch (error) {
		console.error('Error deleting word:', error);
		res.status(500).json({ error: 'Failed to delete word' });
	}
}

async function getWordById(req, res) {
	try {
		const { id } = req.params;
		const result = await WordDao.getWordById(id);
		if (!result) {
			return res.status(404).json({ error: 'Word not found' });
		}
		res.status(200).json(result);
	} catch (error) {
		console.error('Error fetching word:', error);
		res.status(500).json({ error: 'Failed to fetch word' });
	}
}

async function getAllWords(req, res) {
	try {
		const result = await WordDao.getAllWords();
		res.status(200).json(result);
	} catch (error) {
		console.error('Error fetching all words:', error);
		res.status(500).json({ error: 'Failed to fetch words' });
	}
}

async function getAllWordsByCategory(req, res) {
	try {
		const { category } = req.params;
		const result = await WordDao.getAllWordsByCategory(category);
		res.status(200).json(result);
	} catch (error) {
		console.error('Error fetching words by category:', error);
		res.status(500).json({ error: 'Failed to fetch words by category' });
	}
}

async function removeCategoryFromWord(req, res) {
	try {
		const { id } = req.params;
		const result = await WordDao.removeCategoryFromWord(id);
		if (!result) {
			return res.status(404).json({ error: 'Word not found' });
		}
		res.status(200).json({ message: 'Category removed successfully' });
	} catch (error) {
		console.error('Error removing category from word:', error);
		res.status(500).json({ error: 'Failed to remove category from word' });
	}
}

async function addCategoryToWord(req, res) {
	try {
		const { id } = req.params;
		const { category } = req.body;
		const result = await WordDao.addCategoryToWord(id, category);
		if (!result) {
			return res.status(404).json({ error: 'Word not found' });
		}
		res.status(200).json(result);
	} catch (error) {
		console.error('Error adding category to word:', error);
		res.status(500).json({ error: 'Failed to add category to word' });
	}
}

async function createWordBuy(req, res) {
	try {
		const result = await WordDao.createWordBuy(req.body);
		let stripeResult = await updateUserSubscription(userId);
		res.status(201).json(result);
	} catch (error) {
		console.error('Error creating word buy:', error);
		res.status(500).json({ error: 'Failed to create word buy' });
	}
}

async function getWordBuyById(req, res) {
	try {
		const { id } = req.params;
		const result = await WordDao.getWordBuyById(id);
		if (!result) {
			return res.status(404).json({ error: 'Word buy not found' });
		}
		res.status(200).json(result);
	} catch (error) {
		console.error('Error fetching word buy:', error);
		res.status(500).json({ error: 'Failed to fetch word buy' });
	}
}

async function getAllWordBuys(req, res) {
	try {
		const result = await WordDao.getAllWordBuys();
		res.status(200).json(result);
	} catch (error) {
		console.error('Error fetching all word buys:', error);
		res.status(500).json({ error: 'Failed to fetch word buys' });
	}
}

async function deleteWordBuy(req, res) {
	try {
		const { id } = req.params;
		const result = await WordDao.deleteWordBuy(id);
		let stripeResult = await updateUserSubscription(userId);
		if (!result) {
			return res.status(404).json({ error: 'Word buy not found' });
		}
		res.status(200).json({ message: 'Word buy deleted successfully' });
	} catch (error) {
		console.error('Error deleting word buy:', error);
		res.status(500).json({ error: 'Failed to delete word buy' });
	}
}

async function updateWordBuy(req, res) {
	try {
		const { id } = req.params;
		const result = await WordDao.updateWordBuy(id, req.body);

		let stripeResult = await updateUserSubscription(userId);
		if (!result) {
			return res.status(404).json({ error: 'Word buy not found' });
		}
		res.status(200).json(result);
	} catch (error) {
		console.error('Error updating word buy:', error);
		res.status(500).json({ error: 'Failed to update word buy' });
	}
}

async function getWordBuysByBusiness(req, res) {
	try {
		const { user } = req.params;
		const result = await WordDao.getAllWordBuysByBusiness(user);
		res.status(200).json(result);
	} catch (error) {
		console.error('Error fetching word buys by business:', error);
		res.status(500).json({ error: 'Failed to fetch word buys by business' });
	}
}
async function updateUserSubscription(userId) {
	try {
		// Fetch business & word buys
		const businessUser = await BusinessUserDao.getBusinessUserByUserId(userId);
		const business = await BusinessDao.getBusinessById(businessUser.business_id);
		const wordBuys = await WordDao.getAllWordBuysByBusiness(business.business_id);

		const stripe = stripe.client;

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
			const checkoutSession = await stripe.checkout.sessions.create({
				mode: 'subscription',
				customer: business.stripe_customer_id,
				line_items: [
					{
						price: newPriceData.id,
						quantity: 1,
					},
				],
				success_url: process.env.FRONTEND_URL + '/success?session_id={CHECKOUT_SESSION_ID}',
				cancel_url: process.env.FRONTEND_URL + '/cancel',
				metadata: { business_id: business.business_id, type: 'word_buys' },
			});

			checkoutUrl = checkoutSession.url; // Redirect user to this URL
		}

		return {
			success: true,
			subscriptionId: subscription.id,
			paymentRequired,
			clientSecret,
			checkoutUrl, // Return Checkout URL if required
		};
	} catch (error) {
		console.error('Error updating subscription:', error);
		return { success: false, error: error.message };
	}
}

module.exports = {
	createWord,
	updateWord,
	deleteWord,
	getWordById,
	getAllWords,
	getAllWordsByCategory,
	removeCategoryFromWord,
	addCategoryToWord,
	createWordBuy,
	getWordBuyById,
	getAllWordBuys,
	deleteWordBuy,
	updateWordBuy,
	getWordBuysByBusiness,
};
