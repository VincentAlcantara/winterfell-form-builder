const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssMixins = require('postcss-mixins');
const postcssNested = require('postcss-nested');
const postcssExtend = require('postcss-extend');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3001',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './index',
    ],
    common: [
      'react',
      'redux',
      'react-dom',
      'react-redux',
    ],
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: 'bundle.js',
    publicPath: '/',
    chunkFilename: '[name].chunk.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
  ],
  eslint: {
    configFile: '.eslintrc',
    failOnWarning: false,
    failOnError: false,
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint',
      },
    ],
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ['transform-runtime', 'array-includes'],
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          // 'file?hash=sha512&digest=hex' + (isProd ? '&name=/media/[name].[ext]' : ''),
          'file?hash=sha512&digest=hex',
          'image-webpack?bypassOnDebug=false&optimizationLevel=1&interlaced=true',
        ],
        include: './static/images/',
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?outputStyle=compressed',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader',// eslint-disable-line
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /favicon.ico$/,
        loader: 'url-loader?limit=1',
      },
    ],
  },
  resolve: {
    root: [
      path.resolve('./node_modules'),
    ],
    extensions: ['', '.js', '.json'], // <- Just append a '.json' here
  },
  // Process the CSS with PostCSS
  postcss: () => [postcssMixins, autoprefixer, postcssNested, postcssExtend],
};
