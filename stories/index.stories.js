import React from "react";
import { jsxDecorator } from "storybook-addon-jsx";
import { withKnobs, select } from "@storybook/addon-knobs";

import { addDecorator, storiesOf } from "@storybook/react";
import StyledThemeProvider from "../src/styles/StyleThemeProvider";

import {
  ThemeCreate,
  Box,
  Flex,
  Input,
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Container,
  Image,
  Link,
  RadioButton,
  RadioButtonGroup,
  SelectBase,
  SmallPreloader,
  Text,
  TextArea,
  TooltipBase,
  Badge,
  TabContent,
  TabController,
  Tabs,
  ButtonGroup
} from "../src";

import Accordion from "../src/components/Accordion/Accordion";
import AccordionContent from "../src/components/Accordion/AccordionContent";
import AccordionController from "../src/components/Accordion/AccordionController";

addDecorator(jsxDecorator);
addDecorator(withKnobs);

const StyleTheme = ThemeCreate();

storiesOf("Components", module)
  .addDecorator(story => {
    return (
      <StyledThemeProvider theme={StyleTheme}>{story()}</StyledThemeProvider>
    );
  })
  .add("Box", () => (
    <Box>
      <h3> Box</h3>
      <Box>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
        exercitationem inventore porro rerum, sapiente suscipit? Accusamus
        asperiores atque eius eveniet illo iste itaque, laudantium nihil odit
        praesentium sed vero voluptas?
      </Box>

      <h3> Box with css value</h3>
      <Box
        width={"50%"}
        border={"1px solid red"}
        borderRadius={"3px"}
        boxShadow={StyleTheme.boxShadow[1]}
        padding={3}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
        exercitationem inventore porro rerum, sapiente suscipit? Accusamus
        asperiores atque eius eveniet illo iste itaque, laudantium nihil odit
        praesentium sed vero voluptas?
      </Box>
    </Box>
  ))

  .add("Flex", () => (
    <Box>
      <h3> Flex</h3>
      <Flex mb={3}>
        <Box
          width={"30%"}
          border={"1px solid red"}
          borderRadius={"3px"}
          p={1}
          mr={2}
        >
          first block
        </Box>
        <Box width={"40%"} border={"1px solid red"} borderRadius={"3px"} p={2}>
          second block
        </Box>
      </Flex>

      <h3> Align -items : center</h3>
      <Flex mb={3} alignItems={"center"}>
        <Box
          width={"30%"}
          border={"1px solid red"}
          borderRadius={"3px"}
          p={1}
          mr={2}
        >
          first block
        </Box>
        <Box width={"40%"} border={"1px solid red"} borderRadius={"3px"} p={2}>
          second block
        </Box>
      </Flex>

      <h3>Justify - content : space-around</h3>
      <Flex justifyContent={"space-around"} mb={3}>
        <Box width={"30%"} border={"1px solid red"} borderRadius={"3px"} p={1}>
          first block
        </Box>
        <Box width={"40%"} border={"1px solid red"} borderRadius={"3px"} p={2}>
          second block
        </Box>
      </Flex>

      <h3>Justify - content : space-between</h3>
      <Flex justifyContent={"space-between"} mb={3}>
        <Box width={"30%"} border={"1px solid red"} borderRadius={"3px"} p={1}>
          first block
        </Box>
        <Box width={"40%"} border={"1px solid red"} borderRadius={"3px"} p={2}>
          second block
        </Box>
      </Flex>

      <h3>Justify - content : center</h3>
      <Flex justifyContent={"center"} mb={3}>
        <Box
          width={"30%"}
          border={"1px solid red"}
          borderRadius={"3px"}
          p={1}
          mr={2}
        >
          first block
        </Box>
        <Box width={"40%"} border={"1px solid red"} borderRadius={"3px"} p={2}>
          second block
        </Box>
      </Flex>

      <h3> Flex-direction : column</h3>
      <Flex flexDirection={"column"} mb={3}>
        <Box
          width={"30%"}
          border={"1px solid red"}
          borderRadius={"3px"}
          p={1}
          mb={2}
        >
          first block
        </Box>
        <Box width={"40%"} border={"1px solid red"} borderRadius={"3px"} p={2}>
          second block
        </Box>
      </Flex>
    </Box>
  ))

  .add("Text", () => (
    <Box>
      <Text variant={"h1"}>h1. Heading</Text>
      <Text variant={"h2"}>h2. Heading</Text>
      <Text variant={"h5"}>h3. Heading</Text>
      <Text variant={"h4"}>h4. Heading</Text>
      <Text variant={"h5"}>h5. Heading</Text>
      <Text variant={"h6"}>h6. Heading</Text>
      <Text variant={"body1"}>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
        asperiores assumenda aut culpa deleniti dolore dolores ducimus esse
        facere, illo impedit, in ipsa, ipsum laudantium odio saepe similique
        sint vitae!
      </Text>
      <Text variant={"body2"}>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
        asperiores assumenda aut culpa deleniti dolore dolores ducimus esse
        facere, illo impedit, in ipsa, ipsum laudantium odio saepe similique
        sint vitae!
      </Text>
    </Box>
  ))

  .add("Card", () => (
    <Box>
      <Text as={"h3"} variant={"h5"}>
        Card
      </Text>
      <Flex flexDirection={"column"} flexWrap={"wrap"}>
        <Card
          fontSize={7}
          fontWeight="bold"
          p={5}
          width={[1, 1, 1 / 2]}
          my={5}
          bg={"white"}
          boxShadow={4}
          borderRadius={5}
        >
          Card
        </Card>
        <Card
          width={[1, 1, 1 / 2]}
          my={5}
          bg={"white"}
          boxShadow={4}
          borderRadius={5}
        >
          <Image width={1} src="https://source.unsplash.com/random/1280x720" />
          <Box fontSize={5} fontWeight="bold" p={5}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            beatae eius ipsa nihil omnis pariatur perspiciatis quibusdam rem
            ullam unde. Animi, fugit magni provident qui quod sit vero voluptate
            voluptatem.
          </Box>
        </Card>
      </Flex>
    </Box>
  ))

  .add("Container", () => (
    <Box>
      <h3>Container Component</h3>
      <Container>
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          exercitationem inventore porro rerum, sapiente suscipit? Accusamus
          asperiores atque eius eveniet illo iste itaque, laudantium nihil odit
          praesentium sed vero voluptas?
        </Box>
      </Container>
    </Box>
  ))

  .add("Image", () => (
    <Box>
      <h3>Image Component</h3>
      <Image
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"
        }
      />

      <h3>Image Component with css value</h3>
      <Image
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"
        }
        width={"100px"}
        height={"100px"}
        border={"1px solid black"}
      />
    </Box>
  ))

  .add("Button", () => (
    <Box>
      <Text as={"h3"} variant={"h5"}>
        Button
      </Text>
      <Button>Button</Button>

      <Box as={"h3"}>Button</Box>
      <Button>Button</Button>

      <Text as={"h3"} variant={"h5"}>
        Button with css value
      </Text>
      <Box mb={5}>
        <Button variant={"default"} size={"small"}>
          default
        </Button>

        <Button variant={"default"} size={"medium"}>
          default
        </Button>
        <Button disabled variant={"default"} size={"medium"}>
          default
        </Button>

        <Button variant={"default"} size={"large"}>
          default
        </Button>
      </Box>
      <Box mb={5}>
        <Button variant={"primary"} size={"small"}>
          Primary
        </Button>
        <Button variant={"primary"} size={"medium"}>
          Primary
        </Button>
        <Button disabled variant={"primary"} size={"large"}>
          Primary
        </Button>
      </Box>

      <Box mb={5}>
        <Button variant={"secondary"} size={"small"}>
          Secondary
        </Button>
        <Button variant={"secondary"} size={"medium"}>
          Secondary
        </Button>
        <Button disabled variant={"secondary"} size={"medium"}>
          Secondary
        </Button>
        <Button variant={"secondary"} size={"large"}>
          Secondary
        </Button>
      </Box>

      <Box mb={5}>
        <Button variant={"error"} size={"small"}>
          Error
        </Button>
        <Button variant={"error"} size={"medium"}>
          Error
        </Button>
        <Button disabled variant={"error"} size={"medium"}>
          Error
        </Button>
        <Button variant={"error"} size={"large"}>
          Error
        </Button>
      </Box>
    </Box>
  ))

  .add("ButtonGroup", () => (
    <Box>
      <Text mb={5}>Default</Text>

      <ButtonGroup mb={7}>
        <Button variant={"secondary"} size={"large"}>
          Button 1
        </Button>
        <Button variant={"secondary"} size={"large"}>
          Button 2
        </Button>
        <Button variant={"secondary"} size={"large"}>
          Button 3
        </Button>
        <Button variant={"secondary"} size={"large"}>
          Button 4
        </Button>
      </ButtonGroup>

      <Text mb={5}>Vertical</Text>

      <ButtonGroup vertical>
        <Button variant={"secondary"} size={"large"}>
          1
        </Button>
        <Button variant={"secondary"} size={"large"}>
          2
        </Button>
        <Button variant={"secondary"} size={"large"}>
          3
        </Button>
        <Button variant={"secondary"} size={"large"}>
          4
        </Button>
      </ButtonGroup>
    </Box>
  ))

  .add("Badge", () => (
    <Box position={"relative"} width={"50%"} p={5}>
      <Text as={"h3"} variant={"h5"} mb={5}>
        Badge
      </Text>

      <Flex mb={5} flexWrap={"wrap"}>
        <Box mx={5}>
          <Button variant={"primary"} size={"medium"}>
            <Badge variant={"default"}>10</Badge>
            Button
          </Button>
        </Box>
        <Box mx={5}>
          <Button variant={"primary"} size={"medium"}>
            <Badge variant={"primary"}>99</Badge>
            Button
          </Button>
        </Box>
        <Box mx={5}>
          <Button variant={"primary"} size={"medium"}>
            <Badge variant={"secondary"}>999</Badge>
            Button
          </Button>
        </Box>
        <Box mx={5}>
          <Button variant={"primary"} size={"medium"}>
            <Badge variant={"default"}>9999</Badge>
            Button
          </Button>
        </Box>
      </Flex>

      <Flex mb={5} flexWrap={"wrap"}>
        <Box mx={5}>
          <Button variant={"primary"} size={"medium"}>
            <Badge position={"topEnd"} variant={"default"}>
              10
            </Badge>
            Button
          </Button>
        </Box>
        <Box mx={5}>
          <Button variant={"primary"} size={"medium"}>
            <Badge position={"topStart"} variant={"primary"}>
              10
            </Badge>
            Button
          </Button>
        </Box>
        <Box mx={5}>
          <Button variant={"primary"} size={"medium"}>
            <Badge position={"bottomStart"} variant={"secondary"}>
              10
            </Badge>
            Button
          </Button>
        </Box>
        <Box mx={5}>
          <Button variant={"primary"} size={"medium"}>
            <Badge position={"bottomEnd"} variant={"default"}>
              10
            </Badge>
            Button
          </Button>
        </Box>
      </Flex>

      <Flex mb={5} flexWrap={"wrap"}>
        <Box mx={5}>
          <Button variant={"primary"} size={"medium"}>
            <Badge position={"topEnd"} variant={"dot"} />
            Button
          </Button>
        </Box>
      </Flex>
    </Box>
  ))

  .add("Input", () => (
    <Box>
      <Flex mb={5}>
        <Box px={5} w={1 / 3}>
          <Input
            placeholder={"Default small"}
            variant={"primary"}
            size={"small"}
          />
        </Box>
        <Box px={5} w={1 / 3}>
          <Input
            placeholder={"Default medium"}
            variant={"primary"}
            size={"medium"}
          />
        </Box>
        <Box px={5} w={1 / 3}>
          <Input
            placeholder={"Default large"}
            variant={"primary"}
            size={"large"}
          />
        </Box>
      </Flex>

      <Flex mb={5}>
        <Box px={5} w={1 / 3}>
          <Input
            placeholder={"Primary small"}
            variant={"primary"}
            size={"small"}
          />
        </Box>
        <Box px={5} w={1 / 3}>
          <Input
            placeholder={"Primary medium"}
            variant={"primary"}
            size={"medium"}
          />
        </Box>
        <Box px={5} w={1 / 3}>
          <Input
            placeholder={"Primary large"}
            variant={"primary"}
            size={"large"}
          />
        </Box>
      </Flex>

      <Flex mb={5}>
        <Box px={5} w={1 / 3}>
          <Input placeholder={"Error small"} variant={"error"} size={"small"} />
        </Box>
        <Box px={5} w={1 / 3}>
          <Input
            placeholder={"Error medium"}
            variant={"error"}
            size={"medium"}
          />
        </Box>
        <Box px={5} w={1 / 3}>
          <Input placeholder={"Error large"} variant={"error"} size={"large"} />
        </Box>
      </Flex>

      <Flex mb={5}>
        <Box px={5} w={1 / 3}>
          <Input
            placeholder={"warning small"}
            variant={"warning"}
            size={"small"}
          />
        </Box>
        <Box px={5} w={1 / 3}>
          <Input
            placeholder={"warning medium"}
            variant={"warning"}
            size={"medium"}
          />
        </Box>
        <Box px={5} w={1 / 3}>
          <Input
            placeholder={"warning large"}
            variant={"warning"}
            size={"large"}
          />
        </Box>
      </Flex>

      <Flex mb={5}>
        <Box px={5} w={1 / 3}>
          <Text variant={"body1"} mb={2}>
            Label
          </Text>
          <Input
            placeholder={"Default medium"}
            variant={"primary"}
            size={"medium"}
          />
        </Box>
      </Flex>

      <Flex mb={5}>
        <Box px={5} w={1 / 3}>
          <Flex mb={5} alignItems={"center"}>
            <Text width={1 / 4} variant={"body1"} mr={3}>
              Email
            </Text>
            <Input placeholder={"Email"} variant={"primary"} size={"medium"} />
          </Flex>

          <Flex alignItems={"center"}>
            <Text width={1 / 4} variant={"body1"} mr={3}>
              Password
            </Text>
            <Input
              placeholder={"Password"}
              variant={"default"}
              size={"medium"}
            />
          </Flex>
        </Box>
      </Flex>

      <Flex mb={5}>
        <Box px={5} w={1 / 3}>
          <Text variant={"error"} mb={2}>
            Label
          </Text>
          <Input
            placeholder={"Default medium"}
            variant={"error"}
            size={"medium"}
          />
          <Text variant={"error"}>Error</Text>
        </Box>
      </Flex>
      <Flex mb={5}>
        <Box px={5} w={1 / 3}>
          <Text variant={"warning"} mb={2}>
            Label
          </Text>
          <Input
            placeholder={"Default medium"}
            variant={"warning"}
            size={"medium"}
          />
          <Text variant={"warning"}>Error</Text>
        </Box>
      </Flex>
    </Box>
  ))

  .add("TextArea", () => (
    <Box>
      <h3>TextArea Component</h3>
      <Flex mb={5}>
        <Box px={5} w={1 / 3}>
          <TextArea
            variant={"primary"}
            size={"small"}
            placeholder={"Default small"}
          />
        </Box>
        <Box px={5} w={1 / 3}>
          <TextArea
            variant={"primary"}
            size={"medium"}
            placeholder={"Default medium"}
          />
        </Box>
        <Box px={5} w={1 / 3}>
          <TextArea
            variant={"primary"}
            size={"large"}
            placeholder={"Default large"}
          />
        </Box>
      </Flex>
    </Box>
  ))

  .add("TooltipBase", () => {
    const label = "Variant";
    const options = {
      dark: "dark",
      success: "success",
      warning: "warning",
      error: "error",
      info: "info"
    };
    const defaultValue = "dark";
    const groupId = "GROUP-ID1";
    const value = select(label, options, defaultValue, groupId);

    return (
      <Box>
        <Text as={"h3"} variant={"h5"} mb={10}>
          Tooltip
        </Text>
        <Box mb={7}>
          <TooltipBase variant={value} />
          <Button
            data-tip="hover on me will keep the tooltip"
            data-for="ReactTooltipGlobal"
            variant={"primary"}
            size={"medium"}
          >
            Button
          </Button>
        </Box>
      </Box>
    );
  })

  .add("Checkbox", () => (
    <Box>
      <Text as={"h3"} variant={"h5"}>
        Checkbox
      </Text>
      <Checkbox label={"checkbox"} />
      <Text as={"h3"} variant={"h5"}>
        Checkbox group
      </Text>
      <CheckboxGroup
        value={[]}
        name={"checkbox"}
        options={[
          {
            label: "Check N1",
            value: "foo name"
          },
          {
            label: "Check N2",
            value: "Foo value"
          }
        ]}
      />
    </Box>
  ))

  .add("RadioButton", () => (
    <Box>
      <Text as={"h3"} variant={"h5"}>
        RadioButton
      </Text>

      <RadioButton label={"Check me!"} />

      <Text as={"h3"} variant={"h5"}>
        RadioButtonGroup
      </Text>

      <RadioButtonGroup
        value={""}
        id={"hid"}
        name={"hid"}
        options={[
          {
            label: "RadioButton",
            value: "button Name"
          },
          {
            label: "RadioButton",
            value: "button value"
          }
        ]}
      />
    </Box>
  ))

  .add("SelectBase", () => (
    <Box>
      <h3>SelectBase</h3>
      <SelectBase
        name={"SelectBase"}
        options={[
          {
            label: "SelectBase #1",
            value: "SelectBase #1"
          },
          {
            label: "SelectBase #2",
            value: "SelectBase #2"
          }
        ]}
      />
    </Box>
  ))

  .add("Link", () => (
    <Box>
      <h3>Link Component</h3>
      <Link href={"/"}>Link</Link>
    </Box>
  ))

  .add("SmallPreloader", () => (
    <Box>
      <h3>SmallPreloader</h3>
      <SmallPreloader />
    </Box>
  ))

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

  .add("Accordion", () => (
    <Box p={5}>
      <Box p={5}>
        <AccordionController>
          <Accordion AccordionWrapper={ButtonGroup}>
            <Button variant={"default"} size={"small"}>
              Accordion first
            </Button>
          </Accordion>

          <AccordionContent>
            <Box>
              <Text>Content first</Text>
            </Box>
          </AccordionContent>
        </AccordionController>
      </Box>
      <Box p={5}>
        <AccordionController>
          <Accordion AccordionWrapper={ButtonGroup}>
            <Button variant={"default"} size={"medium"}>
              Accordion second
            </Button>
          </Accordion>

          <AccordionContent>
            <Box>
              <Text>Content second</Text>
            </Box>
          </AccordionContent>
        </AccordionController>
      </Box>
    </Box>
  ));
