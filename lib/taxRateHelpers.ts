import type { menu_items, tax_rates } from '@prisma/client';

import TaxDao from '../dao/Tax.js';
import prisma from '../prisma/prisma.js';

export async function updateMenuItemsWithNewTaxRates() {
	try {
		const activeTaxRates = await TaxDao.getActiveTaxRates();

		// for (const taxRate of activeTaxRates)
		const taxRateId = activeTaxRates[2]?.tax_rates_id;
		if (!taxRateId) {
			console.warn('No active tax rate found to update menu items.');
			return;
		}
		await prisma.$transaction(async (tx) => {
			// Find all menu items that need to be updated with the new tax rate
			const menuItemsToUpdate = await tx.menu_items.findMany({
				where: {
					tax_rates_id: null, // Assuming we want to update items without a tax rate
				},
			});

			if (menuItemsToUpdate.length > 0) {
				// Update all menu items to use the new tax rate
				await tx.menu_items.updateMany({
					where: {
						menu_item_id: {
							in: menuItemsToUpdate.map((item: menu_items) => item.menu_item_id),
						},
					},
					data: {
						tax_rate: {
							connect: { tax_rates_id: taxRateId },
						},
					},
				});
				console.log(`✅ Updated ${menuItemsToUpdate.length} menu items with new tax rate ID: ${taxRateId}`);
			} else {
				console.log('No menu items found that need to be updated with the new tax rate.');
			}
		});
		console.log(`✅ Successfully updated menu items with new tax rate ID: ${taxRateId}`);
	} catch (error) {
		console.error('❌ Error updating menu items with new tax rates:', error);
	}
}

/**
 * Execute tax rate change
 */
async function executeTaxRateChange(newTaxRate: tax_rates): Promise<void> {
	const taxRateId = newTaxRate.tax_rates_id;
	console.log(`Executing tax rate change for ID: ${taxRateId}`);

	try {
		await prisma.$transaction(async (tx) => {
			const menuItemsToUpdate = await tx.menu_items.findMany({
				where: {
					tax_rate: {
						name: newTaxRate.name,
						active: true,
					},
				},
				include: {
					tax_rate: true,
				},
			});

			if (menuItemsToUpdate.length > 0) {
				// Update all menu items to use the new tax rate
				await tx.menu_items.updateMany({
					where: {
						menu_item_id: {
							in: menuItemsToUpdate.map((item: menu_items) => item.menu_item_id),
						},
					},
					data: {
						tax_rates_id: newTaxRate.tax_rates_id,
					},
				});

				console.log(
					`Updated ${menuItemsToUpdate.length} menu items with new tax rate: ${newTaxRate.name} (${newTaxRate.rate}%)`
				);
			}

			// Deactivate the old tax rate
			await tx.tax_rates.updateMany({
				where: {
					name: newTaxRate.name,
					active: true,
				},
				data: {
					active: false,
				},
			});

			// Activate the new tax rate
			await tx.tax_rates.update({
				where: { tax_rates_id: taxRateId },
				data: { active: true },
			});

			console.log(`Tax rate change completed successfully for: ${newTaxRate.name} (${newTaxRate.rate}%)`);
		});
	} catch (error) {
		console.error('Error executing tax rate change:', error);
		throw error;
	}
}

/**
 * Check for upcoming tax rate changes and execute them if due
 */
export async function checkTaxRateChanges() {
	try {
		const upcomingTaxRates = await TaxDao.getInactiveTaxRates();

		for (const taxRate of upcomingTaxRates) {
			const validFromDate = new Date(taxRate.valid_from);
			const now = new Date();

			if (now >= validFromDate) {
				await executeTaxRateChange(taxRate);
			}
		}
	} catch (error) {
		console.error('Error checking tax rate changes:', error);
		throw error;
	}
}

export default { checkTaxRateChanges, updateMenuItemsWithNewTaxRates };
