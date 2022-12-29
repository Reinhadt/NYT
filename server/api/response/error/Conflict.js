class Conflict extends Error {
  constructor(message) {
    super()
    this.message = message
    this.code = 409;
  }
}

module.exports = Conflict;
