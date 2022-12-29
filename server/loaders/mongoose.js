const mongoose = require('mongoose')

module.exports = async () => {
  const connect = await mongoose.connect(process.env.MONGO_URI)
  return connect.connection.db
}
