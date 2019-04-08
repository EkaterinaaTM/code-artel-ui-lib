import React from 'react';
import {jsxDecorator} from 'storybook-addon-jsx';
import {addDecorator, storiesOf} from '@storybook/react';
import StyledThemeProvider from "../src/styles/StyleThemeProvider";

import Box from "../src/components/Box/Box";
import Flex from "../src/components/Flex/Flex";

addDecorator(jsxDecorator);


addDecorator(story => (
  <StyledThemeProvider>
    {story()}
  </StyledThemeProvider>
));

storiesOf('Flex Box ', module)

  .add('Box', () => (
    <Box>
      <Box mb={5} backgroundColor={'color2'} width={1/2}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem inventore porro rerum,
        sapiente suscipit? Accusamus asperiores atque eius eveniet illo iste itaque, laudantium nihil odit praesentium
        sed vero voluptas?
      </Box>
      <Box mb={5} backgroundColor={'color2'} width={1/4}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem inventore porro rerum,
        sapiente suscipit? Accusamus asperiores atque eius eveniet illo iste itaque, laudantium nihil odit praesentium
        sed vero voluptas?
      </Box>
      <Box mb={5} backgroundColor={'color2'} width={1/6}>
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
    <Flex>
      <Box mx={5} mb={5} backgroundColor={'color2'} width={1/2}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem inventore porro rerum,
        sapiente suscipit? Accusamus asperiores atque eius eveniet illo iste itaque, laudantium nihil odit praesentium
        sed vero voluptas?
      </Box>
      <Box mx={5}  mb={5} backgroundColor={'color2'} width={1/2}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem inventore porro rerum,
        sapiente suscipit? Accusamus asperiores atque eius eveniet illo iste itaque, laudantium nihil odit praesentium
        sed vero voluptas?
      </Box>
    </Flex>
  ))
  .add('Box custom tag', () => (
    <Box as={'img'} src={'http://vredotvet.ru/wp-content/uploads/34dcc15db3_500-300x300.jpg'}/>
  ));

