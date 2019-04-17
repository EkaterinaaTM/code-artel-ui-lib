import styled from "styled-components";
import { Box } from "../Box/Box";
import {variant} from "styled-system";

interface IText {
  variant: string,
  [propName: string]: any,
}


const TextVariants = variant({
  key: "variant.textVariants",
  prop: "variant"
});


export const Text = styled(Box)<IText>`
  ${TextVariants};
`;

Text.defaultProps = {
  color: "#333333",
  variant: 'body1'
};

export default Text;
