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
import Accordion from "../src/components/Accordion/Accordion";
import {ButtonGroup} from "../src/components/ButtonGroup/ButtonGroup";

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
      <Flex mb={5}>
        <Box px={5} w={1 / 3}>
          <Input
            placeholder={"Default small"}
            variant={"default"}
            size={"small"}
          />
        </Box>
        <Box px={5} w={1 / 3}>
          <Input
            placeholder={"Default medium"}
            variant={"default"}
            size={"medium"}
          />
        </Box>
        <Box px={5} w={1 / 3}>
          <Input
            placeholder={"Default large"}
            variant={"default"}
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
          <Input
            placeholder={"Error small"}
            variant={"error"}
            size={"small"}
          />
        </Box>
        <Box px={5} w={1 / 3}>
          <Input
            placeholder={"Error medium"}
            variant={"error"}
            size={"medium"}
          />
        </Box>
        <Box px={5} w={1 / 3}>
          <Input
            placeholder={"Error large"}
            variant={"error"}
            size={"large"}
          />
        </Box>
      </Flex>

      <Flex mb={5}>
        <Box px={5} w={1 / 3}>
          <Input
            placeholder={"Secondary small"}
            variant={"secondary"}
            size={"small"}
          />
        </Box>
        <Box px={5} w={1 / 3}>
          <Input
            placeholder={"Secondary medium"}
            variant={"secondary"}
            size={"medium"}
          />
        </Box>
        <Box px={5} w={1 / 3}>
          <Input
            placeholder={"Secondary large"}
            variant={"secondary"}
            size={"large"}
          />
        </Box>
      </Flex>

      <Flex mb={5}>
        <Box px={5} w={1 / 3}>
          <Text variant={'body1'} mb={2}>Label</Text>
          <Input
            placeholder={"Default medium"}
            variant={"default"}
            size={"medium"}
          />
        </Box>
      </Flex>

      <Flex
        mb={5}
      >
        <Box px={5} w={1 / 3}>

          <Flex
            mb={5}
            alignItems={'center'}
          >
            <Text
              width={1 / 4}
              variant={'body1'}
              mr={3}
            >
              Email
            </Text>
            <Input
              placeholder={"Email"}
              variant={"default"}
              size={"medium"}
            />
          </Flex>

          <Flex
            alignItems={'center'}
          >
            <Text
              width={1 / 4}
              variant={'body1'}
              mr={3}
            >
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
    </Box>
  ))

  .add("TextArea", () => (
    <Box>
      <h3>TextArea Component</h3>
      <Flex
        mb={5}
      >
        <Box px={5} w={1 / 3}>
          <TextArea
            variant={"default"}
            size={"small"}
            placeholder={"Default small"}
          />
        </Box>
        <Box px={5} w={1 / 3}>
          <TextArea
            variant={"default"}
            size={"medium"}
            placeholder={"Default medium"}
          />
        </Box>
        <Box px={5} w={1 / 3}>
          <TextArea
            variant={"default"}
            size={"large"}
            placeholder={"Default large"}
          />
        </Box>
      </Flex>
    </Box>
  ))
  .add("Button", () => (
    <Box>
      <Box as={"h3"}>Button</Box>
      <ButtonBase>Button</ButtonBase>

      <Box as={'h3'}>
        Button
      </Box>
      <ButtonBase>
        Button
      </ButtonBase>

      <Box as={'h3'}>
        Button with css value
      </Box>
      <Box mb={5}>
        <ButtonBase variant={"default"} size={"small"}>
          default
        </ButtonBase>

        <ButtonBase variant={"default"} size={"medium"}>
          default
        </ButtonBase>
        <ButtonBase disabled variant={"default"} size={"medium"}>
          default
        </ButtonBase>

        <ButtonBase variant={"default"} size={"large"}>
          default
        </ButtonBase>
      </Box>
      <Box mb={5}>
        <ButtonBase variant={"primary"} size={"small"}>
          Primary
        </ButtonBase>
        <ButtonBase variant={"primary"} size={"medium"}>
          Primary
        </ButtonBase>
        <ButtonBase disabled variant={"primary"} size={"large"}>
          Primary
        </ButtonBase>
      </Box>

      <Box mb={5}>
        <ButtonBase variant={"secondary"} size={"small"}>
          Secondary
        </ButtonBase>
        <ButtonBase variant={"secondary"} size={"medium"}>
          Secondary
        </ButtonBase>
        <ButtonBase disabled variant={"secondary"} size={"medium"}>
          Secondary
        </ButtonBase>
        <ButtonBase variant={"secondary"} size={"large"}>
          Secondary
        </ButtonBase>
      </Box>

      <Box mb={5}>
        <ButtonBase variant={"error"} size={"small"}>
          Error
        </ButtonBase>
        <ButtonBase variant={"error"} size={"medium"}>
          Error
        </ButtonBase>
        <ButtonBase disabled variant={"error"} size={"medium"}>
          Error
        </ButtonBase>
        <ButtonBase variant={"error"} size={"large"}>
          Error
        </ButtonBase>
      </Box>

    </Box>
  ))

  .add("ButtonGroup", () => (
    <Box>

      <ButtonGroup>
        <ButtonBase variant={"secondary"} size={"large"}>
          Button 1
        </ButtonBase>
        <ButtonBase variant={"secondary"} size={"large"}>
          Button 2
        </ButtonBase>
        <ButtonBase variant={"secondary"} size={"large"}>
          Button 3
        </ButtonBase>
        <ButtonBase variant={"secondary"} size={"large"}>
          Button 4
        </ButtonBase>
      </ButtonGroup>
      <ButtonGroup vertical>
        <ButtonBase variant={"secondary"} size={"large"}>
          1
        </ButtonBase>
        <ButtonBase variant={"secondary"} size={"large"}>
          2
        </ButtonBase>
        <ButtonBase variant={"secondary"} size={"large"}>
          3
        </ButtonBase>
        <ButtonBase variant={"secondary"} size={"large"}>
          4
        </ButtonBase>
      </ButtonGroup>
    </Box>
  ))

  .add("Card", () => (
    <Box>
      <h3>Card</h3>
      <Flex flexDirection={'column'} flexWrap={'wrap'}>
        <Card
          fontSize={7}
          fontWeight='bold'
          p={5}
          width={[1, 1, 1 / 2]}
          my={5}
          bg={'white'}
          boxShadow={4}
          borderRadius={5}
        >
          Card
        </Card>
        <Card
          width={[1, 1, 1 / 2]}
          my={5}
          bg={'white'}
          boxShadow={4}
          borderRadius={5}
        >
          <Image
            width={1}
            src='https://source.unsplash.com/random/1280x720'
          />
          <Box
            fontSize={5}
            fontWeight='bold'
            p={5}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae eius ipsa nihil omnis pariatur
            perspiciatis quibusdam rem ullam unde. Animi, fugit magni provident qui quod sit vero voluptate voluptatem.
          </Box>
        </Card>
      </Flex>
    </Box>
  ))

  .add("Checkbox", () => (
    <Box>
      <h3>CheckboxBase</h3>
      <CheckboxBase/>

      <h3>Checkbox with label</h3>
      <Checkbox label={"Check me!"}/>

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
      <RadioButtonBase/>

      <h3>RadioButton with label</h3>
      <RadioButton label={"Check me!"}/>

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
      <SmallPreloader/>
    </Box>
  ))

  .add("Tab", () => (
    <Box width={'500px'}>
      <Box mb={5}>
        <Text variant={'h2'}>Tab</Text>
        <TabController>
          <Tabs>
            <ButtonBase variant={"default"} size={"medium"}>
              Tab 1
            </ButtonBase>
            <ButtonBase variant={"default"} size={"medium"}>
              Tab 2
            </ButtonBase>
          </Tabs>
          <TabContent>
            <Box>
              <Text>
                Content 1
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt maxime molestiae possimus ratione
                recusandae? Ab alias commodi dolores, ea eligendi esse, ex, facilis laudantium molestias natus
                praesentium
                tenetur voluptate voluptates!
              </Text>
            </Box>
            <Box>

              <Text>
                Content 2
              </Text>
              <Text mb={5}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt maxime molestiae possimus ratione
                recusandae? Ab alias commodi dolores, ea eligendi esse, ex, facilis laudantium molestias natus
                praesentium
                tenetur voluptate voluptates!
              </Text>
              <Text mb={5}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt maxime molestiae possimus ratione
                recusandae? Ab alias commodi dolores, ea eligendi esse, ex, facilis laudantium molestias natus
                praesentium
                tenetur voluptate voluptates!
              </Text>
            </Box>
          </TabContent>
        </TabController>
      </Box>
      <Box>
        <Text variant={'h2'}>Tab variant 2</Text>
        <TabController>
          <Tabs TabsWrapper={ButtonGroup}>
            <ButtonBase variant={"default"} size={"medium"}>
              Tab 1
            </ButtonBase>
            <ButtonBase variant={"default"} size={"medium"}>
              Tab 2
            </ButtonBase>
          </Tabs>
          <TabContent>
            <Box>
              <Text>
                Content 1
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt maxime molestiae possimus ratione
                recusandae? Ab alias commodi dolores, ea eligendi esse, ex, facilis laudantium molestias natus
                praesentium
                tenetur voluptate voluptates!
              </Text>
            </Box>
            <Box>

              <Text>
                Content 2
              </Text>
              <Text mb={5}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt maxime molestiae possimus ratione
                recusandae? Ab alias commodi dolores, ea eligendi esse, ex, facilis laudantium molestias natus
                praesentium
                tenetur voluptate voluptates!
              </Text>
              <Text mb={5}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt maxime molestiae possimus ratione
                recusandae? Ab alias commodi dolores, ea eligendi esse, ex, facilis laudantium molestias natus
                praesentium
                tenetur voluptate voluptates!
              </Text>
            </Box>
          </TabContent>
        </TabController>
      </Box>
    </Box>
  ))

  .add("Text", () => (
    <Box>
      <Text variant={'h1'}>
        h1. Heading
      </Text>
      <Text variant={'h2'}>
        h2. Heading
      </Text>
      <Text variant={'h3'}>
        h3. Heading
      </Text>
      <Text variant={'h4'}>
        h4. Heading
      </Text>
      <Text variant={'h5'}>
        h5. Heading
      </Text>
      <Text variant={'h6'}>
        h6. Heading
      </Text>
      <Text variant={'body1'}>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores assumenda aut culpa deleniti
        dolore dolores ducimus esse facere, illo impedit, in ipsa, ipsum laudantium odio saepe similique sint vitae!
      </Text>
      <Text variant={'body2'}>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores assumenda aut culpa deleniti
        dolore dolores ducimus esse facere, illo impedit, in ipsa, ipsum laudantium odio saepe similique sint vitae!
      </Text>
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
    <Box position={"relative"} width={"50%"} p={5}>
      <Box p={5}> 123</Box>
      <Badg position={"topRight"}>1</Badg>
    </Box>
  ));

storiesOf("Accordion", module)
  .addDecorator(story => {
    return (
      <StyledThemeProvider theme={StyleTheme}>{story()}</StyledThemeProvider>
    );
  })
  .add("Accordion", () => (
    <Box p={5}>
      <Accordion
        panels={[
          { title: "Add Edit Menus", subtitle: "Первый подраздел" },
          { title: "Resource Management", subtitle: "Второй подраздел" },
          { title: "Asset Management", subtitle: "Третий подраздел" },
          { title: "User Management", subtitle: "Четвертый подраздел" },
          { title: "Account Management", subtitle: "Пятый подраздел " }
        ]}
      />
    </Box>
  ));
