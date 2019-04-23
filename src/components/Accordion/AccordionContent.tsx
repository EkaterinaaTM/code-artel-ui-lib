import * as React from "react";

/**
 * The content of the AccordionContent
 * @example ./AccordionContent.example.md
 */

export interface IAccordionContentProps {
  toggleAccordion(): void;
  isActive: boolean;
  children?: any;
}

export class AccordionContent extends React.Component<IAccordionContentProps> {
  static defaultProps = {};

  render() {
    const { children, isActive } = this.props;

    if (!children) {
      return null;
    }

    if (isActive) {
      return children;
    }
    return null;
  }
}

export default AccordionContent;
