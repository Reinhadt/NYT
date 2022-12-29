const {Router} = require('express')
const news = require('./routes/news')
const auth = require('./routes/auth')
const user = require('./routes/user')

module.exports =  () => {
	const app = Router()
	auth(app)
	news(app)
	user(app)

	return app
}