import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useTabs = () => {
  const [tabs, setTabs] = useState(
    JSON.parse(localStorage.getItem("tabs")) || [
      { name: "Tab 1", searchText: "" },
    ]
  );
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    localStorage.setItem("tabs", JSON.stringify(tabs));
  }, [tabs]);

  const addTab = () => {
    const newTabName = `Tab ${tabs.length + 1}`;
    setTabs([...tabs, { name: newTabName, searchText: "" }]);
    setActiveTab(tabs.length);
    toast.success(`"${newTabName}" added successfully!`);
  };

  const deleteTab = (index) => {
    if (index === 0) return;
    const deletedTabName = tabs[index].name;
    const newTabs = tabs.filter((_, tabIndex) => tabIndex !== index);
    setTabs(newTabs);
    if (activeTab >= index && activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
    toast.error(`"${deletedTabName}" deleted successfully!`);
  };

  const updateTab = (index, newSearchText) => {
    const updatedTabs = tabs.map((tab, tabIndex) =>
      tabIndex === index
        ? { ...tab, name: newSearchText || tab.name, searchText: newSearchText }
        : tab
    );
    setTabs(updatedTabs);
  };

  return { tabs, activeTab, setActiveTab, addTab, deleteTab, updateTab };
};

export default useTabs;
