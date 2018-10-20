const routes = require('next-routes')

module.exports = routes()
  .add('/', 'index')
  .add('/:pageType/:assetId', 'feature')