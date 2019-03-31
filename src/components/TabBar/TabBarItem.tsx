import * as React from "react";

export interface ITabBarItem {
  children?: any;
  label?: string;
  activeTab?: any;
}

const TabBarItem = ({ children, label, activeTab, ...attrs }: ITabBarItem) => {
  return <div {...attrs}>{children}</div>;
};

// TabBarItem.defaultProps = {
//   children: null,
//   activeTab: ""
// };

export default TabBarItem;
