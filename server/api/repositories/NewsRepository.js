const News = require("../../models/News");

class NewsRepository {
  constructor() {}

  async getNews(year, month, day, limit = 10, skip = 0) {
    const query = {
      search_date: new Date(`${year}/${month}/${day}`),
    }

    const count = await News.countDocuments(query);
    const records = await News.find(query)
      .skip(skip)
      .limit(limit);
    
    return {total: count, data: records}
  }

  async getSingleNews(id){
    const note = await News.findById(id)
    return {data: note}
  }

}

module.exports = new NewsRepository();
