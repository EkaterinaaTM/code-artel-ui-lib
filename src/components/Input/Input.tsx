import styled from 'styled-components';
import { variant } from 'styled-system';

import { Box } from '../Box/Box';

const inputVariant = variant({
  key: 'variant.inputVariant',
  prop: 'variant'
});

export interface IInput {
  variant?: string;
}

export const Input = styled(Box)<IInput>`
  ${inputVariant};
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

Input.defaultProps = {
  variant: 'default',
  as: 'input'
};

export default Input;
