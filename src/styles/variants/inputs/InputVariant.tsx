import {IVariantList, ITheme} from "../../interfaces";

let baseStyle: any = {
  font: "inherit",
  display: "block",
  boxSizing: "content-box",
  background: "none",
  border: "none",
  "-webkit-tap-highlight-color": "transparent",
  cursor: "text"
};

export const InputVariant = (theme: ITheme): IVariantList => {

  baseStyle = {
    ...baseStyle,
    borderRadius: '4px',
    borderStyle: "solid",
    borderWidth: "1px",
    outline: "none",
    fontWeight: 400,
    transition: theme.transition && theme.transition[0],

  };

  return {
    primary: {
      ...baseStyle,
      color: theme.colors && theme.colors.dark,
      borderColor: theme.colors && theme.colors.gray,

      ":hover": {
        borderColor: theme.colors && theme.colors.blue
      },
      ":active": {
        borderColor: theme.colors && theme.colors.blue
      },
      "&.active": {
        borderColor: theme.colors && theme.colors.blue
      },
      ":focus": {
        outline: "none",
        borderColor: theme.colors && theme.colors.blue
      },
      ":disabled": {
        cursor: "default",
        outline: "none",
        borderColor: theme.colors && theme.colors.gray
      },
      ":visited": {},
      "::placeholder": {
        color: theme.colors && theme.colors.gray
      }
    },
    secondary: {
      ...baseStyle,
      color: theme.colors && theme.colors.dark,
      borderColor: theme.colors && theme.colors.blue,

      ":hover": {
        borderColor: theme.colors && theme.colors.blue
      },
      ":active": {
        borderColor: theme.colors && theme.colors.blue
      },
      "&.active": {
        borderColor: theme.colors && theme.colors.blue
      },
      ":focus": {
        outline: "none",
        borderColor: theme.colors && theme.colors.blue
      },
      ":disabled": {
        cursor: "default",
        outline: "none",
        borderColor: theme.colors && theme.colors.gray
      },
      ":visited": {},
      "::placeholder": {
        color: theme.colors && theme.colors.gray
      }
    },
    warning: {
      ...baseStyle,
      color: theme.colors && theme.colors.orange,
      borderColor: theme.colors && theme.colors.orange,

      ":hover": {
        borderColor: theme.colors && theme.colors.orange
      },
      ":active": {
        borderColor: theme.colors && theme.colors.orange
      },
      "&.active": {
        borderColor: theme.colors && theme.colors.orange
      },
      ":focus": {
        outline: "none",
        borderColor: theme.colors && theme.colors.orange
      },
      ":disabled": {
        cursor: "default",
        outline: "none",
        borderColor: theme.colors && theme.colors.gray
      },
      ":visited": {},
      "::placeholder": {
        color: theme.colors && theme.colors.gray
      }
    },
    error: {
      ...baseStyle,
      color: theme.colors && theme.colors.red,
      borderColor: theme.colors && theme.colors.red,

      ":hover": {
        borderColor: theme.colors && theme.colors.red
      },
      ":active": {
        borderColor: theme.colors && theme.colors.red
      },
      "&.active": {
        borderColor: theme.colors && theme.colors.red
      },
      ":focus": {
        outline: "none",
        borderColor: theme.colors && theme.colors.red
      },
      ":disabled": {
        cursor: "default",
        outline: "none",
        borderColor: theme.colors && theme.colors.gray
      },
      ":visited": {},
      "::placeholder": {
        color: theme.colors && theme.colors.gray
      }
    }
  };
};
