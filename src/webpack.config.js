'use strict';
const path = require('path');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');

const publicPath = '/jp/';
const stagingServer = 'office5.zcomwallet.com:8080';
module.exports = webpackMerge(commonConfig(), {
  entry: ['./src/index.tsx'].concat(
    'webpack-dev-server/client?http://localhost:8080'
  ),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: publicPath,
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map',
  plugins: [
    new webpack.SourceMapDevToolPlugin({ filename: null, test: /\.tsx?$/ }),
    new webpack.DefinePlugin({
      DOMAIN: JSON.stringify('localhost:8081'),
      PUBLIC_PATH: JSON.stringify(publicPath),
      HTTP_SCHEME: JSON.stringify('http'),
    }),
  ],
  devServer: {
    hot: true,
    contentBase: './src',
    inline: true,
    port: 8081,
    host: 'localhost',
    historyApiFallback: { index: '/jp/' },
    proxy: {
      '/admin/api/v1/defs/message.json': {
        target: `https://${stagingServer}`,
        // target: 'http://localhost:10010',
        secure: false,
        headers: {
          Origin: `https://${stagingServer}`,
        },
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
      },
      '/admin/api/v1/admin/login': {
        target: `https://${stagingServer}`,
        // target: 'http://localhost:10011',
        secure: false,
        headers: {
          Origin: `https://${stagingServer}`,
        },
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
      },
      '/admin/api/v1/admin/getPermissions': {
        target: `https://${stagingServer}`,
        // target: 'http://localhost:10011',
        secure: false,
        headers: {
          Origin: `https://${stagingServer}`,
        },
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
      },
      '/hoover': {
        target: `https://${stagingServer}`,
        // target: 'http://localhost:10012',
        secure: false,
        headers: {
          Origin: `https://${stagingServer}`,
        },
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
      },
      '/beaver': {
        target: `https://${stagingServer}`,
        // target: 'http://localhost:10013',
        secure: false,
        headers: {
          Origin: `https://${stagingServer}`,
        },
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
      },
      '/admin/api/v1': {
        target: `https://${stagingServer}`,
        // target: 'http://localhost:10011',
        secure: false,
        headers: {
          Origin: `https://${stagingServer}`,
        },
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
      },
    },
  },
});
