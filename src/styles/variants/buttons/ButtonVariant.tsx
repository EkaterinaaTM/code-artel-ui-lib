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
      ".active": {},
      ".button_icon": {}
    },
    primary: {
      ...baseStyle,
      ":hover": {},
      ":active": {},
      ":disabled": {},
      ":focus": {},
      ":visited": {},
      ".active": {},
      ".button_icon": {}
    },
    secondary: {
      ...baseStyle,
      ":hover": {},
      ":active": {},
      ":disabled": {},
      ":focus": {},
      ":visited": {},
      ".active": {},
      ".button_icon": {}
    },
    error: {
      ...baseStyle,
      ":hover": {},
      ":active": {},
      ":disabled": {},
      ":focus": {},
      ":visited": {},
      ".active": {},
      ".button_icon": {}
    }
  };
};

export default ButtonVariant;
