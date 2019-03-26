import * as React from "react";

export type Props = { name?: string };

export class Button extends React.Component<Props> {
  render() {
    const { name } = this.props;

    return <button>{name}</button>;
  }
}

export default Button;
