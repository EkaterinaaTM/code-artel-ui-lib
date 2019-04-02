import * as React from "react";

import RadioCheckboxBase from "../RadioCheckboxBase/RadioCheckboxBase";

export interface IRadioCheckbox {
  checked?: boolean;
  label?: string;
  [propName: string]: any;
}

export class RadioCheckbox extends React.Component<IRadioCheckbox> {
  render() {
    const { label, onChange } = this.props;
    return (
      <>
        {label && <div>{label}</div>}
        <RadioCheckboxBase onChange={onChange} />
      </>
    );
  }
}

export default RadioCheckbox;
