class BadRequest extends Error {
  constructor(message){
    super()
    this.message = message
    this.code = 400
  }
}

module.exports = BadRequest