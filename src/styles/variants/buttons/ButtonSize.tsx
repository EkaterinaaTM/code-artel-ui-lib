import { IVariantSize } from "../../interfaces";

export const ButtonSize = (): IVariantSize => {
  return {
    small: {
      padding: "4px 8px",
      minWidth: "64px",
      fontSize: "0.8125rem",
      ".button_icon--right": {},
      ".button_icon--left": {}
    },
    medium: {
      padding: "5px 16px",
      minWidth: "64px",
      fontSize: "0.875rem",
      ".button_icon--right": {},
      ".button_icon--left": {}
    },
    large: {
      padding: "8px 24px",
      minWidth: "64px",
      fontSize: "0.9375rem",
      ".button_icon--right": {
        width: "20px",
        height: "20px",
        marginLeft: "10px"
      },
      ".button_icon--left": {
        width: "20px",
        height: "20px",
        marginRight: "10px"
      }
    }
  };
};

export default ButtonSize;
