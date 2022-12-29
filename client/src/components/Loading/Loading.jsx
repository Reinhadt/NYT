import { useNews } from "../../hooks/useNewsContext";
import LoadingSpinner from "../Spinner/Spinner";

const Loading = ({ children }) => {
  const { newsState: {loading} } = useNews();
  return <>{loading ? <LoadingSpinner/> : <>{ children }</>}</>;
};

export default Loading;
