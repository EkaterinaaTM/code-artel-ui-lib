import styled from 'styled-components';
import { variant } from 'styled-system';

/** View */
import { Box } from '../Box/Box';

const inputVariant = variant({
  key: 'variant.inputVariant',
  prop: 'variant'
});

const inputSize = variant({
  key: "variant.inputSize",
  prop: "size"
});

export interface ITextArea {
  variant?: string;
  size?: string;
  [propName: string]: any;
}

export const TextArea = styled(Box)<ITextArea>`
  ${inputVariant};
  ${inputSize};
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

TextArea.defaultProps = {
  variant: 'primary',
  size: 'medium',
  as: 'textarea'
};

export default TextArea;
