import TaxDao from '../../dao/Tax.js';
import TaxRateHelpers from '../../lib/taxRateHelpers.js';
import { TaxRateInput } from '../../schemas/dto/Tax/tax.validators.js';

interface TaxRateData {
	name: string;
	rate: number;
	valid_from: string;
}

export default async function seedTaxRates(taxRates: TaxRateData[], shouldPopulate: boolean): Promise<void> {
	console.log('🔄 Starting tax rates seeding...');
	for (const taxRate of taxRates) {
		try {
			// Check if this tax rate already exists
			const existingTaxRate = await TaxDao.getTaxByName(taxRate.name);

			const taxRateData = {
				...taxRate,
				active: !existingTaxRate,
				activated_at: existingTaxRate ? null : new Date(),
			};
			// Create new tax rate
			const newTaxRate = await TaxDao.createTaxRate(taxRateData as TaxRateInput);
			if (newTaxRate) {
				console.log(`✅ Created tax rate: ${newTaxRate.name} (${newTaxRate.rate}%)`);
			}
		} catch (error) {
			console.error(`❌ Error creating tax rate ${taxRate.name}:`, error);
		}
	}
	if (shouldPopulate) {
		await TaxRateHelpers.updateMenuItemsWithNewTaxRates();
	}
	console.log('✅ Tax rates seeding completed!');
}

// Example usage:
export const TAX_RATES: TaxRateData[] = [
	{
		name: 'Oproščeno',
		rate: 0,
		// valid_from: new Date('2026-01-01T00:00:00'), <--IMPORTANT: leave out 'Z' so that comparison works correctly
		valid_from: new Date().toISOString(),
	},
	{
		name: 'Kategorija 1',
		rate: 5,
		// valid_from: new Date('2026-01-01T00:00:00'),
		valid_from: new Date().toISOString(),
	},
	{
		name: 'Kategorija 2',
		rate: 9.5,
		// valid_from: new Date('2026-01-01T00:00:00'),
		valid_from: new Date().toISOString(),
	},
	{
		name: 'Kategorija 3',
		rate: 22,
		// valid_from: new Date('2026-01-01T00:00:00'),
		valid_from: new Date().toISOString(),
	},
];
// seedTaxRates(TAX_RATES, true)
// 	.then(() => console.log('Done!'))
// 	.catch((err) => console.error(err));
