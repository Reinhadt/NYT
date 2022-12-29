import { useReducer } from 'react';
import NewsReducer from './NewsReducer';
import { NewsContext } from './NewsContext';

const INITIAL_STATE = {
  day: '1',
  month:'1',
  year: '1851',
  news:[],
  page: 0
}

const NewsProvider = ({ children }) => {
  const [newsState, dispatch] = useReducer(NewsReducer, INITIAL_STATE);

  return (
    <NewsContext.Provider value={{ newsState, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider