import * as React from "react";
import styled from "styled-components";

/** View */
import { Box } from "../Box/Box";

const Input = styled(Box)``;

export interface IRadioButtonBase {
  id?: string;
  checked?: boolean;
  name?: string;
  input?: any;
  onChange?: any;
  value: string;
  defaultChecked?: boolean;
}

export const RadioButtonBase = (props: IRadioButtonBase) => {
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

export default RadioButtonBase;
