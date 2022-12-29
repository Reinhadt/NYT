// import { useState } from "react";
import NumberInputCustom from "../../../components/NumberInput/NumberInputCustom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNews } from "../../../hooks/useNewsContext";
import getArchive from "../api/getArchive";
import useToastNotification from "../../../hooks/useToastNotification";

const InputCalendar = () => {
  const { toast } = useToastNotification();

  const {
    newsState: { day, year, month, news },
    dispatch,
  } = useNews();

  const changeDay = (valueString) => {
    dispatch({ type: "setDay", payload: valueString });
  };

  const changeMonth = (valueString) => {
    dispatch({ type: "setMonth", payload: valueString });
  };

  const changeYear = (valueString) => {
    dispatch({ type: "setYear", payload: valueString });
  };

  const handleFetch = async () => {
    dispatch({ type: "fetchStart" });
    try {
      const responses = await getArchive(year, month, day);
      const {
        data: { items, total, pages },
        status: { message },
      } = responses;
      dispatch({ type: "setNews", payload: { items, total, pages } });
      dispatch({ type: "fetchSuccess" });
      toast(`${message} successfully`, "success");
    } catch (error) {
      dispatch({ type: "fetchFail" });
      toast(`${error}`, "error");
    }
  };

  return (
    <div>
      <NumberInputCustom value={day} onChange={changeDay} min={1} max={31} />
      <NumberInputCustom
        value={month}
        onChange={changeMonth}
        min={1}
        max={12}
      />
      <NumberInputCustom
        value={year}
        onChange={changeYear}
        min={1851}
        max={2019}
      />
      <ButtonGroup>
        <Button onClick={handleFetch} colorScheme="teal" variant="outline">
          Search
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default InputCalendar;
