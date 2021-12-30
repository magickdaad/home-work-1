import React from 'react';

const Tab = ({ title, description, activeTab, tabClick, id }) => {
  return (
    <div className={`tab ${activeTab === id ? 'active' : ''}`}>
      <input id={`tab-${id}`} type="checkbox" name="tabs" />
      <label onClick={tabClick} htmlFor={`tab-${id}`}>
        {title}
      </label>
      <div className="tab-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Tab;
