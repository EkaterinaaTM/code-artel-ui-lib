import * as React from "react";

/** View  */
import RadioCheckbox from "../RadioCheckbox/RadioCheckbox";
import Flex from "../Flex/Flex";

export interface IRadioCheckboxGroup {
  checked?: boolean;
  label?: string;
  onChange?: any;
  [propName: string]: any;
}

export class RadioCheckboxGroup extends React.Component<IRadioCheckboxGroup> {
  render() {
    const { checked, onChange, label } = this.props;

    return (
      <>
        <Flex flexDirection={"column"}>
          <RadioCheckbox
            checked={checked}
            name={`RadioCheckbox`}
            onChange={onChange}
            label={label}
          />
        </Flex>
      </>
    );
  }
}

export default RadioCheckboxGroup;
