import * as React from "react";
import styled from "styled-components";

import { Box } from "../Box/Box";
import { variant } from "styled-system";

interface IText {
  variant: string;
  [propName: string]: any;
}

const TextVariants = variant({
  key: "variant.textVariants",
  prop: "variant"
});

export const Text = styled(Box)<IText>`
  ${TextVariants};
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
  color: "#333333",
  variant: "body1"
};

export default Text;
