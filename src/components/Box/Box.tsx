import styled from 'styled-components';
import {
  space,
  width,
  color,
  fontSize,
  border,
  borderRadius,
  borderColor,
  borders,
  overflow,
  display,
  maxWidth,
  minWidth,
  height,
  textAlign,
  lineHeight,
  minHeight,
  opacity,
  letterSpacing,
  SpaceProps,
  DisplayProps,
  MaxWidthProps,
  MinWidthProps,
  HeightProps,
  MinHeightProps,
  OverflowProps,
  OpacityProps,
  zIndex,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat
} from "styled-system";

interface IBox
  extends SpaceProps,
    DisplayProps,

    MaxWidthProps,
    MinWidthProps,
    HeightProps,
    MinHeightProps,
    OverflowProps,
    OpacityProps {
  [propName: string]: any;
}

export const Box = styled.div<IBox>`
  box-sizing: border-box;
  ${display};
  ${space};
  ${width};
  ${overflow};
  ${borderRadius};
  ${borderColor};
  ${borders};
  ${border};
  ${fontSize};
  ${color};
  ${maxWidth};
  ${minWidth};
  ${height};
  ${minHeight};
  ${opacity};
  ${textAlign};
  ${lineHeight};
  ${letterSpacing};
  ${zIndex};
  ${backgroundImage};
  ${backgroundSize};
  ${backgroundPosition};
  ${backgroundRepeat}
`;

export default Box;
