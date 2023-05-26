module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        "nativewind/babel",
        [
            "module-resolver",
            {
                root: ["."],
                extensions: [".ts", ".tsx", ".jsx", ".js"],
                alias: {
                    "@src": "./src",
                },
            }
        ]
    ],
};
