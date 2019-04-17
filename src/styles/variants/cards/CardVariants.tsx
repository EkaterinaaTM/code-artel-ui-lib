import {ITheme, IVariantList} from "../../interfaces";

const baseStyle: any = {
  position: 'relative',
  overflow: 'hidden',
  display: 'block',
};

export const CardVariants = (theme: ITheme): IVariantList => {

  return {
    default: {
      ...baseStyle,
      boxShadow: theme.boxShadow && theme.boxShadow[1],
      borderRadius: theme.space && theme.space[2],
    },
    primary: {
      ...baseStyle,
      boxShadow: theme.boxShadow && theme.boxShadow[2],
      borderRadius: theme.space && theme.space[2],
    },
    secondary: {
      ...baseStyle,
      boxShadow: theme.boxShadow && theme.boxShadow[3],
      borderRadius: theme.space && theme.space[2],
    },
  }
};

export default CardVariants;
