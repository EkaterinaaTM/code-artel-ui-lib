<<<<<<< HEAD
import { IVariantList } from "../../interfaces";
import { ITheme } from "../../interfaces";
=======
import {IVariantList, ITheme} from "../../interfaces";
>>>>>>> f42254b108f4ce47f225dc3eff69927fad5dfc68

const baseStyle = {
  display: "inline-block",
  border: "none",
  background: "none",
  font: "inherit"
};

export const ButtonVariant = (theme: ITheme): IVariantList => {
  console.log(theme.border);

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
