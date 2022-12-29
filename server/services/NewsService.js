const axios = require("axios");
const News = require('../models/News')
const { NewsRepository } = require("../api/repositories");

const getByDay = (data, day) => {
  const numberDay = parseInt(day);

  const newsByDay = data.filter((el) => {
    const [pubDay] = el.pub_date.split("T")[0].split("-").slice(-1);
    return parseInt(pubDay) === numberDay;
  });
  return newsByDay;
};

const getKeywords = (data) => {
  const keywordsMap = data.flatMap((el) => {
    return el.keywords;
  });

  const uniqueCheck = Object.create(null);
  keywordsMap.map((el) => {
    if (!uniqueCheck[el.value]) {
      uniqueCheck[el.value] = el.value;
    }
  });

  return Object.keys(uniqueCheck);
};

class NewsService {

  async getNewsByDate(year = "2019", month = "1", day = "1", limit, skip) {
    try {
      const newsExists = await NewsRepository.getNews(year, month, day, limit, skip);
      
      if (newsExists.total > 0) {
        return newsExists;
      } else {
        const uri = `https://${process.env.API_URL}${year}/${month}.json?api-key=${process.env.API_KEY}`;
        const res = await axios({
          method: "get",
          url: uri,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        });
        const byDay = getByDay(res?.data?.response?.docs, day);
        // move to repo?
        for (let newsItem in byDay) {
          const {
            abstract,
            web_url,
            snippet,
            lead_paragraph,
            multimedia,
            headline,
            pub_date,
            section_name,
            word_count,
            uri,
          } = byDay[newsItem];
  
          const news = new News({
            abstract,
            web_url,
            snippet,
            lead_paragraph,
            multimedia,
            headline,
            pub_date,
            section_name,
            word_count,
            uri,
            search_date: new Date(`${year}/${month}/${day}`),
          });
  
          await news.save();
        }
        const news = await NewsRepository.getNews(year, month, day, limit, skip);
  
        return news;
      }
    } catch (error) {
      throw error;
    }
  };

  async getSingleNews(id){
    try {
      return await NewsRepository.getSingleNews(id);
    } catch (error) {
      throw error
    }
  }

} 

module.exports = new NewsService();
