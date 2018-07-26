
let path = require('path');
module.exports = {
    "devtool": "source-map",
    "output": {
        "path": path.resolve("./dist/"),
        "filename": "[name].js",
        "sourceMapFilename": "[file].map"
    },
    "externals": {
        "appA": {
            commonjs: "appA",
            commonjs2: "appA",
            amd: "appA",
            root: "appA",
            var: "appA"
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
        "modules": [
            './',
            "node_modules",
        ],
        "extensions": [
            ".ts",
            ".js"
        ]
    },
    "entry": './Child.ts',
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