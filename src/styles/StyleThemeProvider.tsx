import * as React from "react";
import { ThemeProvider } from "styled-components";

import { IColors, ITheme } from "./interfaces";

/** Variants */
import { ButtonSize } from "./variants/buttons/ButtonSize";
import { InputVariant } from "./variants/inputs/InputVariant";
import { ButtonVariant } from "./variants/buttons/ButtonVariant";
import { InputSize } from "./variants/inputs/InputSize";

export const Colors: IColors = {
  white: "#ffffff",
  blue: "#2196f3",
  red: "#e10050",
  orange: "#f44336",
  black: "#000",
  dark: "#1f1f1f",
  gray: "#6d6d6d",
  lightGray: "#939393"
};

export const Space: number[] = [
  0,
  2,
  4,
  8,
  16,
  24,
  32,
  40,
  48,
  56,
  64,
  72,
  80,
  88,
  96
];

export const BoxShadow: string[] = [
  "none",
  "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px",
  "rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px",
  "rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 3px 3px -2px"
];

export const Border: string[] = [
  "none",
  "1px solid rgba(0, 0, 0, 0.42)",
  "2px solid #1976d2"
];

const defaultThemeProps = {
  space: Space,
  boxShadow: BoxShadow,
  colors: Colors
  // border: Border
};

export const ThemeCreate = (props: ITheme = defaultThemeProps): ITheme => {
  const { space, boxShadow, colors } = props;

  const Theme: ITheme = {
    space: space || Space,
    fontSizes: space || Space,
    lineHeight: space || Space,
    // borderRadius: space || Space,
    boxShadow: boxShadow || BoxShadow,
    // border: border,
    // borderColor: colors,
    colors: colors,
    variant: {
      buttonVariant: {},
      buttonSize: {},
      inputVariant: {},
      inputSize: {}
    }
  };
  if (Theme.variant) {
    Theme.variant.buttonVariant = ButtonVariant(Theme);
    Theme.variant.buttonSize = ButtonSize();
    Theme.variant.inputVariant = InputVariant(Theme);
    Theme.variant.inputSize = InputSize(Theme);
  }

  return Theme;
};

export const StyledThemeProvider: any = ({ children, theme }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default StyledThemeProvider;
