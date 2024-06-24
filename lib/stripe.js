const { UserDefinedMessageInstance } = require('twilio/lib/rest/api/v2010/account/call/userDefinedMessage');

const stripe = require('stripe')('sk_test_51PU87JI9NRgffbADhlN4ejn2TKtC3mnQi8SUGZgGSD0wPbF83UVqaePyFlaJyxUb8AvcSM5NTjegUiRitUfeSH0l00leFCjt6o');

async function createAccount() {
    const account = await stripe.accounts.create({
        email: req.body.business.email,
        business_type: "company",
        controller: {
            fees: {
                payer: 'account',
            },
            losses: {
                payments: 'stripe',
            },
            stripe_dashboard: {
                type: 'full',
            },
            requirement_collection: "stripe"
        },
    });
    return account
}

async function getAccountLinks(accountId) {
    const accountLink = await stripe.accountLinks.create({
        account: account,
        return_url: `${req.headers.origin}/return/${account.id}`,
        refresh_url: `${req.headers.origin}/refresh/${account.id}`,
        type: "account_onboarding",
    });
    return accountLink;
}

async function createCustomer(email, fullName, phoneNumber) {
    return await stripe.customers.create({
        name: fullName,
        email: email,
        phone: phoneNumber
      });
}
async function generatePaymentSheetCredentials(user, nonce) {
    if (!user.stripe_customer_id) throw new Error("User does not have a stripe customer id");
    const ephemeralKey = await stripe.ephemeralKeys.create(
        {customer: user.stripe_customer_id},
        {apiVersion: '2024-04-10'}
    );
    const setupIntent = await stripe.setupIntents.create({
        customer: user.stripe_customer_id,
        usage: 'off_session',
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter
        // is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
            enabled: true,
        },
    });
    res.json({
        setupIntent: setupIntent.client_secret,
        ephemeralKey: ephemeralKey.secret,
        customer: user.stripe_customer_id,
    })
}
async function confirmPaymentIntent(paymentIntentId) {
    return await stripe.paymentIntents.confirm(paymentIntentId);
}
async function createPaymentIntent(amount, payment_method, customerId, stripeAccountId, orderId) {
    
    const customer = await stripe.customers.retrieve(customerId);
    console.log(customer);
    return await stripe.paymentIntents.create({
        amount: amount,
        currency: "EUR",
        customer: customerId,
        on_behalf_of: stripeAccountId,
        application_fee_amount: amount * 0.2,
        payment_method: payment_method,
        transfer_data: {
            destination: stripeAccountId,
        },
        return_url: 'https://example.com/order/123/complete',
        off_session: false
    });
}
async function refundPaymentIntent(paymentIntentId) {
    return await stripe.refunds.create({
        payment_intent: paymentIntentId,
    });
}

async function getPaymentMethods(stripe_customer_id) {
    try {
        const paymentMethods = await stripe.paymentMethods.list({
            customer: stripe_customer_id,
            type: 'card',
        });
        return paymentMethods;
    } catch (error) {
       throw new Error(error);
    }
}
module.exports = {
    client: stripe,
    createAccount,
    getAccountLinks,
    createCustomer,
    generatePaymentSheetCredentials,
    createPaymentIntent,
    confirmPaymentIntent,
    refundPaymentIntent,
    getPaymentMethods
}