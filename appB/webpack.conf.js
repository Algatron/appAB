let path = require('path');
module.exports = {
    "devtool": "source-map",
    "output": {
        "path": path.resolve("./dist/"),
        "filename": "[name].js",
        "sourceMapFilename": "[file].map",
        // "library": "appB",
        // "libraryTarget": "umd",
        // "umdNamedDefine": true
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
            }
        ]
    },
    "resolve": {
        "extensions": [
            ".ts",
            ".js"
        ]
    },
    "entry": {
        appB: './entry.ts',
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
