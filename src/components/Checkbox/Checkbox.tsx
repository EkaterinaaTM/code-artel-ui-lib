import * as React from "react";
import { CheckboxBase } from "../CheckboxBase/CheckboxBase";

export interface ICheckbox {
  label?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  [propName: string]: any;
}

export const Checkbox = (props: ICheckbox) => {
  const { id, name, disabled, checked, label, onChange, ...rest } = props;

  return (
    <>
      {label && <p>{label}</p>}
      <CheckboxBase
        id={`checkbox-${id}`}
        disabled={disabled}
        checked={checked}
        name={name}
        type={"checkbox"}
        as={"input"}
        onChange={onChange}
        {...rest}
      />
    </>
  );
};

export default Checkbox;
