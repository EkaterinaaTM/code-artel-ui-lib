import {ITheme} from "../../interfaces";

// ts-ignore
export const TooltipVariant = (theme: ITheme): any => {
  return {
    dark: {
      color: theme.colors && theme.colors.dark,
    },
    success: {},
    warning: { },
    error: { },
    info: {},
    light: { },
  }
};

export default TooltipVariant;
