const WORKING_HOURS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'holidays'];

const LANGUAGE_REQUIREMENTS = [
	'language_en',
	'language_it',
	'language_de',
	'language_es',
	'language_hr',
	'language_fr',
	'language_ru',
];

const TAXI_REQUIREMENTS = [
	'air_conditioning',
	'child_seats',
	'luggage',
	'quiet_ride',
	'traveling_with_pet',
	'wheelchair_accessibility',
	...LANGUAGE_REQUIREMENTS,
];

const TRANSFER_REQUIREMENTS = [
	'air_conditioning',
	'luggage',
	'multilingual_staff',
	'onboard_restrooms',
	'outlets',
	'traveling_with_pet',
	'wi_fi',
	...LANGUAGE_REQUIREMENTS,
];

module.exports = {
	WORKING_HOURS,
	LANGUAGE_REQUIREMENTS,
	TAXI_REQUIREMENTS,
	TRANSFER_REQUIREMENTS,
};
