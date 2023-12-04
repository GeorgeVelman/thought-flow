const path = require('path')
const mode = process.env.REACT_APP_NODE_ENV || 'development'
const devMode = mode === 'development'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
const { DefinePlugin, SourceMapDevToolPlugin } = require('webpack')
const isDevelopment = process.env.REACT_APP_NODE_ENV !== 'production'

module.exports = {
	mode: process.env.REACT_APP_NODE_ENV || 'development',

	entry: {
		main: path.resolve(__dirname, './src/index.js'),
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		filename: '[name].[contenthash].js',
		assetModuleFilename: 'img/[hash][ext]',
		publicPath: '/',
	},

	devServer: {
		static: path.resolve(__dirname, 'dist'),
		port: 8080,
		hot: true,
		open: true,
		historyApiFallback: true,
	},

	resolve: {
		extensions: ['.*', '.js', '.jsx'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@images': path.resolve(__dirname, 'src/images'),
			'@redux': path.resolve(__dirname, 'src/redux'),
			'@public': path.resolve(__dirname, 'public'),
		},
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'webpack Boilerplate',
			template: path.resolve(__dirname, './public/index.html'),
			filename: 'index.html',
		}),

		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),

		new DefinePlugin({
			'process.env': JSON.stringify(dotenv.parsed),
			'process.env.REACT_APP_NODE_ENV': JSON.stringify(
				isDevelopment ? 'development' : 'production'
			),
		}),

		new SourceMapDevToolPlugin({
			filename: '[file].map',
		}),

		new CleanWebpackPlugin(),
	],

	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},

			{
				test: /\.(js|jsx)$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},

			{
				test: /\.(jpe?g|png|svg|webp|gif)$/i,
				use: [
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.9],
								speed: 4,
							},
							gifsicle: {
								interlaced: false,
							},
							// the webp option will enable WEBP
							webp: {
								quality: 75,
							},
						},
					},
				],
				type: 'asset/resource',
			},

			{
				test: /\.(c|sc|sa)ss$/i,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [require('postcss-preset-env')],
							},
						},
					},
					'sass-loader',
				],
			},

			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
				generator: {
					filename: 'fonts/[name][ext]',
				},
			},
		],
	},
}
