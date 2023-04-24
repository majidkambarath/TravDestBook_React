import { Card, Calendar } from "react-rainbow-components";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { destinViewApi } from "../../../Api/user/destinationApi/destinView";
import { RootState } from "../../../Redux/store";
import Loader from "../../Loader/Loader";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
const initialState = { range: [new Date(), new Date(2019, 0, 15)] };
const calendarContainerStyles: React.CSSProperties = {
  width: "23rem",
  height: "20rem",
};

interface destinData {
  descrption: string;
  Highlights: string;
  Included: [];
  Excluded: [];
}
interface TabData {
  label: string;
  value: string;
  component: React.ReactElement;
}

const Example: React.FC = () => {
  const destinID = useSelector(
    (state: RootState) => state.destinationID.destinationsID
  );
  const [destinData, setDestinData] = useState<destinData | null>(null);

  const [state, setState] = useState(initialState);
  useEffect(() => {
    const getData = async () => {
      try {
        await destinViewApi(destinID).then((res) => {
          setDestinData(res?.data.fetch);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [destinID]);
  const [activeTab, setActiveTab] = useState<string>("Over View");

  const data: TabData[] = [
    {
      label: "Over View",
      value: "Over View",
      component: (
        <div>
          <>
            <div className="bg-white h-[1130px] w-full  ">
              <h1 className="font-Ariza text-2xl  font-semibold  text-sky-900">
                Overview
              </h1>
              <div className="w-[370px]">
                <p className="font-Arzia  font-normal  ">
                  {destinData?.descrption}
                </p>
              </div>
              <h1 className="font-Ariza text-2xl font-semibold mt-4 text-sky-900">
                Tour Highlights
              </h1>
              <div className="w-370">
                <p className="font-Ariza  font-normal ">
                  {destinData?.Highlights}
                </p>
              </div>
              <h1 className="font-Ariza text-2xl  text-sky-900  font-semibold ">
                Included
              </h1>
              <div className="">
                <div>
                  <ul>
                    {destinData?.Included.map((items) => {
                      return (
                        <li className="w-[300px]">
                          <p className="font-Yatra text-md  "> * {items}.</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h1 className="font-Ariza text-2xl  text-sky-900  font-semibold ">
                    Excluded
                  </h1>
                  <ul>
                    {destinData?.Excluded.map((items) => {
                      return (
                        <li className="w-[300px]">
                          <p className="font-Yatra text-md  "> * {items}.</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <h1 className="font-Ariza text-2xl font-semibold  text-sky-900">
                Company Travel Policy
              </h1>
              <div className="w-[370px]">
                <p className="font-Asap text-md mt-4  underline ">
                  A company travel policy is designed to outline a business's
                  travel arrangement procedures and guidelines, stipulating
                  which travel expenses are paid for by the company and how to
                  manage the reimbursement process. A company travel policy
                  should include a purpose statement, scope, authorization and
                  reimbursement section, and travel arrangement processes.
                  Creating a detailed company travel policy will help ensure all
                  business trips run smoothly, are secured ahead of time, and
                  adhere to all company requirements..
                </p>
              </div>
            </div>
          </>
        </div>
      ),
    },
    {
      label: "Booking Date",
      value: "Booking Date",
      component: (
        <div>
          <>
            <div>
              <div className="rainbow-align-content_center rainbow-p-vertical_xx-large rainbow-p-horizontal_medium">
                <Card
                  style={calendarContainerStyles}
                  className="rainbow-p-around_large"
                >
                  <Calendar
                    id="calendar-7"
                    selectionType="range"
                    value={state.range}
                    onChange={(value: any) => setState({ range: value })}
                    // disabledDays={bookedDates}
                  />
                </Card>
              </div>
            </div>
          </>
        </div>
      ),
    },
    {
      label: "Enquiry",
      value: "Enquiry",
      component: <div>
        <>
        <div className=" bg-white h-[650px] w-[370px]  rounded-md shadow-2xl drop-shadow-xl ">
        <div className="py-5 px-7 ">
          <h1 className="font-Ariza text-xl ">FROM</h1>
          <h1 className="font-Ariza text-xl font-bold ml-1">$8898</h1>
        </div>
        <div className="flex relative ml-6 -mt-6">
          <div className="border-b-2 border-dashed absolute top-5 w-1/3"></div>
          <div className="absolute top-0 left-32">
            <img
              className="w-16 ml-4 "
              src={require("../../../Assets/aro.png")}
              alt=""
            />
          </div>
          <div className="border-b-2 absolute top-5 right-5 border-dashed w-1/4   "></div>
        </div>

        <div>
          <form action="">
            <div className="mt-8 ml-7">
              <h1 className="font-Yatra text-2xl font-semibold">1. Participants</h1>
            </div>
            <div className="flex justify-between ">
              <h1 className="font-Yatra ml-10 mt-7">Adult (18 - 99)</h1>
              <div className="mr-[50px] mt-6">
                <button className="mr-3">
                  <AiOutlineMinus />
                </button>
                <input type="text" className="w-4 h-6 " />
                <button className="ml-3 ">
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
            <div className="flex justify-between ">
              <h1 className="font-Yatra ml-10 mt-7">Child (5 - 17)</h1>
              <div className="mr-[50px] mt-6">
                <button className="mr-3">
                  <AiOutlineMinus />
                </button>
                <input type="text" className="w-4 h-6 " />
                <button className="ml-3 ">
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
            <div className="flex justify-between ">
              <h1 className="font-Yatra ml-10 mt-7">Infant (0 - 4)</h1>
              <div className="mr-[50px] mt-6">
                <button className="mr-3">
                  <AiOutlineMinus />
                </button>
                <input type="text" className="w-4 h-6 " />
                <button className="ml-3 ">
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div className="mt-6 ml-7">
            <h1 className="font-Yatra text-2xl font-semibold">2. Booking Summary</h1>
          </div>
          <div className=""></div>
        </div>
      </div>
        </>
      </div>,
    },
  ];

  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };

  return (
    <Tabs value={activeTab}>
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} onClick={() => handleTabClick(value)}>
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
  );
};

export default Example;
