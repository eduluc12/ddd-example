import * as webpack from 'webpack';

export default {
    mode: 'production',
    entry: './src/main.ts',
    target: 'node',
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /(node_modules)/,
          use: "swc-loader"
        }
      ]
    },
    resolve: {
      extensions: ['.ts'],
    },
    output: {
      filename: 'bundle.js',
      library: {
        type: 'commonjs2'
      }
    },
} as webpack.Configuration