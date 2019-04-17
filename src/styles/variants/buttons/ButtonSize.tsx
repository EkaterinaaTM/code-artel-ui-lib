import {IVariantSize} from "../../interfaces";

export const ButtonSize = (): IVariantSize => {

  return {
    small: {
      padding: '4px 8px',
      minWidth: '64px',
      fontSize: '0.8125rem',
      lineHeight: '1.75',
    },
    medium: {
      padding: '5px 16px',
      minWidth: '64px',
      fontSize: '0.875rem',
      lineHeight: '1.75',
    },
    large: {
      padding: '8px 24px',
      minWidth: '64px',
      fontSize: '0.9375rem',
      lineHeight: '1.75',
    },
  };
};

export default ButtonSize;
