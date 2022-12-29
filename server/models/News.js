const { default: mongoose } = require("mongoose")

const NewsSchema = mongoose.Schema({
  abstract :{
    type: String
  },
  web_url:{
    type: String
  },
  snippet:{
    type: String
  },
  lead_paragraph: {
    type: String
  },
  multimedia: mongoose.Schema.Types.Mixed,
  headline: mongoose.Schema.Types.Mixed,
  pub_date:{
    type: Date
  },
  section_name:{
    type: String
  },
  word_count:{
    type: Number
  },
  uri:{
    type: String
  },
  search_date:{
    type: Date
  }
})

const News = mongoose.model('News', NewsSchema)

module.exports = News