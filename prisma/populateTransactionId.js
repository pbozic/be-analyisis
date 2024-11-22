// populateTransactionId.js
require('dotenv').config(); // Load environment variables from .env file
const prisma = require('./prisma');
async function populateTransactionId() {
	const transactions = await prisma.transactions.findMany({
		where: { transaction_id: null },
	});

	for (const transaction of transactions) {
		await prisma.transactions.update({
			where: { id: transaction.id },
			data: { transaction_id: transaction.id },
		});
	}

	console.log('Backfill completed!');
	await prisma.$disconnect();
}

populateTransactionId();