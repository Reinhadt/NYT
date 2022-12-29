import { createContext } from "react";

const INITIAL_STATE = {
  day: '1',
  month:'1',
  year: '1851',
  news:[],
  page: 0
}

export const NewsContext = createContext(INITIAL_STATE)