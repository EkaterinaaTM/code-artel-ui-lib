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

import ButtonWithImage from "../src/components/ButtonWithImage/ButtonWithImage";
import TabContent from "../src/components/TabBar/TabContent";
import TabController from "../src/components/TabBar/TabController";
import Tabs from "../src/components/TabBar/Tabs";
import Badg from "../src/components/Badg/Badg";

addDecorator(jsxDecorator);

const StyleTheme = ThemeCreate();

storiesOf("Сomponents", module)
  .addDecorator(story => {
    return (
      <StyledThemeProvider theme={StyleTheme}>{story()}</StyledThemeProvider>
    );
  })
  .add("Box", props => {
    return (
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
    );
  })

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

      <Box>
        <h3>Button With Image right</h3>
        <ButtonWithImage
          variant={"error"}
          size={"large"}
          right
          alt={"1"}
          src={
            "data:image/png;base64,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"
          }
        >
          Button for
        </ButtonWithImage>
      </Box>

      <Box>
        <h3>Button With Image left</h3>
        <ButtonWithImage
          variant={"error"}
          size={"large"}
          left
          alt={"1"}
          src={
            "data:image/png;base64,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"
          }
        >
          Button for
        </ButtonWithImage>
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
      <Text as={"h6"}>lorem</Text>

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
  ))

  .add("Badg", () => (
    <Box position={"relative"} width={"50%"}>
      <Box p={5}> 123</Box>
      <Badg position={'topRight'}>1</Badg>
    </Box>
  ));
