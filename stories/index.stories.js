import React from 'react';
import {jsxDecorator} from 'storybook-addon-jsx';
import {addDecorator, storiesOf} from '@storybook/react';
import StyledThemeProvider from "../src/styles/StyleThemeProvider";


import {
  ThemeCreate,
  Box,
  Flex,
  Input,
} from "../src";

addDecorator(jsxDecorator);

const StyleTheme = ThemeCreate();
storiesOf('Flex Box ', module)
  .addDecorator(story => (
    <StyledThemeProvider theme={StyleTheme}>
      {story()}
    </StyledThemeProvider>
  ))
  .add('Box', () => (
    <Box>
      <Box mb={5} backgroundColor={'color2'} width={1 / 2}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem inventore porro rerum,
        sapiente suscipit? Accusamus asperiores atque eius eveniet illo iste itaque, laudantium nihil odit praesentium
        sed vero voluptas?
      </Box>
      <Box mb={5} backgroundColor={'color2'} width={1 / 4}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem inventore porro rerum,
        sapiente suscipit? Accusamus asperiores atque eius eveniet illo iste itaque, laudantium nihil odit praesentium
        sed vero voluptas?
      </Box>
      <Box mb={5} backgroundColor={'color2'} width={1 / 6}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem inventore porro rerum,
        sapiente suscipit? Accusamus asperiores atque eius eveniet illo iste itaque, laudantium nihil odit praesentium
        sed vero voluptas?
      </Box>
      <Box mb={5} backgroundColor={'color2'} width={'30%'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem inventore porro rerum,
        sapiente suscipit? Accusamus asperiores atque eius eveniet illo iste itaque, laudantium nihil odit praesentium
        sed vero voluptas?
      </Box>
    </Box>
  ))
  .add('Flex grid', () => (
    <Flex flexWrap={'wrap'}>
      <Box px={5} mb={5} backgroundColor={'color2'} width={1 / 2}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem inventore porro rerum,
        sapiente suscipit? Accusamus asperiores atque eius eveniet illo iste itaque, laudantium nihil odit praesentium
        sed vero voluptas?
      </Box>
      <Box px={5} mb={5} backgroundColor={'color2'} width={1 / 2}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem inventore porro rerum,
        sapiente suscipit? Accusamus asperiores atque eius eveniet illo iste itaque, laudantium nihil odit praesentium
        sed vero voluptas?
      </Box>

      <Box p={5} mb={5} backgroundColor={'color2'} width={1 / 3}>
        <Box backgroundColor={'color1'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem inventore porro rerum,
          sapiente suscipit? Accusamus asperiores atque eius eveniet illo iste itaque, laudantium nihil odit praesentium
          sed vero voluptas?
        </Box>
      </Box>
      <Box p={5} mb={5} backgroundColor={'color2'} width={1 / 3}>
        <Box backgroundColor={'color1'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem inventore porro rerum,
          sapiente suscipit? Accusamus asperiores atque eius eveniet illo iste itaque, laudantium nihil odit praesentium
          sed vero voluptas?
        </Box>
      </Box>
      <Box p={5} mb={5} backgroundColor={'color2'} width={1 / 3}>
        <Box backgroundColor={'color1'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem inventore porro rerum,
          sapiente suscipit? Accusamus asperiores atque eius eveniet illo iste itaque, laudantium nihil odit praesentium
          sed vero voluptas?
        </Box>
      </Box>

      <Box p={5} mb={5} backgroundColor={'color2'} width={1 / 4}>
        <Box backgroundColor={'color1'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem inventore porro rerum,
          sapiente suscipit? Accusamus asperiores atque eius eveniet illo iste itaque, laudantium nihil odit praesentium
          sed vero voluptas?
        </Box>
      </Box>
      <Box p={5} mb={5} backgroundColor={'color2'} width={1 / 4}>
        <Box backgroundColor={'color1'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem inventore porro rerum,
          sapiente suscipit? Accusamus asperiores atque eius eveniet illo iste itaque, laudantium nihil odit praesentium
          sed vero voluptas?
        </Box>
      </Box>
      <Box p={5} mb={5} backgroundColor={'color2'} width={1 / 4}>
        <Box backgroundColor={'color1'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem inventore porro rerum,
          sapiente suscipit? Accusamus asperiores atque eius eveniet illo iste itaque, laudantium nihil odit praesentium
          sed vero voluptas?
        </Box>
      </Box>
      <Box p={5} mb={5} backgroundColor={'color2'} width={1 / 4}>
        <Box backgroundColor={'color1'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem inventore porro rerum,
          sapiente suscipit? Accusamus asperiores atque eius eveniet illo iste itaque, laudantium nihil odit praesentium
          sed vero voluptas?
        </Box>
      </Box>

    </Flex>
  ))
  .add('Box custom tag', () => (
    <Box as={'img'} src={'http://vredotvet.ru/wp-content/uploads/34dcc15db3_500-300x300.jpg'}/>
  ));


storiesOf('Input', module)
  .addDecorator(story => (
    <StyledThemeProvider theme={StyleTheme}>
      {story()}
    </StyledThemeProvider>
  ))
  .add('size', () => (
    <Flex flexDirection={'column'} flexWrap={'wrap'}>
      <Box mb={5}>
        <Input size={'small'} placeholder={'Text field small'}/>
      </Box>
      <Box mb={5}>
        <Input size={'medium'} placeholder={'Text field medium'}/>
      </Box>
      <Box mb={5}>
        <Input size={'large'} placeholder={'Text field large'}/>
      </Box>
    </Flex>

  ))
  .add('variants', () => (
    <Flex flexDirection={'column'} flexWrap={'wrap'}>
      <Box mb={5}>
        <Input variant={'default'} placeholder={'Text field default'}/>
      </Box>
      <Box mb={5}>
        <Input variant={'error'} placeholder={'Text field error'}/>
      </Box>
    </Flex>
  ))


storiesOf('Theming story', module)
  .addDecorator(story => {
    const colors = {
      white: '#FFFFFF',
      blue: '#002171',
      red: '#870000',
      orange: '#bc5100',
      black: '#000000',
      dark: '#212121',
      gray: '#263238',
      lightGray: '#607d8b',
    };
    const theme = ThemeCreate({colors});

    theme.variant.inputSize.medium = {
      fontSize: '14px',
      lineHeight: '20px',
      padding: '4px 8px',
      '::placeholder': {
        fontSize: '14px',
        lineHeight: '20px',
      },
    };
    theme.variant.inputVariant.default = {
      color: theme.colors.red,
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: theme.colors.red,
      borderRadius: '4px',
      outline: 'none',

      ':hover': {
        borderColor: theme.colors.red,
      },
      ':active': {
        borderColor: theme.colors.red,
      },
      '.active': {
        borderColor: theme.colors.red,
      },
      ':focus': {
        outline: 'none',
        borderColor: theme.colors.red,
      },
      ':disabled': {
        cursor: 'default',
        outline: 'none',
        borderColor: theme.colors.gray,
      },
      ':visited': {},
      '::placeholder': {
        color: theme.colors.gray,
      },
    }

    return (
      <StyledThemeProvider theme={theme}>
        {story()}
      </StyledThemeProvider>
    )
  })
  .add('variants', () => (
    <Flex flexDirection={'column'} flexWrap={'wrap'}>
      <Box mb={5}>
        <Input variant={'default'} placeholder={'Text field default'}/>
      </Box>
      <Box mb={5}>
        <Input variant={'error'} placeholder={'Text field error'}/>
      </Box>
    </Flex>
  ))
