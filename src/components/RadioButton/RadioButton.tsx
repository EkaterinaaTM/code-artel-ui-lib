import * as React from "react";
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

const Radio = styled(Box)<IRadioButton>``;

const Wrapper = styled(Box)`
  position: relative;

  input[type="radio"] {
    position: absolute;
    opacity: 0;
  }
  .RadioButton + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  // Box.
  .RadioButton + label:before {
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
  .RadioButton:hover + label:before {
    background-color: #f35429;
  }

  // Box focus
  .RadioButton:focus + label:before {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
  }

  // Box checked
  .RadioButton:checked + label:before {
    background-color: #f35429;
  }

  // Disabled state label.
  .RadioButton:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  // Disabled box.
  .RadioButton:disabled + label:before {
    box-shadow: none;
    background-color: #ddd;
  }

  // Checkmark. Could be replaced with an image
  .RadioButton:checked + label:after {
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
      <Radio
        className={"RadioButton"}
        id={htmlID}
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
      {label && <Label htmlFor={htmlID}>{label}</Label>}
    </Wrapper>
  );
};

export default RadioButton;
