import * as React from "react";

/**
 * The content of the TabContent
 * @example ./TabContent.example.md
 */

export interface ITabContent {
  toggleTab?: any;
  activeTab?: any;
  children?: any;
  ClickContentCloseTab?: any;
}
export class TabContent extends React.Component<ITabContent> {
  static defaultProps = {};

  /**
   * @returns
   * @memberof Tabs
   */
  render() {
    const { children, activeTab, toggleTab, ClickContentCloseTab } = this.props;
    if (!children) {
      return null;
    }
    if (activeTab >= 0 && activeTab !== null) {
      if (Array.isArray(children)) {
        return (
          <div
            onClick={() => {
              if (ClickContentCloseTab) {
                toggleTab(activeTab);
              }
            }}
          >
            {children[activeTab]}
          </div>
        );
      }
      return (
        <div
          onClick={() => {
            if (ClickContentCloseTab) {
              toggleTab(activeTab);
            }
          }}
        >
          {children}
        </div>
      );
    }
    return null;
  }
}

export default TabContent;
