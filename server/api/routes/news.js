const {Router} = require('express');
const route = Router()
const newsService = require('../../services/NewsService')
const {responseTransformer} = require('../../utils/responseTransformer')
const authMiddleware = require('../middlewares/authMiddleware')

module.exports = (app) => {

  app.use('/news', route)
  route.use(authMiddleware)

  route.post('/', async (req, res) => {
    const {year, month, day} = req.body
    const {limit=10, offset=0} = req.query
    //move this to a controller?
    const skip = limit*offset
    const data = await newsService.getNewsByDate(year, month, day, limit, skip)
    res.json(responseTransformer(data, 'Getting all the news'))
  })

  route.get('/:id', async(req, res) => {
    const {id} = req.params
    const data = await newsService.getSingleNews(id)
    console.log(data)
    res.json(responseTransformer(data, 'Getting news'))
  })

}