
const L10N_LEN = 2;
const L10N = {
    si: {label: 'Slovenščina', value: 'SI'},
    en: {label: 'Angleščina (UK)', value: 'EN'},
    it: {label: 'Italijanščina', value: 'IT'},
    hr: {label: 'Hrvaščina', value: 'HR'},
    de: {label: 'Nemščina', value: 'DE'},
}

const L10N_ARR = [L10N.si.value, L10N.en.value];

module.exports = {
    L10N,
    L10N_LEN,
    L10N_ARR,
}