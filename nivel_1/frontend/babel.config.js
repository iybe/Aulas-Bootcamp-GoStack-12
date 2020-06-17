/**
 * Babel: Converter codigo do react para um codigo que o browserr entenda
 * Webpack: Pra cada tipo de arquivo (.js , .css) eu vou converter o codigo de uma maneira diferente
 * 
 * Loaders: babel-loader, css-loader, image-loader
 */

/**
 * Arquivo de configuraçao do babel, esses presets sao configuraçoes de outros usuarios
 * que estao sendo reaproveitadas
 * 
 * yarn babel src/index.js --out-file public/bundle.js
 */

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
};