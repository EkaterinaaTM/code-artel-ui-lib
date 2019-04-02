import * as React from "react";
import styled from "styled-components";

/** View */
import { Box } from "../Box/Box";

const Input = styled(Box)``;

// export interface ICheckboxs {
//   defaultProps?: any;
//   [propName: string]: any;
// }

export const CheckboxBase = (props: {
  [propName: string]: any;
  id?: string;
  name?: string;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
}) => {
  const { id, name, disabled, checked, defaultChecked, ...rest } = props;

  return (
    <Input
      id={`checkbox-${id}`}
      disabled={disabled}
      checked={checked}
      defaultChecked={defaultChecked}
      name={name}
      type={"checkbox"}
      as={"input"}
      {...rest}
    />
  );
};

// CheckboxBase.defaultProps = {
//   id: "checkbox",
//   disabled: false,
//   name: "checkbox"
// };

export default CheckboxBase;
