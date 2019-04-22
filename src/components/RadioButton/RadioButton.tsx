import * as React from "react";
import RadioButtonBase from "../RadioButtonBase/RadioButtonBase";
import Label from "../Label/Label";
import styled from "styled-components";
import { Box } from "../Box/Box";

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

const Wrapper = styled(Box)`
  position: relative;

  input[type="radio"] {
    position: absolute;
    opacity: 0;
  }
  .RadioButtonBase + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  // Box.
  .RadioButtonBase + label:before {
    content: "";
    margin-right: 10px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background-color: #e2e2e2;
  }

  // Box hover
  .RadioButtonBase:hover + label:before {
    background-color: #f35429;
  }

  // Box focus
  .RadioButtonBase:focus + label:before {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
  }

  // Box checked
  .RadioButtonBase:checked + label:before {
    background-color: #f35429;
  }

  // Disabled state label.
  .RadioButtonBase:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  // Disabled box.
  .RadioButtonBase:disabled + label:before {
    box-shadow: none;
    background-color: #ddd;
  }

  // Checkmark. Could be replaced with an image
  .RadioButtonBase:checked + label:after {
    content: "";
    position: absolute;
    left: 6px;
    top: 6px;
    background-color: white;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
`;

export const RadioButton = (props: IRadioButton) => {
  const { label, onChange, checked, name, id, value, ...rest } = props;
  const htmlID = `${name}-radio-${id}`;

  return (
    <Wrapper>
      <RadioButtonBase
        className={"RadioButtonBase"}
        id={htmlID}
        checked={checked}
        name={name}
        onChange={onChange}
        value={value}
        {...rest}
      />
      {label && <Label htmlFor={htmlID}>{label}</Label>}
    </Wrapper>
  );
};

export default RadioButton;
