import * as React from "react";
import styled from "styled-components";

/** View */
import { Box } from "../Box/Box";

const Input = styled(Box)``;

export interface ICheckbox {
  value?: any;
  id?: string;
  name?: string;
  disabled?: boolean;
  checked?: boolean;
  [propName: string]: any;
}

export const CheckboxBase = (props: ICheckbox) => {
  const {
    id,
    name,
    disabled = false,
    checked,
    value,
    onChange,
    ...rest
  } = props;
  console.log('CheckboxBase: ', props);
  return (
    <Input
      id={`${id}`}
      disabled={disabled}
      checked={checked}
      name={name}
      type={"checkbox"}
      as={"input"}
      value={value}
      onChange={(event: any) => {
        onChange && onChange(event.target.value);
      }}
      {...rest}
    />
  );
};

export default CheckboxBase;
