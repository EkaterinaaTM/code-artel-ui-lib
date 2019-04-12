import * as React from "react";
import styled from "styled-components";

import {CheckboxBase} from "../CheckboxBase/CheckboxBase";
import {Box} from "../Box/Box";
import Label from "../Label/Label";


const Wrapper = styled(Box)`
  position: relative;
  
  input[type=checkbox] {
    position: absolute;
    opacity: 0; 
  }
  .CheckboxBase + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  // Box.
  .CheckboxBase + label:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background: #e2e2e2;
  }

  // Box hover
  .CheckboxBase:hover + label:before {
    background: #f35429;
  }
  
  // Box focus
  .CheckboxBase:focus + label:before {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
  }

  // Box checked
  .CheckboxBase:checked + label:before {
    background: #f35429;
  }
  
  // Disabled state label.
  .CheckboxBase:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  // Disabled box.
  .CheckboxBase:disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }

  // Checkmark. Could be replaced with an image
  .CheckboxBase:checked + label:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 9px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 
      2px 0 0 white,
      4px 0 0 white,
      4px -2px 0 white,
      4px -4px 0 white,
      4px -6px 0 white,
      4px -8px 0 white;
    transform: rotate(45deg);
  }
  
`;

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
  const {id, name, disabled, checked, label, onChange, ...rest} = props;
  const htmlID = `${name}-checkbox-${id}`;
  return (
    <Wrapper>
      <CheckboxBase
        className={'CheckboxBase'}
        id={htmlID}
        disabled={disabled}
        checked={checked}
        name={name}
        type={"checkbox"}
        as={"input"}
        onChange={onChange}
        {...rest}
      />
      {
        label && <Label htmlFor={htmlID}>{label}</Label>
      }
    </Wrapper>
  );
};

export default Checkbox;
