import styled from "styled-components";
import { variant } from "styled-system";
import Box from "../Box/Box";

const buttonsVariant = variant({
  key: "variant.buttonVariant",
  prop: "variant"
});

const buttonsSize = variant({
  key: "variant.buttonSize",
  prop: "size"
});

export interface IButton {
  variant: string;
  size: string;
  [propName: string]: any;
}

/**
 * Компонента обычная кнопка
 * @example ./Button.example.md
 */
export const Button = styled(Box)<IButton>`
  cursor: pointer;
  position: relative;
  ${buttonsVariant};
  ${buttonsSize};
`;

Button.defaultProps = {
  variant: "default",
  size: "small",
  as: "button"
};

export default Button;
