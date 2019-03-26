import * as React from 'react';
import { ThemeProvider } from 'styled-components';

/** Variants */
import { ButtonSize } from './variants/ButtonSize';
import { InputVariant } from './variants/InputVariant';
import ButtonVariant from './variants/ButtonVariant';

export const colors = {
  color0: '#ffffff',
  color1: '#e0e0e0',
  color2: '#AEAEAE',
  color3: '#FDF396',
  color4: '#4F4F4F',
  color5: '#E5E5E5',
  color6: '#BDBDBD',
  color7: '#000',
  color8: '#FFB74D',
  color9: '#FB8C00',
  color10: '#E65100',
  color11: '#E57373',
  color12: '#E53935',
  color13: '#B71C1C',
  color14: '#333333'
};

const Space = [0, 2, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96];

const boxShadow = [
  '2px 4px 8px 0px rgba(138,138,138,0.5)',
  '2px 2px 4px 0px rgba(0,127,175,1)'
];

const BaseTheme = {
  space: Space,
  fontSizes: Space,
  lineHeight: Space,
  boxShadow,
  borderRadius: Space,
  borderColor: colors,
  colors: colors,
  variant: {
    buttons: {},
    buttonSize: ButtonSize,
    inputVariant: InputVariant
  }
};

BaseTheme.variant.buttons = ButtonVariant(BaseTheme);

export const StyledThemeProvider: any = ({ children }: any) => (
  <ThemeProvider theme={BaseTheme}>{children}</ThemeProvider>
);

export default StyledThemeProvider;
