import React from "react";
import Tabs from "./Tabs";

function RandomContent() {
  return <h1 className="text-2xl">Some random content</h1>;
}

const TabTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: "This is tab 1",
    },
    {
      label: "Tab 2",
      content: "This is tab 2",
    },
    {
      label: "Tab 3",
      content: <RandomContent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return (
    <div className="w-full max-w-2xl mx-auto my-10 ">
      <Tabs tabContent={tabs} onChange={handleChange} />
    </div>
  );
};

export default TabTest;
