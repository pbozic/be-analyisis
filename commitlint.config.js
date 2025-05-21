module.exports = {
	rules: {
		'custom-rule': [2, 'always'],
	},
	plugins: [
		{
			rules: {
				'custom-rule': ({ raw }) => {
					const isValid = raw.startsWith('fix: ') || /^\[KLIKNI-\d+\]/.test(raw);
					return [isValid, 'Commit message must start with "fix: " or "[KLIKNI-123]"'];
				},
			},
		},
	],
};
