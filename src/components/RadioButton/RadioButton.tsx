import * as React from "react";
import RadioButtonBase from "../RadioButtonBase/RadioButtonBase";

export interface IRadioButton {
  checked?: boolean;
  label?: string;
  name: string;
  onChange: any;
  id?: string;
  // disabled?: boolean;
  value: any;
  [propName: string]: any;
}

export const RadioButton = (props: IRadioButton) => {
  const {
    label,
    onChange,
    checked,
    name,
    id,
    // disabled,
    value,
    ...rest
  } = props;
  // console.log("RadioButton", props);

  return (
    <>
      {label && <p>{label}</p>}
      <RadioButtonBase
        id={id}
        // disabled={disabled}
        checked={checked}
        name={name}
        onChange={onChange}
        value={value}
        {...rest}
      />
    </>
  );
};

export default RadioButton;
