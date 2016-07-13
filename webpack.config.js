var path = require('path');
var ROOT = path.resolve(__dirname, 'src/main/resources/static');
var DEST = path.resolve(__dirname, 'src/main/resources/static/dist');

module.exports = {
    devtool: 'sourcemaps',
    entry: ROOT + '/app.js',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    cache: true,
    debug: true,
    output: {
        path: DEST,
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '/\.js[x]?$/'),
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                  presets: [ 'es2015', 'react' ]
                }
            }
        ]

    }
};
