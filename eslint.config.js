import process from 'node:process';

import js from '@eslint/js';
import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
export default [
	{
		ignores: ['node_modules', 'dist', 'types/zod', '**/prisma/seeders/**', 'docs'],
	},

	// JS files — only linting
	{
		files: ['**/*.js'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
			},
			globals: {
				console: 'readonly', // ✅ explicitly define `console` as a global
				process: 'readonly', // ✅ explicitly define `process` as a global
			},
		},
		plugins: {
			import: pluginImport,
			prettier: pluginPrettier,
		},
		rules: {
			...js.configs.recommended.rules,
			'prettier/prettier': 'error',
			'import/order': [
				'warn',
				{
					groups: ['builtin', 'external', 'internal'],
					'newlines-between': 'always',
				},
			],
			'no-unused-vars': 'warn',
			'no-undef': 'warn',
			'no-async-promise-executor': 'warn',
			// no TS rules here
		},
	},

	// TypeScript files — full type-checking
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: process.cwd(),
			},
			ecmaVersion: 2020,
			sourceType: 'module',
			globals: {
				console: 'readonly', // ✅ explicitly define `console` as a global
			},
		},

		plugins: {
			'@typescript-eslint': eslintPluginTs,
			import: pluginImport,
			prettier: pluginPrettier,
		},
		...eslintPluginTs.configs.recommended,
		rules: {
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
