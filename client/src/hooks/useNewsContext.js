import { useContext } from "react"
import { NewsContext } from "../context/NewsContext"


export const useNews = () => {
  const {newsState, dispatch} = useContext(NewsContext)

  return {
    newsState,
    dispatch
  }

}