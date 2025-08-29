export const rules = {
	'type-enum': [0],
	'custom-rule': [2, 'always'],
};
export const plugins = [
	{
		rules: {
			'custom-rule': ({ raw }) => {
				const isValid = raw.startsWith('feature: ') || raw.startsWith('fix: ') || /^\[KLIKNI-\d+\]/.test(raw);
				return [isValid, 'Commit message must start with "feature:", "fix: " or "[KLIKNI-123]"'];
			},
		},
	},
];
export default {
	rules,
	plugins,
};
