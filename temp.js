const fs = require('fs');

const { getOrderAndPDF } = require('./lib/orderPdf');

async function main() {
	const order_id = '97ecda12-56f8-41f7-a2f3-a7a8f721b307'; // Replace with the actual order ID
	let pdf = await getOrderAndPDF(order_id);
	fs.writeFileSync('order.pdf', pdf);
}

main();
