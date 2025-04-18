module.exports = (api) => {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins:
            [
                ['module-resolver',
                {
                    "root": ["./src"],
                    "alias": {
                        "@assets": "./src/asets",
                        "@components": "./src/components",
                        "@routes": "./src/routes",
                        "@screens": "./src/screens",
                        "@storage": "./src/storage",
                        "@utils": "./src/utils",
                    },
                },
            ],
        ],
    };
};