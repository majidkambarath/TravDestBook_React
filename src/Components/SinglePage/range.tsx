import { useState } from "react";
import { DateRange, DateRangeProps, Range } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {useDispatch} from 'react-redux'
import { setDate } from "../../Redux/slice/dateSlice";
interface State {
  startDate: any;
  endDate: any;
  key: string;
}




type Props = {
  onDateRangeChange: (dateRange: State) => void;
};

const initialDateRange: State[] = [
  {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
];

const RangeDate = ({ onDateRangeChange }: Props) => {
    const dispatch = useDispatch()
  const [state, setState] = useState<State[]>(initialDateRange);
  const handleDateRangeChange: DateRangeProps["onChange"] = (item: any) => {
    if ("startDate" in item.selection) {
      setState([item.selection]);
      dispatch(setDate(state))
      onDateRangeChange(item.selection);
    } else {
      const { startDate, endDate } = item.selection as Range;
      const newDateRange = { startDate, endDate, key: "selection" };
      dispatch(setDate([newDateRange]));
      dispatch(setDate(state))
      onDateRangeChange(newDateRange);
    }
  };

  return (
    <DateRange
      editableDateInputs={true}
      onChange={handleDateRangeChange}
      moveRangeOnFirstSelection={false}
      ranges={state}
    />
  );
};

export default RangeDate;
