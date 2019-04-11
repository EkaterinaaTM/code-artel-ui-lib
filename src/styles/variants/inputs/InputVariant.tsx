<<<<<<< HEAD
import { ITheme } from "../../interfaces";
import { IVariantList } from "../../interfaces";
=======
import {IVariantList, ITheme} from "../../interfaces";

>>>>>>> f42254b108f4ce47f225dc3eff69927fad5dfc68

const baseStyle = {
  font: "inherit",
  display: "block",
  boxSizing: "content-box",
  background: "none",
  border: "none",
  "-webkit-tap-highlight-color": "transparent",
  cursor: "text"
};

export const InputVariant = (theme: ITheme): IVariantList => {
  return {
    default: {
      ...baseStyle,
      color: theme.colors.dark,
      borderBottomStyle: "solid",
      borderBottomWidth: "2px",
      borderColor: theme.colors.dark,
      outline: "none",

      ":hover": {
        borderColor: theme.colors.blue
      },
      ":active": {
        borderColor: theme.colors.blue
      },
      ".active": {
        borderColor: theme.colors.blue
      },
      ":focus": {
        outline: "none",
        borderColor: theme.colors.blue
      },
<<<<<<< HEAD

      ":disabled": {
        cursor: "default",
        outline: "none",
        borderColor: theme.colors.gray
=======
      ':disabled': {
        cursor: 'default',
        outline: 'none',
        borderColor: theme.colors.gray,
      },
      ':visited': {},
      '::placeholder': {
        color: theme.colors.gray,
>>>>>>> f42254b108f4ce47f225dc3eff69927fad5dfc68
      },
      ":visited": {},
      "::placeholder": {
        color: theme.colors.gray
      }
    },
    primary: {
      ...baseStyle,
      ":hover": {},
      ":active": {},
      ":disabled": {},
      ":focus": {},
      ":visited": {},
      ".active": {}
    },
    secondary: {
      ...baseStyle,
      ":hover": {},
      ":active": {},
      ":disabled": {},
      ":focus": {},
      ":visited": {},
      ".active": {}
    },
    error: {
      ...baseStyle,
      color: theme.colors.red,
      borderBottomStyle: "solid",
      borderBottomWidth: "2px",
      borderColor: theme.colors.red,
      outline: "none",

      ":hover": {
        borderColor: theme.colors.red
      },
      ":active": {
        borderColor: theme.colors.red
      },
      ".active": {
        borderColor: theme.colors.red
      },
      ":focus": {
        outline: "none",
        borderColor: theme.colors.red
      },
      ":disabled": {
        cursor: "default",
        outline: "none",
        borderColor: theme.colors.gray
      },
      ":visited": {},
      "::placeholder": {
        color: theme.colors.gray
      }
    }
  };
};
