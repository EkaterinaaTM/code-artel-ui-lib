import * as React from 'react';
import styled from 'styled-components';

/** View */
import { Box } from '../Box/Box';

const Input = styled(Box)``;

export interface IRadioCheckbox {
  id?: string;
  checked?: boolean;
  name?: string;
}

export const RadioCheckboxBase = (props: IRadioCheckbox) => {
  const { id, checked, name } = props;
  return (
    <Input
      id={`radiocheckbox-${id}`}
      checked={checked}
      name={name}
      type={'radio'}
      as={'input'}
    />
  );
};

RadioCheckboxBase.defaultProps = {};

export default RadioCheckboxBase;
