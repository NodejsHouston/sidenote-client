var webpack = require('webpack'),
	path = require('path');

var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports ={
	entry: './app/app.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'index_bundles.js'
	},

	devServer: {
    	//historyApiFallback: true,
    	hot: true,
    	inline: true,
    	//progress: true
	},

	plugins: [
		new HtmlwebpackPlugin({
			title: 'blog'
		})
	],

	modules: {
		loaders:[
			{
				test: /\.css$/,
        		loaders: ['style', 'css']
        		//include: APP_PATH
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ["react-hot", "babel-loader"]
			}
		]
	}

}