const { 
  override, 
  addWebpackAlias, addWebpackModuleRule,
  addBabelPreset, 
} = require('customize-cra');
const path = require('path');

module.exports = override(

  addWebpackModuleRule({
    test: /\.d\.ts$/,
    loader: 'ignore-loader', // Ignore .d.ts files completely
  }),
  
   // Exclude .d.ts files from source-map-loader
   addWebpackModuleRule({
    enforce: 'pre', 
    test: /\.js$/, 
    loader: 'source-map-loader',
    exclude: [/node_modules/, /\.d\.ts$/], // Exclude .d.ts files
  }),
  
  // Handle TypeScript files with ts-loader
  addWebpackModuleRule({
    test: /\.tsx?$/, 
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true, // Optional: speeds up compilation by skipping type checking
      },
    },
    exclude: /node_modules/, 
  }),

  // Babel loader to transpile JavaScript and JSX files
  addWebpackModuleRule({
    test: /\.(js|jsx)$/,   
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      },
    },
  }),

  // Webpack aliases to replace Node.js core modules with browser-friendly versions
  addWebpackAlias({
    'path': require.resolve('path-browserify'),
    'stream': require.resolve('stream-browserify'),
    'crypto': require.resolve('crypto-browserify'),
    'https': require.resolve('https-browserify'),
    'http': require.resolve('stream-http'),
    'pnpapi': require.resolve('pnp-webpack-plugin'),
    "tty": require.resolve("tty-browserify"),
    'os': require.resolve('os-browserify/browser'),
    'zlib': require.resolve('browserify-zlib'),
    'assert': require.resolve('assert/'),
    'vm': require.resolve('vm-browserify'),
    'constants': require.resolve('constants-browserify'),
    'fs': false,
    'module': false,
    'child_process': false,
    'worker_threads': false,
  })
);
