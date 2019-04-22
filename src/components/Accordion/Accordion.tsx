import * as React from "react";
import styled from "styled-components";

const AccordionStyled = styled.div`
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

export interface IAccordion {
  toggleTab(index: number): boolean;
  activeTab?: number;
  children?: any;
  AccordionWrapper: any;
}

export class Accordion extends React.Component<IAccordion> {
  static defaultProps: IAccordion = {
    AccordionWrapper: AccordionStyled,
    toggleTab: (index: number) => index > -1
  };
  /**
   * @returns
   * @memberof Accordion
   */
  render() {
    const { children, activeTab, toggleTab, AccordionWrapper } = this.props;

    if (!children) {
      return null;
    }

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        onClick: event => {
          event.stopPropagation();
          toggleTab();
        },
        active: !activeTab,
        className: "active"
      })
    );

    return <AccordionWrapper>{childrenWithProps}</AccordionWrapper>;
  }
}

export default Accordion;
