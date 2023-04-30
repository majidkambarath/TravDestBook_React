
import React, {  useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Overview from "../Overview";
import Calendar from "../range";
import SingleForm from "../SingleForm";
import {useDispatch} from 'react-redux'
import { setDate } from "../../../Redux/slice/dateSlice";
interface TabData {
  label: string;
  value: string;
  component: React.ReactElement;
}

const Example: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Over View");
  const dispatch = useDispatch()
  const DateState = (dateDay: any) => {
    dispatch(setDate(dateDay))
  }

  const data: TabData[] = [
    {
      label: "Over View",
      value: "Over View",
      component:  (
        <>
          <div className="block md:hidden">
            <Overview />
          </div>
        </>
      ),
    },
    {
      label: "Booking Date",
      value: "Booking Date",
      component: (
        <>
          <Calendar onDateRangeChange={DateState}/>
        </>
      ),
    },
    {
      label: "Enquiry",
      value: "Enquiry",
      component: (
        <>
          <SingleForm />
        </>
      ),
    },
  ];

  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className=" block md:hidden">
      <Tabs value={activeTab}>
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => handleTabClick(value)}
            >
              <div className="flex items-center gap-2">{label}</div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, component }) => (
            <TabPanel key={value} value={value}>
              {component}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Example;
