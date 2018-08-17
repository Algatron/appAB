let path = require('path');
module.exports = {
    "devtool": "source-map",
    "output": {
        "path": path.resolve("./dist/"),
        "filename": "[name].js",
        "sourceMapFilename": "[file].map",
        "library": "appA",
        "libraryTarget": "var"
    },
    externals: {
        appA: {
            var: 'appA',
            commonjs: 'appA',
            commonjs2: 'appA',
            amd: 'appA'
        }
    },
    "mode": "development",
    "module": {
        "rules": [
            // {
            //     test: require.resolve('./Child.ts'),
            //     // test: require.resolve('./Child.ts'),
            //     use: [{
            //       loader: 'expose-loader?child!expose-loader?window.child2',
            //     }]
            // },
            {
                "test": /\.ts$/,
                "use": [
                    {
                        "loader": "awesome-typescript-loader",
                        "options": {
                            "configFileName": "./tsconfig.json"
                        }
                    }
                ]
            },
        ]
    },
    "resolve": {
        "extensions": [
            ".ts",
            ".js"
        ]
    },
    "entry": {
        appB: './b.entry.ts',
    },
    "optimization": {
        "runtimeChunk": "single",
        "splitChunks": {
            "cacheGroups": {
                "vendor": {
                    "name": "vendor",
                    "test": /\/node_modules\//,
                    "chunks": "all",
                    "priority": 0,
                    "enforce": true
                }
            }
        }
    }
};
