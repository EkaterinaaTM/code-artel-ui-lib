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
  toggleTab?: boolean;
  activeTab?: number;
  children?: any;
  TabsWrapper: any;
}

export class Tabs extends React.Component<ITabs> {
  static defaultProps = {
    TabsWrapper: TabsStyled
  };

  /**
   * @returns
   * @memberof Tabs
   */
  render() {
    const { children, activeTab, toggleTab, TabsWrapper } = this.props;
    if (!children) {
      return null;
    }
    const childrenWithProps = React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        onClick: event => {
          event.stopPropagation();
          toggleTab(index);
        },
        active: activeTab !== index,
        className: activeTab === index ? 'active': '',
      })
    );

    return <TabsWrapper>{childrenWithProps}</TabsWrapper>;
  }
}

export default Tabs;
