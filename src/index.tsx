import * as React from "react";
import Button from "./Button";
import Input from "./Input";

export type Props = { name: string; placeholder: string };

export class ExampleComponent extends React.Component<Props> {
  render() {
    const { name, placeholder } = this.props;

    return (
      <div>
        <Button name={name} />
        <Input placeholder={placeholder} />
      </div>
    );
  }
}

export default ExampleComponent;
