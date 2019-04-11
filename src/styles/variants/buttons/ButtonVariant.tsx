import { IVariantList, ITheme } from "../../interfaces";

const baseStyle = {
  display: "inline-block",
  border: "none",
  background: "none",
  font: "inherit"
};

export const ButtonVariant = (theme: ITheme): IVariantList => {
  return {
    default: {
      ...baseStyle,
      ":hover": {},
      ":active": {},
      ":disabled": {},
      ":focus": {},
      ":visited": {},
      ".active": {}
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
      ":hover": {},
      ":active": {},
      ":disabled": {},
      ":focus": {},
      ":visited": {},
      ".active": {}
    }
  };
};

export default ButtonVariant;
