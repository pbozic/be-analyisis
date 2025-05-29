import js from '@eslint/js';
import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
export default [
	{
		ignores: ['node_modules', 'dist', 'types/zod', '**/prisma/seeders/**', 'docs', 'dist'],
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
