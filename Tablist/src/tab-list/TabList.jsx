import React, { useState } from "react";
import Button from "./Button";

function TabList({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (index) => {
    console.log("Tab clicked:", index);
    setActiveTab(index);
  };
  //const Component = tabs.find((tab)=> tab.id === activeTab)
  //console.log("Component:", Component);
  return (
    <div>
      <div>
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => {
              handleTabClick(tab.id);
            }}
            label={tab.label}
            isActive={activeTab === tab.id}
          ></Button>
        ))}
      </div>
      {(() => {
        switch (activeTab) {
          case 1:
            return <div>{tabs[0].tabComponents}</div>;
          case 2:
            return <div>{tabs[1].tabComponents}</div>;

          case 3:
            return <div>{tabs[2].tabComponents}</div>;

          case 4:
            return <div>{tabs[3].tabComponents}</div>;
          default:
            return <div>{tabs[0].tabComponents}</div>;
        }
      })()}
    </div>
  );
}

export default TabList;
