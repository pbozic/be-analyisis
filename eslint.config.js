import js from '@eslint/js';
import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
export default [
	{
		ignores: ['node_modules', 'dist', 'types/zod', '**/prisma/seeders/**', 'docs', 'dist'],
	},
	// TypeScript files: full type-checking
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: './tsconfig.json', // enable full TS type-checking
			},
			ecmaVersion: 2020,
			sourceType: 'module',
		},
		plugins: {
			'@typescript-eslint': eslintPluginTs,
			import: pluginImport,
			prettier: pluginPrettier,
		},
		rules: {
			...js.configs.recommended.rules,
			...eslintPluginTs.configs.recommended?.rules,
			'no-async-promise-executor': 'warn',
			'prettier/prettier': 'error',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'no-undef': 'warn',
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
	// JS files: only lint, no TS type-checking
	{
		files: ['**/*.js'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				// No `project` here = no type-checking
			},
			ecmaVersion: 2020,
			sourceType: 'module',
		},
		plugins: {
			'@typescript-eslint': eslintPluginTs,
			import: pluginImport,
			prettier: pluginPrettier,
		},
		rules: {
			...js.configs.recommended.rules,
			'prettier/prettier': 'error',
			'no-unused-vars': 'warn',
			// Disable TS-specific rules for JS
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/no-var-requires': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
		},
	},
];
