const errorResponder = (err, req, res, next) => {
  if(!err.code){
    err.code = 500
    err.message = 'Internal server error'
  }
  res.header("Content-Type", 'application/json')
  res.status(err.code).send(JSON.stringify(err, null, 2))
}

module.exports = {
  errorResponder
}