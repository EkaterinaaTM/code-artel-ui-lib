import styled from "styled-components";
import {
  space,
  width,
  color,
  fontSize,
  border,
  borderRadius,
  borderColor,
  overflow,
  display,
  maxWidth,
  minWidth,
  height,
  position,
  textAlign,
  lineHeight,
  minHeight,
  opacity,
  letterSpacing,
  SpaceProps,
  boxShadow,
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

export interface IBox
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
  ${border};
  ${fontSize};
  ${color};
  ${position};
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
  ${backgroundRepeat};
  ${boxShadow}
`;

export default Box;
