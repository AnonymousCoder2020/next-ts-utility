const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

module.exports = (env, { page: buildMode }) => {
  const { analyze } = env || {}

  return {
    mode: buildMode || 'development',
    entry: src + '/index.ts',
    output: {
      path: dist,
      filename: 'index.js',
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)/,
          exclude: '/node_modules/',
          use: ['babel-loader', 'ts-loader'],
        },
      ],
    },
    resolve: {
      alias: {
        '~': src,
        '~comp': src + '/components/',
        '~lib': src + '/lib/',
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
    },
    plugins: [].concat(analyze === 'true' ? [new BundleAnalyzerPlugin()] : []).filter(Boolean),
    devServer: {
      inline: true,
      contentBase: dist,
      hot: true,
    },
  }
}
