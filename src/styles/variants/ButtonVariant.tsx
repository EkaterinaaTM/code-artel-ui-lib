// create constants
export enum ButtonEnum {
  default = 'default',
  primary = 'primary',
  secondary = 'secondary',
  error = 'error'
}

export interface IButton {
  default: any;
  primary?: any;
  secondary?: any;
  error?: any;
}

export const ButtonVariant = (theme: any): IButton => {
  return {
    default: {
      fontSize: '34px'
    },
    primary: {
      fontSize: '44px',
      color: '#333333',
      border: '1px solid #333333',
      backgroundColor: theme.colors.color0,
      borderRadius: '5px'
    },
    secondary: {},
    error: {}
  };
};

export default ButtonVariant;
