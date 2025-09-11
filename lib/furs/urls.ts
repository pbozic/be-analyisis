export type FursEnv = 'test' | 'prod';

/** JSON endpoints (example placeholders; set to your actual FURS URLs) */
export const FURS_URLS = {
	test: {
		businessPremise: 'https://blagajne-test.fu.gov.si:9003/v2/cash_registers/invoices/register-bp',
		invoice: 'https://blagajne-test.fu.gov.si:9003/v2/cash_registers/invoices',
		echo: 'https://blagajne-test.fu.gov.si:9003/v2/cash_registers/echo',
	},
	prod: {
		businessPremise: 'https://blagajne.fu.gov.si:9003/v2/cash_registers/invoices/register-bp',
		invoice: 'https://blagajne.fu.gov.si:9003/v2/cash_registers/invoices',
		echo: 'https://blagajne.fu.gov.si:9003/v2/cash_registers/echo',
	},
} as const;

export const getFursUrl = (env: FursEnv, key: keyof (typeof FURS_URLS)['test']) => FURS_URLS[env][key];
