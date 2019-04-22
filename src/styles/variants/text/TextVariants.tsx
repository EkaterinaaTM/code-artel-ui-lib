import {ITheme} from "../../interfaces";

let baseStyle = {};

export const TextVariants = (theme: ITheme):any => {
  baseStyle = {
    ...baseStyle,
    color: theme.colors && theme.colors.dark,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    display: 'block'
  };
  return {
    h1: {
      ...baseStyle,
      fontSize: '64px',
      lineHeight: '72px',
      fontWeight: 300,
    },
    h2: {
      ...baseStyle,
      fontSize: '56px',
      lineHeight: '64px',
      fontWeight: 300,
    },
    h3: {
      ...baseStyle,
      fontSize: '48px',
      lineHeight: '56px',
      fontWeight: 400,
    },
    h4: {
      ...baseStyle,
      fontSize: '40px',
      lineHeight: '48px',
      fontWeight: 400,
    },
    h5: {
      ...baseStyle,
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: 400,
    },
    h6: {
      ...baseStyle,
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 400,
    },
    body1: {
      ...baseStyle,
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 500,
    },
    body2: {
      ...baseStyle,
      fontSize: '14px',
      lineHeight: '22px',
      fontWeight: 500,
    },
    error: {
      ...baseStyle,
      fontSize: '16px',
      lineHeight: '24px',
      color: theme.colors && theme.colors.red,
    },
    warning: {
      ...baseStyle,
      fontSize: '16px',
      lineHeight: '24px',
      color: theme.colors && theme.colors.orange,
    },
  }
};

export default TextVariants;
