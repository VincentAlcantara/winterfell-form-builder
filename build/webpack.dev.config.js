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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
  ],
  module: {
   
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-runtime"],
          presets: ["@babel/preset-env", '@babel/preset-react'],
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          // 'file?hash=sha512&digest=hex' + (isProd ? '&name=/media/[name].[ext]' : ''),
          'file?hash=sha512&digest=hex',
          'image-webpack?bypassOnDebug=false&optimizationLevel=1&interlaced=true',
        ],
        include: path.join(__dirname, './static/images/'),
        
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: false,
              importLoaders: 1,
            }
          },
          "sass-loader",
          "postcss-loader",
        ]
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
    alias: {
      react: path.resolve('./node_modules/react')
    },
    modules: [
      "./node_modules",
    ],
    extensions: ['.js', '.json'], // <- Just append a '.json' here
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "common",
          chunks: "all"
        }
      }
    }
 },
  externals: {
    react: 'commonjs react',
  'react-dom': 'commonjs react-dom',
  },
};
