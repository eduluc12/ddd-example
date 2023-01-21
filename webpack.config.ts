import {IgnorePlugin} from 'webpack';
import type {Configuration} from 'webpack';

const lazyImports = [
  '@nestjs/microservices/microservices-module',
  '@nestjs/websockets/socket-module',
  'cache-manager',
  'class-validator',
  '@nestjs/microservices',
];

export default {
  mode: 'development',
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
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new IgnorePlugin({
      checkResource(resource) {
        if (lazyImports.includes(resource)) {
          try {
            require.resolve(resource);
          } catch (err) {
            return true;
          }
        }
        return false;
      },
    }),
  ],
  output: {
    filename: 'bundle.js',
    library: {
      type: 'commonjs2'
    }
  },
} as Configuration