module.exports = function(api) {
    api.cache(true);

    return {
        presets: [["babel-preset-expo", {
            jsxImportSource: "nativewind"
        }], "nativewind/babel"],

        plugins: [["module-resolver", {
            root: ["./", "./src"],

            alias: {
                "@": "./",
                "tailwind.config": "./tailwind.config.js",
                "@dtos": "./src/dtos",
                "@assets": "./src/assets",
                "@components": "./src/components",
                "@screens": "./src/screens",
                "@storage": "./src/storage",
                "@utils": "./src/utils",
                "@services": "./src/services",
                "@hooks": "./src/hooks",
                "@contexts": "./src/contexts",
                "@routes": "./src/routes"
            }
        }]]
    };
};