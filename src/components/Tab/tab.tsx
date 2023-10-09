interface Item{
    label: string;
    selectedTab: string;
    handleTabClick: (label:string) => void;
}

const Tab = ({ label, selectedTab, handleTabClick }: Item) => {
  return (
    <li
      className={`details-item ${selectedTab === label ? 'active' : ''}`}
      onClick={() => handleTabClick(label)}
    >
      {label}
    </li>
  );
};

export default Tab;
