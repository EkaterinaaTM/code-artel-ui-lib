import * as React from "react";
import {ThemeProvider} from "styled-components";

import {IColors, ITheme} from "./interfaces";

/** Variants */
import {ButtonSize} from "./variants/buttons/ButtonSize";
import {InputVariant} from "./variants/inputs/InputVariant";
import {ButtonVariant} from "./variants/buttons/ButtonVariant";
import {InputSize} from "./variants/inputs/InputSize";
import {CardVariants} from "./variants/cards/CardVariants";
import {TextVariants} from "./variants/text/TextVariants";
import {BadgePosition} from "./variants/badges/BadgePosition";
import {BadgeVariants} from "./variants/badges/BadgeVariants";
import {TooltipVariant} from "./variants/Tooltip/TooltipVariant";

export const Colors: IColors = {
  white: "#ffffff",
  blue: "#2196f3",
  red: "#e10050",
  orange: "#ff9800",
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
  12,
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
  "rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 3px 3px -2px",
  "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
  "0 0 0 2px rgba(0, 132, 255, .5)"
];

export const Border: string[] = [
  "none",
  "1px solid rgba(0, 0, 0, 0.42)",
  "2px solid #1976d2"
];

const defaultThemeProps = {
  space: Space,
  boxShadow: BoxShadow,
  colors: Colors,
  border: Border
};

const transition: string[] = [
  "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
];

export const ThemeCreate = (props: ITheme = defaultThemeProps): ITheme => {
  const {space, boxShadow, colors} = props;

  const Theme: ITheme = {
    space: space || Space,
    fontSizes: space || Space,
    lineHeight: space || Space,
    transition: transition,
    boxShadow: boxShadow || BoxShadow,
    colors: colors,
    variant: {
      buttonVariant: {},
      buttonSize: {},
      inputVariant: {},
      inputSize: {},
      cardVariants: {},
      imageVariant: {},
      badgePosition: {},
      badgeVariants: {},
      textVariants: {},
      tooltipVariant: {},
    }
  };
  if (Theme.variant) {
    Theme.variant.buttonVariant = ButtonVariant(Theme);
    Theme.variant.buttonSize = ButtonSize();
    Theme.variant.inputVariant = InputVariant(Theme);
    Theme.variant.inputSize = InputSize();
    Theme.variant.cardVariants = CardVariants(Theme);
    Theme.variant.textVariants = TextVariants(Theme);

    Theme.variant.badgePosition = BadgePosition();
    Theme.variant.badgeVariants = BadgeVariants(Theme);

    Theme.variant.tooltipVariant = TooltipVariant(Theme);
  }

  return Theme;
};

export const StyledThemeProvider: any = ({children, theme}: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default StyledThemeProvider;
