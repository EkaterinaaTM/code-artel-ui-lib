import * as React from "react";

/**
 * The content of the AccordionContent
 * @example ./AccordionContent.example.md
 */

export interface IAccordionContent {
  toggleTab?: any;
  activeTab?: any;
  children?: any;
  ClickContentCloseTab?: any;
}

export class AccordionContent extends React.Component<IAccordionContent> {
  static defaultProps = {};
  /**
   * @returns
   * @memberof Tabs
   */
  render() {
    const { children, activeTab } = this.props;

    if (!children) {
      return null;
    }

    if (activeTab) {
      return <div>{children}</div>;
    }
    return null;
  }
}

export default AccordionContent;
