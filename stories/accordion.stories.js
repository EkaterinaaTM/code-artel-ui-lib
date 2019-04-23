import React from "react";
import {jsxDecorator} from "storybook-addon-jsx";
import {withKnobs} from "@storybook/addon-knobs";

import {addDecorator, storiesOf} from "@storybook/react";
import StyledThemeProvider, {ThemeCreate} from "../src/styles/StyleThemeProvider";

import AccordionToggle from "../src/components/Accordion/AccordionToggle";
import AccordionContent from "../src/components/Accordion/AccordionContent";
import AccordionController from "../src/components/Accordion/AccordionController";
import AccordionGroupController from "../src/components/Accordion/AccordionGroupController";
import {Box, Button, ButtonGroup, Text} from "../src";


addDecorator(jsxDecorator);
addDecorator(withKnobs);

const StyleTheme = ThemeCreate();

storiesOf("Accordion", module)
  .addDecorator(story => {
    return (
      <StyledThemeProvider theme={StyleTheme}>{story()}</StyledThemeProvider>
    );
  })
  .add("Accordion", () => (
    <Box p={5}>

      <Text mt={0} mb={3} as={'h3'} variant={'h5'}>
        Default accordion
      </Text>

      <Box p={5}>
        <AccordionController>
          <AccordionToggle AccordionWrapper={ButtonGroup}>
            <Button variant={"default"} size={"small"}>
              Accordion first
            </Button>
          </AccordionToggle>

          <AccordionContent>
            <Box>
              <Text>Content first</Text>
            </Box>
          </AccordionContent>
        </AccordionController>
      </Box>

      <Text mt={0} mb={3} as={'h3'} variant={'h5'}>
        Active default accordion
      </Text>

      <Box p={5}>
        <AccordionController isActive={true}>
          <AccordionToggle AccordionWrapper={ButtonGroup}>
            <Button variant={"default"} size={"small"}>
              Accordion first
            </Button>
          </AccordionToggle>

          <AccordionContent>
            <Text variant={'body1'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis cumque doloribus ex, magnam
              minus officia officiis praesentium reprehenderit sunt? A alias asperiores dolorum facere fugiat impedit
              velit, veritatis voluptas.
            </Text>
          </AccordionContent>
        </AccordionController>
      </Box>


      <Text mt={0} mb={3} as={'h3'} variant={'h5'}>
        Group accordion
      </Text>

      <Box p={5}>
        <AccordionGroupController>

          <AccordionController>
            <AccordionToggle AccordionWrapper={ButtonGroup}>
              <Button display={'block'} variant={"default"} size={"medium"}>
                Accordion 1
              </Button>
            </AccordionToggle>

            <AccordionContent>
              <Box>
                <Text>
                  Accordion 1 content
                </Text>
              </Box>
            </AccordionContent>
          </AccordionController>

          <AccordionController>
            <AccordionToggle AccordionWrapper={ButtonGroup}>
              <Button variant={"default"} size={"medium"}>
                Accordion 2
              </Button>
            </AccordionToggle>

            <AccordionContent>
              <Box>
                <Text>
                  Accordion 2 content
                </Text>
              </Box>
            </AccordionContent>
          </AccordionController>

        </AccordionGroupController>

      </Box>

      <Text mt={0} mb={3} as={'h3'} variant={'h5'}>
        Active default group accordion
      </Text>

      <Box p={5}>
        <AccordionGroupController isActiveAccordion={1}>

          <AccordionController>
            <AccordionToggle AccordionWrapper={ButtonGroup}>
              <Button display={'block'} variant={"default"} size={"medium"}>
                Accordion 1
              </Button>
            </AccordionToggle>

            <AccordionContent>
              <Box>
                <Text>
                  Accordion 1 content
                </Text>
              </Box>
            </AccordionContent>
          </AccordionController>

          <AccordionController>
            <AccordionToggle AccordionWrapper={ButtonGroup}>
              <Button variant={"default"} size={"medium"}>
                Accordion 2
              </Button>
            </AccordionToggle>

            <AccordionContent>
              <Box>
                <Text>
                  Accordion 2 content
                </Text>
              </Box>
            </AccordionContent>
          </AccordionController>

        </AccordionGroupController>

      </Box>
    </Box>
  ));
