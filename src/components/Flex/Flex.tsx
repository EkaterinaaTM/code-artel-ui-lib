import {
  justifyContent,
  alignItems,
  alignContent,
  FlexBasisProps,
  FlexDirectionProps,
  FlexProps,
  FlexWrapProps,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  order
} from 'styled-system';
import styled from 'styled-components';

/**View */
import Box, {IBox} from '../Box/Box';

export interface IFlex extends IBox, FlexBasisProps, FlexDirectionProps, FlexProps, FlexWrapProps {
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
