var path = require('path');
var ROOT = path.resolve(__dirname, 'src/main/resources/static');
// var DEST = path.resolve(__dirname, 'src/main/resources/static/dist');
var DEST = path.resolve(__dirname, 'src/main/resources/static/dist');

module.exports = {
    //entry: './app.js',
    devtool: 'sourcemaps',
    entry: ROOT + '/app.js',
    /*
    entry: {
        app: ROOT + '/app.js',
    },
    */
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    cache: true,
    debug: true,
    /*
    output: {
        path: __dirname,
        filename: './built/bundle.js'
    },
    */
    output: {
        path: DEST,
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    }
};
