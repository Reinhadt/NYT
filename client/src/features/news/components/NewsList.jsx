import { Link } from "react-router-dom";
import { Box } from '@chakra-ui/react'
import { useNews } from "../../../hooks/useNewsContext";
import { NewsCard } from "./NewsCard";
import Pagination from "./Pagination";

const renderNews = (news) => {
  return news?.map(({ headline, snippet, _id, ...dataRest }) => (
    <Link key={_id} to={`/${_id}`} state={{headline, ...dataRest}}>
      <NewsCard title={headline.main} body={snippet} />
    </Link>
  ));
};

export const NewsList = () => {
  const {
    newsState: { news, page }, 
  } = useNews();
  return (
    <Box maxW='100%' display='flex' alignItems='baseline'>
      {news?.length > 0 ? (
        <Box alignItems='center'>
          {renderNews(news)}
          <Pagination />
        </Box>
      ) : null}
    </Box>
  );
};
