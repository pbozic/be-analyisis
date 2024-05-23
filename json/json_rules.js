const fs = require('fs');
const path = require('path');

const rulesDirectory = path.join(__dirname, 'rules');

// Function to read and combine JSON files
function combinedRulesJson() {
	let combinedJson = {};

	const files = fs.readdirSync(rulesDirectory);

	files.forEach(file => {
		if (path.extname(file) === '.json') {
			const filePath = path.join(rulesDirectory, file);

			const fileContents = JSON.parse(fs.readFileSync(filePath, 'utf8'));
			const key = path.basename(file, '.json');
			combinedJson[key] = fileContents;
		}
	});

	return combinedJson;
}

module.exports = combinedRulesJson();