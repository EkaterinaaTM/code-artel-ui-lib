import React from "react";
import {jsxDecorator} from "storybook-addon-jsx";
import {withKnobs} from "@storybook/addon-knobs";

import {addDecorator, storiesOf} from "@storybook/react";
import StyledThemeProvider, {ThemeCreate} from "../src/styles/StyleThemeProvider";
import {Box, Button, ButtonGroup, TabContent, TabController, Tabs, Text} from "../src";


addDecorator(jsxDecorator);
addDecorator(withKnobs);

const StyleTheme = ThemeCreate();

storiesOf("Tab", module)
  .addDecorator(story => {
    return (
      <StyledThemeProvider theme={StyleTheme}>{story()}</StyledThemeProvider>
    );
  })
  .add("Tab", () => (
    <Box width={"500px"}>
      <Box mb={5}>
        <Text variant={"h2"}>Tab</Text>
        <TabController>
          <Tabs>
            <Button variant={"default"} size={"medium"}>
              Tab 1
            </Button>
            <Button variant={"default"} size={"medium"}>
              Tab 2
            </Button>
          </Tabs>
          <TabContent>
            <Box>
              <Text>Content 1</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt maxime molestiae possimus ratione recusandae? Ab alias
                commodi dolores, ea eligendi esse, ex, facilis laudantium
                molestias natus praesentium tenetur voluptate voluptates!
              </Text>
            </Box>
            <Box>
              <Text>Content 2</Text>
              <Text mb={5}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt maxime molestiae possimus ratione recusandae? Ab alias
                commodi dolores, ea eligendi esse, ex, facilis laudantium
                molestias natus praesentium tenetur voluptate voluptates!
              </Text>
              <Text mb={5}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt maxime molestiae possimus ratione recusandae? Ab alias
                commodi dolores, ea eligendi esse, ex, facilis laudantium
                molestias natus praesentium tenetur voluptate voluptates!
              </Text>
            </Box>
          </TabContent>
        </TabController>
      </Box>

      <Box>
        <TabController>
          <Tabs TabsWrapper={ButtonGroup}>
            <Button variant={"default"} size={"medium"}>
              Tab 1
            </Button>

            <Button variant={"default"} size={"medium"}>
              Tab 2
            </Button>
          </Tabs>
          <TabContent>
            <Box>
              <Text>Content 1</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt maxime molestiae possimus ratione recusandae? Ab alias
                commodi dolores, ea eligendi esse, ex, facilis laudantium
                molestias natus praesentium tenetur voluptate voluptates!
              </Text>
            </Box>

            <Box>
              <Text>Content 2</Text>
              <Text mb={5}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt maxime molestiae possimus ratione recusandae? Ab alias
                commodi dolores, ea eligendi esse, ex, facilis laudantium
                molestias natus praesentium tenetur voluptate voluptates!
              </Text>
              <Text mb={5}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt maxime molestiae possimus ratione recusandae? Ab alias
                commodi dolores, ea eligendi esse, ex, facilis laudantium
                molestias natus praesentium tenetur voluptate voluptates!
              </Text>
            </Box>
          </TabContent>
        </TabController>
      </Box>
    </Box>
  ))
