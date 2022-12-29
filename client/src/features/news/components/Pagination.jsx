import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNews } from "../../../hooks/useNewsContext";
import getArchive from "../api/getArchive";

const Pagination = () => {
  const {
    newsState: { day, year, month, page, pages },
    dispatch,
  } = useNews();

  const handlePagination = async (type) => {
    dispatch({type:'fetchStart'})
    try {
      const count = type === 'next' ? 1 : -1
      dispatch({type: 'updatePageCount', payload:count})
      const {data:{items, total, pages}} = await getArchive(year, month, day, count+page);
      dispatch({ type: "setNews", payload: {items, total, pages} });
      dispatch({type: "fetchSuccess"})
    } catch (error) {
      dispatch({type: 'fetchFail'})
    }
  }

  return (
    <ButtonGroup>
      {page >= 1 && (
        <Button onClick={() => handlePagination('prev')} colorScheme="teal" variant="link">
          Previous
        </Button>
      )}
      {page <= pages && (
        <Button onClick={() => handlePagination('next')} colorScheme="teal" variant="link">
          Next
        </Button>
      )}
    </ButtonGroup>
  );
};

export default Pagination;
