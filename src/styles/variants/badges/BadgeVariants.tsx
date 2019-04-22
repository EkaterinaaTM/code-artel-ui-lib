import {IVariantList, ITheme} from "../../interfaces";

let baseStyle: any = {
  position: 'absolute',
  padding: '0 4px',
  cursor: 'pointer',
  outline: 'none',
  lineHeight: '20px',
  fontSize: '12px',
  fontWeight: 500,
  textAlign: 'center',
  color: 'white',
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
};

export const BadgeVariants = (theme: ITheme): IVariantList => {

  return {
    default: {
      ...baseStyle,
      color: theme.colors && theme.colors['white'],
      backgroundColor: theme.colors && theme.colors['blue'],
    },
    primary: {
      ...baseStyle,
      color: theme.colors && theme.colors['white'],
      backgroundColor: theme.colors && theme.colors['red'],
    },
    secondary: {
      ...baseStyle,
      color: theme.colors && theme.colors['white'],
      backgroundColor: theme.colors && theme.colors['gray'],
    },
    dot: {
      minWidth: '8px',
      height: '8px',
      minHeight: '8px',
      top: '-8px',
      right: '-8px',
      color: theme.colors && theme.colors['white'],
      backgroundColor: theme.colors && theme.colors['blue'],
    }
  };
};

export default BadgeVariants;
