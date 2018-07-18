'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"https://dsn.apizza.net/mock/21032d6612a1e591a4a28c9c6d571cec/"'
})
