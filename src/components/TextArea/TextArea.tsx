import styled from 'styled-components';
import { variant } from 'styled-system';

/** View */
import { Box } from '../Box/Box';

const inputVariant = variant({
  key: 'variant.inputVariant',
  prop: 'variant'
});

export interface ITextArea {
  variant?: string;
  [propName: string]: any;
}

export const TextArea = styled(Box)<ITextArea>`
  ${inputVariant};
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

TextArea.defaultProps = {
  variant: 'default',
  as: 'textarea'
};

export default TextArea;
