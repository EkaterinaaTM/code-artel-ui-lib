import * as React from "react";
import styled from "styled-components";

const TabsStyled = styled.div`
  border: 0;
  width: 100%;
  display: flex;

  flex-wrap: wrap;

  @media (min-width: 576px) {
    flex-wrap: nowrap;
  }
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
  @media (min-width: 992px) {
    flex-wrap: nowrap;
  }
  @media (min-width: 1200px) {
    flex-wrap: nowrap;
  }
`;

export interface ITabs {
  toggleTab?: any;
  activeTab?: any;
  children?: any;
}

export class Tabs extends React.Component<ITabs> {
  static defaultProps = {};

  /**
   * @returns
   * @memberof Tabs
   */
  render() {
    const { children, activeTab, toggleTab } = this.props;
    if (!children) {
      return null;
    }
    const childrenWithProps = React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        onClick: event => {
          event.stopPropagation();
          toggleTab(index);
        },
        active: activeTab !== index
      })
    );

    return <TabsStyled>{childrenWithProps}</TabsStyled>;
  }
}

export default Tabs;
