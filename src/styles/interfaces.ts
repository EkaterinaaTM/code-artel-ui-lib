

export interface IVariantSize {
  xSmall?: any,
  small: any,
  medium: any,
  large: any,
  [propName: string]: any,
}

export interface IVariantItem {
  ':hover': any,
  ':active': any,
  ':disabled': any,
  ':focus': any,
  ':visited': any,
  '.active': any,
  [propName: string]: any,
}

export interface IVariantList {
  [propName: string]: IVariantItem,
}

export interface IVariant {
  buttonVariant: IVariantList,
  buttonSize: IVariantSize,
  inputVariant: IVariantList,
  inputSize: IVariantSize,

  [propName: string]: any,
}

export interface IColors {
  white: string,
  blue: string,
  red: string,
  orange: string,
  black: string,
  dark: string,
  gray: string,
  lightGray: string,

  [propName: string]: any,
}

export interface ITheme {
  space?: number[],
  fontSizes?: number[],
  lineHeight?: number[],
  borderRadius?: number[],
  boxShadow?: string[],
  border?: string[],
  colors?: IColors,
  borderColor?: IColors,
  variant?: IVariant,

  [propName: string]: any,
}
