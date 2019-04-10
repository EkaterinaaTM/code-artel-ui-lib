import styled from "styled-components";
import { variant } from "styled-system";

import { Box } from "../Box/Box";

const inputVariant = variant({
  key: "variant.inputVariant",
  prop: "variant"
});
const inputSize = variant({
  key: "variant.inputSize",
  prop: "size"
});

export interface IInput {
  variant?: string;
  [propName: string]: any,
}

export const Input = styled(Box)<IInput>`
  ${inputVariant};
  ${inputSize};
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

Input.defaultProps = {
  variant: "default",
  size: "medium",
  as: "input"
};

export default Input;
