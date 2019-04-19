import { IVariantSize, ITheme } from "../../interfaces";

const baseStyle = {
};

export const InputSize = (theme: ITheme): IVariantSize => {
  return {
    small: {
      ...baseStyle,
      fontSize: '14px',
      lineHeight: '22px',
      padding: '4px 8px',
      "::placeholder": {
        fontSize: '14px',
        lineHeight: '22px',
      }
    },
    medium: {
      ...baseStyle,
      fontSize: '16px',
      lineHeight: '24px',
      padding: '6px 12px',
      "::placeholder": {
        fontSize: '16px',
        lineHeight: '24px',
      }
    },
    large: {
      ...baseStyle,
      fontSize: '20px',
      lineHeight: '28px',
      padding: '8px 16px',
      "::placeholder": {
        fontSize: '20px',
        lineHeight: '28px',
      }
    }
  };
};

export default InputSize;
