// import * as React from "react";
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

export interface IButtonBase {
  variant: string;
  size: string;
  children: string;
  [propName: string]: any;
}

export interface IButton {
  children?: string;
  [propName: string]: any;
}

/**
 * Компонента обычная кнопка
 * @example ./ButtonBase.example.md
 */
export const ButtonBase = styled(Box)<IButtonBase>`
  cursor: pointer;
  ${buttonsVariant};
  ${buttonsSize};
`;

ButtonBase.defaultProps = {
  variant: "default",
  size: "small",
  as: "button"
};

export default ButtonBase;
