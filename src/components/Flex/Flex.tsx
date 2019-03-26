import {
  justifyContent,
  alignItems,
  alignContent,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  order
} from 'styled-system';
import styled from 'styled-components';

/**View */
import Box from '../Box/Box';

export interface IFlex {
  [propName: string]: any;
}

export const Flex = styled(Box)<IFlex>`
  display: flex;
  ${justifyContent};
  ${alignItems};
  ${alignContent};
  ${flex};
  ${flexBasis};
  ${flexDirection};
  ${flexWrap};
  ${order};
`;

export default Flex;
