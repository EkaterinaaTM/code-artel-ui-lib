import styled from "styled-components";
import {
  space,
  width,
  display,
  color,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight
} from "styled-system";

export const Link: any = styled.a`
  color: #333;
  cursor: pointer;
  text-decoration: none;
  ${space};
  ${width};
  ${display};
  ${color};
  ${fontSize};
  ${fontFamily};
  ${fontWeight};
  ${lineHeight};

`;

Link.defaultProps = {};

export default Link;
