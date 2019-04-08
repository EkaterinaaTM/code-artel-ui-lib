import React from 'react';
import {jsxDecorator} from 'storybook-addon-jsx';
import {addDecorator, storiesOf} from '@storybook/react';
import StyledThemeProvider from "../src/styles/StyleThemeProvider";

// import Box from "../src/components/Box/Box";
import {Box} from "../dist";

addDecorator(jsxDecorator);


addDecorator(story => (
  <StyledThemeProvider>
    {story()}
  </StyledThemeProvider>
));

storiesOf('Button', module)

  .add('with some emoji', () => (
    <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
  ))
  .add('with some emoji 2', () => (
    <Box as={'img'} src={'http://vredotvet.ru/wp-content/uploads/34dcc15db3_500-300x300.jpg'}/>
  ))

