
import React, {  useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import DestinView from '../../Components/Payment/DestinView'
import PaymentPage from '../../Components/Payment/Payment'
interface TabData {
  label: string;
  value: string;
  component: React.ReactElement;
}

const Example: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("PackageDetails");

  const data: TabData[] = [
    {
      label: "PackageDetails",
      value: "PackageDetails",
      component:  (
        <>
          <div className="block md:hidden">
            <DestinView />
          </div>
        </>
      ),
    },
    {
      label: "Payment",
      value: "Payment",
      component: (
        <>
          <PaymentPage />
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
