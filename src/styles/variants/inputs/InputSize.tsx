import { IVariantSize, ITheme } from "../../interfaces";

const baseStyle = {
  padding: 0
};

export const InputSize = (theme: ITheme): IVariantSize => {
  return {
    xSmall: {
      ...baseStyle,
      fontSize: "12px",

      "::placeholder": {
        fontSize: "12px"
      }
    },
    small: {
      ...baseStyle,
      fontSize: "12px",
      "::placeholder": {
        fontSize: "12px"
      }
    },
    medium: {
      ...baseStyle,
      fontSize: theme.space ? theme.space[5] : "",
      "::placeholder": {
        fontSize: theme.space ? theme.space[5] : ""
      }
    },
    large: {
      ...baseStyle,
      fontSize: theme.space ? theme.space[6] : "",
      "::placeholder": {
        fontSize: theme.space ? theme.space[6] : ""
      }
    }
  };
};

export default InputSize;
