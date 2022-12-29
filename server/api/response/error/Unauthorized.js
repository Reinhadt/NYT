class Unauthorized extends Error {
  constructor(message) {
    super()
    this.message = message
    this.code = 401;
  }
}

module.exports = Unauthorized;