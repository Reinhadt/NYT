import InputCalendar from "../components/InputCalendar";
import { NewsList } from "../components/NewsList";
import Loading from "../../../components/Loading/Loading";

const Home = () => {
  return (
    <>
      <Loading>
        <InputCalendar />
        <NewsList />
      </Loading>
    </>
  );
};

export default Home;
