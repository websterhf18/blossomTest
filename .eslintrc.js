module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    ignorePatterns: [
        "/**/node_modules/*",
        "babel.config.js"
    ],
    settings: {
        "import/resolver": {
            alias: {
                map: [
                    ["@src", "./src"]
                ],
                extensions: [".js", ".ts", ".tsx"],
            },
        },
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
            },
        },
    ],
};
