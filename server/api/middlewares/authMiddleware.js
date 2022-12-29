const jwt = require('jsonwebtoken')
const Unauthorized = require('../response/error/Unauthorized')
const Forbidden = require('../response/error/Forbidden')

const authMiddleware = (req, res, next) => {
  const authToken = req.headers['authorization']

  if(!authToken){
    const unauthorized = new Unauthorized('User not authenticated')
    next(unauthorized)
  }

  const token = authToken.split(' ')[1]
  try {
    const decodedUser = jwt.verify(token, process.env.TOKEN_KEY)
    req.user = decodedUser
  } catch (error) {
    const nonValid = new Forbidden('User not authenticated')
    next(nonValid)
  }

  return next()
}

module.exports = authMiddleware