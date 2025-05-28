const L10N_LEN = 2;
const L10N = {
	sl: { label: 'Slovenščina', value: 'SL' },
	en: { label: 'Angleščina (UK)', value: 'EN' },
	it: { label: 'Italijanščina', value: 'IT' },
	hr: { label: 'Hrvaščina', value: 'HR' },
	de: { label: 'Nemščina', value: 'DE' },
};
const L10N_ARR = [L10N.sl.value, L10N.en.value];
export { L10N };
export { L10N_LEN };
export { L10N_ARR };
export default {
	L10N,
	L10N_LEN,
	L10N_ARR,
};
