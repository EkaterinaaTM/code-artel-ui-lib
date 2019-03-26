import * as React from "react";

export type Props = { placeholder?: string };

export class Input extends React.Component<Props> {
  render() {
    const { placeholder } = this.props;

    return <input placeholder={placeholder} />;
  }
}

export default Input;
