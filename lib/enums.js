const PRINT_EMAIL_RECIPIENTS = {
    PRINT_ADDRESS: 'hiti.tadej@gmail.com',
    ADMIN_SENDER: 'it@klikni.com'
}
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
    PRINT_EMAIL_RECIPIENTS,
    L10N,
    L10N_LEN,
    L10N_ARR,
}