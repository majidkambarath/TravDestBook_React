import React, { useState } from "react";
import { Card, Calendar } from "react-rainbow-components";

const today = new Date();
const initialState = { range: [new Date(2023,5,3), new Date(2023,5,29)] };

type props ={
  DatePikker : (dateDay: any) => void
}

const ExampleCalendar = ({DatePikker}: props) => {

  const [state, setState] = useState(initialState);
  const dates = state.range.map((date) => date.toISOString().split('T')[0]);
  const daysOfWeek = state.range.map((date) => date.toLocaleDateString('en-US', { weekday: 'long' }));
  const dateDay = { dates, daysOfWeek };
  
  return (
    <div>
      <div className="rainbow-align-content_center rainbow-p-vertical_xx-large rainbow-p-horizontal_medium">
        <Card
     
          className="rainbow-p-around_large md:w-[400px] w-[380px]  h-[400px]"
        >
          <Calendar
            id="calendar-7"
            selectionType="range"
            value={state.range}
            onChange={(value:any) => {setState({ range: value }); DatePikker(dateDay)}}
          
          />
        </Card>
      </div>
    </div>
  );
};

export default ExampleCalendar;
