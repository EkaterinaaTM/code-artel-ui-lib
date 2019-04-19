import * as React from "react";
import styled from "styled-components";

import { Box } from "../Box/Box";
import { variant } from "styled-system";

const textsVariant = variant({
  key: "variant.textVariant",
  prop: "variant"
});

/**
 * Компонент текста
 * @example ./Text.example.md
 */
export const Text = styled(Box)`
  cursor: pointer;
  ${textsVariant};
`;

// export interface IText {
//   children?: any;
//   [propName: string]: any;
// }

// export const Text = (props: IText) => {
//   const { children } = props;
//   return <TextStyled>{children}</TextStyled>;
// };

Text.defaultProps = {
  color: "#333333"
};

export default Text;
