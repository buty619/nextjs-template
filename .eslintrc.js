module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		node: true,
		jest: true,
	},
	plugins: ['@typescript-eslint', 'react', 'react-hooks'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
	overrides: [
		{
			files: ['**/*.test.*', '**/test.*'],
			rules: {
				'@typescript-eslint/no-explicit-any': 'off', // For testing purposes we may need to have mock any props
			},
		},
		{
			files: ['*'],
			rules: {
				'no-undef': 'off', // Taken care of by typescript
				'react/prop-types': 'off', // Taken care of by typescript
				'@typescript-eslint/explicit-function-return-type': [
					'warn',
					{
						allowTypedFunctionExpressions: true,
						allowExpressions: true,
						allowHigherOrderFunctions: true,
					},
				],
				'@typescript-eslint/no-empty-function': 'off',
				'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
				'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
				'react/display-name': 'off', // with react-loadable this would give so many errors if enabled
			},
		},
	],
};