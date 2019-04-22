import * as React from "react";
import styled from "styled-components";

/** View */
import { Box } from "../Box/Box";

const Input = styled(Box)``;

export interface IRadioButton {
  id?: string,
  checked?: boolean,
  className?: string,
  name?: string,
  input?: any,
  onChange?: any,
  value: string,
  defaultChecked?: boolean,
  [propName: string]: any,
}

export const RadioButton = (props: IRadioButton) => {
  const {
    id,
    name,
    checked,
    value,
    onChange,
    ...rest
  } = props;

  return (
    <Input
      id={id}
      checked={checked}
      name={name}
      onChange={(event: any) => {
        onChange(event.target.value);
      }}
      value={value}
      type={"radio"}
      as={"input"}
      {...rest}
    />
  );
};

export default RadioButton;
