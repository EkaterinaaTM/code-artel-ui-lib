import React from "react";
import { jsxDecorator } from "storybook-addon-jsx";
import { addDecorator, storiesOf } from "@storybook/react";
import StyledThemeProvider from "../src/styles/StyleThemeProvider";

import {
  ThemeCreate,
  Box,
  Flex,
  Input,
  ButtonBase,
  Card,
  Checkbox,
  CheckboxBase,
  CheckboxGroup,
  Container,
  Image,
  Link,
  RadioButton,
  RadioButtonBase,
  RadioButtonGroup,
  SelectBase,
  SmallPreloader,
  Text,
  TextArea,
  TooltipBase
} from "../src";

import TabContent from "../src/components/TabBar/TabContent";
import TabController from "../src/components/TabBar/TabController";
import Tabs from "../src/components/TabBar/Tabs";

addDecorator(jsxDecorator);

const StyleTheme = ThemeCreate();

storiesOf("Сomponents", module)
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
        boxShadow={props => props.boxShadow[1]}
        padding={3}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
        exercitationem inventore porro rerum, sapiente suscipit? Accusamus
        asperiores atque eius eveniet illo iste itaque, laudantium nihil odit
        praesentium sed vero voluptas?
      </Box>
    </Box>
  ))

  .add("Flex", () => {
    return (
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
          <Box
            width={"40%"}
            border={"1px solid red"}
            borderRadius={"3px"}
            p={2}
          >
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
          <Box
            width={"40%"}
            border={"1px solid red"}
            borderRadius={"3px"}
            p={2}
          >
            second block
          </Box>
        </Flex>

        <h3>Justify - content : space-around</h3>
        <Flex justifyContent={"space-around"} mb={3}>
          <Box
            width={"30%"}
            border={"1px solid red"}
            borderRadius={"3px"}
            p={1}
          >
            first block
          </Box>
          <Box
            width={"40%"}
            border={"1px solid red"}
            borderRadius={"3px"}
            p={2}
          >
            second block
          </Box>
        </Flex>

        <h3>Justify - content : space-between</h3>
        <Flex justifyContent={"space-between"} mb={3}>
          <Box
            width={"30%"}
            border={"1px solid red"}
            borderRadius={"3px"}
            p={1}
          >
            first block
          </Box>
          <Box
            width={"40%"}
            border={"1px solid red"}
            borderRadius={"3px"}
            p={2}
          >
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
          <Box
            width={"40%"}
            border={"1px solid red"}
            borderRadius={"3px"}
            p={2}
          >
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
          <Box
            width={"40%"}
            border={"1px solid red"}
            borderRadius={"3px"}
            p={2}
          >
            second block
          </Box>
        </Flex>
      </Box>
    );
  })

  .add("Input", () => (
    <Box>
      <h3>Input</h3>
      <Input />

      <h3>Input with placeholder</h3>
      <Input
        placeholder={"Input Component"}
        fontSize={"24px"}
        lineHeight={"32px"}
        pl={3}
      />

      <h3>Input with variant</h3>

      <Input
        placeholder={"Input Component"}
        variant={"default"}
        size={"xSmall"}
        mb={5}
      />
      <Input
        placeholder={"Input Component"}
        variant={"primary"}
        size={"small"}
        mb={5}
      />
      <Input
        placeholder={"Input Component"}
        variant={"secondary"}
        size={"medium"}
        mb={5}
      />
      <Input placeholder={"Input Component"} variant={"error"} size={"large"} />
    </Box>
  ))

  .add("Button", () => (
    <Box>
      <h3>Button</h3>
      <ButtonBase>Button</ButtonBase>

      <h3>Button with css value</h3>
      <Box mb={5}>
        <ButtonBase variant={"default"} size={"small"}>
          Button
        </ButtonBase>
      </Box>

      <Box mb={5}>
        <ButtonBase variant={"primary"} size={"medium"}>
          Button
        </ButtonBase>
      </Box>

      <Box mb={5}>
        <ButtonBase variant={"secondary"} size={"large"}>
          Button
        </ButtonBase>
      </Box>

      <Box mb={5}>
        <ButtonBase variant={"error"} size={"large"}>
          Button
        </ButtonBase>
      </Box>
    </Box>
  ))

  .add("Card", () => (
    <Box>
      <h3>Card</h3>
      <Card p={5} borderRadius={5}>
        lorem lorem
      </Card>
    </Box>
  ))

  .add("Checkbox", () => (
    <Box>
      <h3>CheckboxBase</h3>
      <CheckboxBase />

      <h3>Checkbox with label</h3>
      <Checkbox label={"Check me!"} />

      <h3>CheckboxGroup</h3>
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

  .add("Link", () => (
    <Box>
      <h3>Link Component</h3>
      <Link href={"/"}>Link</Link>
    </Box>
  ))

  .add("RadioButton", () => (
    <Box>
      <h3>RadioButtonBase</h3>
      <RadioButtonBase />

      <h3>RadioButton with label</h3>
      <RadioButton label={"Check me!"} />

      <h3>RadioButtonGroup</h3>
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

  .add("SmallPreloader", () => (
    <Box>
      <h3>SmallPreloader</h3>
      <SmallPreloader />
    </Box>
  ))

  .add("Tab", () => (
    <Box>
      <h3>Tab</h3>
      <TabController>
        <Tabs label="Simple text">
          <Box border={"1px solid black"} borderRadius={"2px"} p={3}>
            Lorem
          </Box>
          <Box border={"1px solid black"} borderRadius={"2px"} p={3}>
            Ipsum
          </Box>
        </Tabs>
        <TabContent label="Image">
          <img
            src="https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1"
            width={50}
            height={50}
            alt={"foo"}
          />
          <Box border={"1px solid black"} borderRadius={"2px"} p={3}>
            Text
          </Box>
        </TabContent>
      </TabController>
    </Box>
  ))

  .add("Text", () => (
    <Box>
      <h3>Text Component</h3>
      <Text>lorem</Text>

      <h3>Text Component with css value</h3>
      <Text color={"orange"} fontSize={"32px"} lineHeight={"40px"}>
        lorem
      </Text>
    </Box>
  ))

  .add("TextArea", () => (
    <Box>
      <h3>TextArea Component</h3>
      <TextArea placeholder={"TextArea"} />
    </Box>
  ))

  .add("TooltipBase", () => (
    <Box>
      <h3>TooltipBase Component</h3>

      <Box p={5}>
        <TooltipBase position="top" isActive={true} warning={"Надпись тултипа"}>
          TooltipBase
        </TooltipBase>
      </Box>

      <Box p={5}>
        <TooltipBase
          position="bottom"
          isActive={true}
          warning={"Надпись тултипа"}
        >
          TooltipBase
        </TooltipBase>
      </Box>
    </Box>
  ));
