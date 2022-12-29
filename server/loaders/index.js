const expressLoader = require('./express')
const mongooseLoader = require('./mongoose')

module.exports = async (expressApp) => {
  await mongooseLoader()
  expressLoader(expressApp)
}