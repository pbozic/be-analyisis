const js = require('@eslint/js');
const eslintPluginTs = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const pluginImport = require('eslint-plugin-import');
const pluginPrettier = require('eslint-plugin-prettier');

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
	{
		ignores: ['node_modules', 'dist', 'types/zod', 'prisma/seeders'],
	},
	{
		files: ['**/*.ts', '**/*.js'],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
			parser: tsParser,
			parserOptions: process.env.ESLINT_STRICT ? { project: './tsconfig.json' } : {},
		},
		plugins: {
			'@typescript-eslint': eslintPluginTs,
			import: pluginImport,
			prettier: pluginPrettier,
		},
		rules: {
			...js.configs.recommended.rules,
			...eslintPluginTs.configs.recommended.rules,
			'no-async-promise-executor': 'warn',
			'prettier/prettier': 'error',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'no-undef': 'off',
			'@typescript-eslint/no-require-imports': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'import/order': [
				'warn',
				{
					groups: ['builtin', 'external', 'internal'],
					'newlines-between': 'always',
				},
			],
		},
	},
];
