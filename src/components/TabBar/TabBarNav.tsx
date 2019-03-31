import * as React from "react";

export interface ITabBarNav {
  navLabel?: string;
  onChangeActiveTab?: any;
}

const TabBarNav = ({ navLabel, onChangeActiveTab }: ITabBarNav) => {
  return (
    <button
      type="button"
      onClick={() => {
        onChangeActiveTab(navLabel);
      }}
    >
      {navLabel}
    </button>
  );
};

// TabBarNav.defaultProps = {
//   navLabel: "Tab",
//   onChangeActiveTab: () => {}
// };

export default TabBarNav;
