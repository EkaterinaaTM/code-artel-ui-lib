import styled from "styled-components";
import { width, height, borderRadius, border, display } from "styled-system";

export const Image: any = styled.img`
  ${width};
  ${height};
  ${borderRadius};
  ${display};
  ${border};
`;

Image.defaultProps = {
  display: "block"
};

export default Image;
