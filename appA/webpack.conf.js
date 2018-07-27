let path = require('path');
module.exports = {
    "devtool": "source-map",
    "output": {
        "path": path.resolve("./dist/"),
        "filename": "[name].js",
        "sourceMapFilename": "[file].map",
        "library": "appA",
        "libraryTarget": "umd",
        "umdNamedDefine": true
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
        "modules": [
            './',
            "node_modules",
        ],
        "extensions": [
            ".ts",
            ".js"
        ]
    },
    "entry": './entry.ts',
    "optimization": {
        // "runtimeChunk": "single",
        "splitChunks": {
            "cacheGroups": {
                "vendor": {
                    "name": "vendor",
                    "test": /\/node_modules\/(@angular|core-js|rxjs|zone.js)\//,
                    "chunks": "all",
                    "priority": 0,
                    "enforce": true
                }
            }
        }
    }
};