import fs from 'fs';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function getCoordinates(user) {
	const street = user.ULICA;
	const houseNumber = user.ULICA_HS;
	const houseNumberSuffix = user.ULICA_HS_D;
	const postalCode = user.POSTNA_STEVILKA;
	const city = user.POSTNI_KRAJ;
	
	console.log(`\nProcessing: ${user.KRATKO_IME || 'Unknown'}`);
	console.log('Address data:', { street, houseNumber, houseNumberSuffix, postalCode, city });
	
	// Build proper Slovenian address formats
	const addressVariations = [];
	
	// Full house number (combining number + suffix like "11D")
	let fullHouseNumber = '';
	if (houseNumber) {
		fullHouseNumber = houseNumber;
		if (houseNumberSuffix && houseNumberSuffix !== '/') {
			fullHouseNumber += houseNumberSuffix;
		}
	}
	
	// Variation 1: Full address in Slovenian format: "Street HouseNumber, PostalCode City, Slovenia"
	if (street && fullHouseNumber && postalCode && city) {
		addressVariations.push(`${street} ${fullHouseNumber}, ${postalCode} ${city}, Slovenia`);
	}
	
	// Variation 2: Street without house number
	if (street && postalCode && city) {
		addressVariations.push(`${street}, ${postalCode} ${city}, Slovenia`);
	}
	
	// Variation 3: Just postal code and city (very reliable in Slovenia)
	if (postalCode && city) {
		addressVariations.push(`${postalCode} ${city}, Slovenia`);
	}
	
	// Variation 4: Try the pre-formatted address from NASLOV_REGISTRACIJE if available
	if (user.NASLOV_REGISTRACIJE && user.NASLOV_REGISTRACIJE !== '/') {
		addressVariations.push(`${user.NASLOV_REGISTRACIJE}, Slovenia`);
	}
	
	// Remove duplicates and filter out invalid addresses
	const uniqueAddresses = [...new Set(addressVariations)].filter(addr => 
		addr && 
		addr !== ', Slovenia' && 
		addr !== 'Slovenia' &&
		!addr.includes('undefined') &&
		!addr.includes('null')
	);
	
	console.log('Trying addresses:', uniqueAddresses);
	
	for (let i = 0; i < uniqueAddresses.length; i++) {
		const address = uniqueAddresses[i];
		console.log(`  Attempt ${i + 1}: "${address}"`);
		
		const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=3&countrycodes=si&addressdetails=1`;

		try {
			// delay ker ima openstreetapi max 1 request na sekundo
			await delay(1000);
			
			const res = await fetch(url, {
				headers: {
					'User-Agent': 'Slovenia Company Geocoder/1.0'
				}
			});
			
			if (!res.ok) {
				console.log(`    HTTP error: ${res.status}`);
				continue;
			}
			
			const data = await res.json();
			console.log(`    Found ${data.length} results`);
			
			if (data.length > 0) {
				const bestResult = data.find(r => 
					r.type === 'house' || 
					r.type === 'building' || 
					r.type === 'address'
				) || data[0];
				
				const coords = `${bestResult.lat},${bestResult.lon}`;
				console.log(`    ✓ SUCCESS: ${coords} (${bestResult.type})`);
				console.log(`    Location: ${bestResult.display_name}`);
				return coords;
			} else {
				console.log(`    No results found`);
			}
		} catch (error) {
			console.error(`    Error: ${error.message}`);
		}
	}
	
	console.log(`✗ FAILED: No coordinates found for ${user.KRATKO_IME}`);
	return '';
}

async function main() {
	try {
		const data = fs.readFileSync('./usersBefore.json', 'utf-8');
		const users = JSON.parse(data);
		
		console.log(`Processing ${users.length} companies...`);
		
		for (let i = 0; i < users.length; i++) {
			const user = users[i];
			console.log(`\n=== ${i + 1}/${users.length} ===`);
			
			const coords = await getCoordinates(user);
			user.KOORDINATE = coords; 
			
			if ((i + 1) % 10 === 0) {
				fs.writeFileSync('./usersAfter.json', JSON.stringify(users, null, 2));
				console.log(`Progress saved (${i + 1}/${users.length})`);
			}
		}
		
		fs.writeFileSync('./usersAfter.json', JSON.stringify(users, null, 2));
		
		const withCoords = users.filter(u => u.KOORDINATE && u.KOORDINATE !== '').length;
		const uniqueCoords = new Set(users.map(u => u.KOORDINATE).filter(Boolean)).size;
		
		console.log('\n=== FINAL SUMMARY ===');
		console.log(`Total companies: ${users.length}`);
		console.log(`Successfully geocoded: ${withCoords}`);
		console.log(`Failed: ${users.length - withCoords}`);
		console.log(`Unique coordinates: ${uniqueCoords}`);
		
		if (uniqueCoords < withCoords * 0.5) {
			console.log('\n⚠️  WARNING: Many duplicates detected!');
		}
		
		console.log('\nDone! Results saved to usersAfter.json');
		
	} catch (error) {
		console.error('Fatal error:', error);
		process.exit(1);
	}
}

main().catch(console.error);