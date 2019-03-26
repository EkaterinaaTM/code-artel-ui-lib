import * as React from "react";
import styled from "styled-components";

/** View */
import { Box } from "../Box/Box";

const Input = styled(Box)``;

export interface ICheckbox {
  id?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  defaultChecked?: boolean;
}

export const CheckboxBase = (props: ICheckbox) => {
  const { id, name, disabled, checked, defaultChecked } = props;

  return (
    <Input
      id={`checkbox-${id}`}
      disabled={disabled}
      checked={checked}
      defaultChecked={defaultChecked}
      name={name}
      type={"checkbox"}
      as={"input"}
    />
  );
};

// CheckboxBase.defaultProps = {
//   id: 'checkbox',
//   disabled: false,
//   name: 'checkbox'
// };

export default CheckboxBase;
