import TaxDao from '../../dao/Tax.js';

interface TaxRateData {
	name: string;
	rate: number;
	valid_from: Date;
}

async function seedTaxRates(taxRates: TaxRateData[]): Promise<void> {
	console.log('🔄 Starting tax rates seeding...');
	for (const taxRate of taxRates) {
		try {
			// Check if this tax rate already exists
			const existingTaxRate = await TaxDao.getTaxByName(taxRate.name);

			const taxRateData = {
				...taxRate,
				active: !existingTaxRate,
			};
			// Create new tax rate
			const newTaxRate = await TaxDao.createTaxRate(taxRateData);
			if (newTaxRate) {
				console.log(`✅ Created tax rate: ${newTaxRate.name} (${newTaxRate.rate}%)`);
			}
		} catch (error) {
			console.error(`❌ Error creating tax rate ${taxRate.name}:`, error);
		}
	}
	console.log('✅ Tax rates seeding completed!');
}

// Example usage:
const TAX_RATES: TaxRateData[] = [
	{
		name: 'Standard Rate',
		rate: 9.5,
		valid_from: new Date(),
	},
	{
		name: 'Higher Rate',
		rate: 22,
		// valid_from: new Date('2026-01-01T00:00:00Z'),
		valid_from: new Date(),
	},
];
seedTaxRates(TAX_RATES)
	.then(() => console.log('Done!'))
	.catch((err) => console.error(err));
