import * as React from "react";
import Card from "./Card";

export interface IAccordion {
  panels: any;
}

export class Accordion extends React.Component<IAccordion> {
  render() {
    const { panels } = this.props;
    return (
      <div>
        {Array.isArray(panels) &&
          panels.map(
            ({ title, subtitle }, index: any): any => (
              <Card
                key={`title:${title}`}
                title={title}
                subtitle={subtitle}
                index={index}
              />
            )
          )}
      </div>
    );
  }
}

export default Accordion;
