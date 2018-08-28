//This file exports our project's webpack configuration object.
module.exports = {
    // add our module loader.
    module: {
        loaders: [
            {
                //check for any file that ends with .js, we excluded any file in node_modules directory
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                // any file that ends with .css and is not in node_modules directory
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css'
            }
        ]
    },
    entry: './main.js',
    output: {
        filename: './bundle.js'
    },
    //You can configure webpack to automatically watch the project directory whenever webpack is run.
    //To do this set a new config attribute named watch to true.
    watch: true
};