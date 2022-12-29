import axios from "axios";


const getArchive = async (year, month, day, page=0) => {

  // const uri = `https://${import.meta.env.VITE_API_URL}2019/${month}.json?api-key=${import.meta.env.VITE_API_KEY}`
  const uri = `http://localhost:4001/api/news?limit=10&offset=${page}`
  console.log('pagina', page)
  const res = await axios.post(uri, {
    year,
    month,
    day,
  })

  return res.data
}

export default getArchive