class Forbidden extends Error {
  constructor(message){
    super()
    this.message = message
    this.code = 403
  }
}

module.exports = Forbidden