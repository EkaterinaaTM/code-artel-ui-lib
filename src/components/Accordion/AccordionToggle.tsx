import * as React from "react";

export interface IAccordionToggle {
  toggleAccordion(): void;
  isActive: boolean;
  children?: any;
}

export class AccordionToggle extends React.Component<IAccordionToggle> {
  static defaultProps: IAccordionToggle = {
    isActive: false,
    toggleAccordion: () => {}
  };

  /**
   * @returns
   * @memberof Accordion
   */
  render() {
    const { children, isActive, toggleAccordion } = this.props;

    if (!children) {
      return null;
    }
    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        key: index,
        onClick: event => {
          event.stopPropagation();
          toggleAccordion();
        },
        active: !isActive,
        className: "active"
      });
    });
  }
}

export default AccordionToggle;
