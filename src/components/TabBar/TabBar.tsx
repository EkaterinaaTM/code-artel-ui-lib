import * as React from "react";

import TabBarNav from "./TabBarNav";

export interface IgetChildrenLabels {
  map(arg0: ({ props }: { props: any }) => any): any;
  children?: any;
}

export interface IsetActiveTab {
  activeTab?: any;
}

export interface IMap {
  child?: React.ReactNode;
}

class TabBar extends React.Component {
  state = {
    activeTab: null
  };

  componentDidMount() {
    const { children }: any = this.props;

    const activeTab = this.getChildrenLabels(children)[0];

    this.setActiveTab(activeTab);
  }

  getChildrenLabels = (children: IgetChildrenLabels) =>
    children.map(({ props }) => props.label);

  setActiveTab = (activeTab: IsetActiveTab) => {
    const { activeTab: currentTab } = this.state;

    if (currentTab !== activeTab) {
      this.setState({
        activeTab
      });
    }
  };

  renderTabs = () => {
    const { children }: any = this.props;

    return this.getChildrenLabels(children).map((navLabel: any) => (
      <TabBarNav
        key={navLabel}
        navLabel={navLabel}
        onChangeActiveTab={this.setActiveTab}
      />
    ));
  };

  render() {
    const { activeTab } = this.state;
    const { children, ...attrs } = this.props;

    return (
      <div {...attrs}>
        <div>{this.renderTabs()}</div>
        <div>
          {React.Children.map(children, (child: any) =>
            React.cloneElement(child, { activeTab })
          )}
        </div>
      </div>
    );
  }
}

export default TabBar;
