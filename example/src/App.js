import * as React from "react";
import index$4 from "code-artel-ui-lib";

export const App = () => {
  const {
    Box,
    ButtonBase,
    Flex,
    Input,
    CheckboxBase,
    RadioCheckboxBase,
    RadioCheckbox,
    TabBar,
    TabBarItem,
    Tooltip
  } = index$4;

  return (
    <div>
      <Box p={5} border={"1px solid black"} borderRadius={"5px"}>
        Box
      </Box>
      <ButtonBase
        variant={"default"}
        size={"medium"}
        p={2}
        border={"1px solid black"}
        borderRadius={"5px"}
      >
        ButtonBase
      </ButtonBase>
      <Flex
        p={5}
        border={"1px solid black"}
        borderRadius={"50px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        Flex
      </Flex>
      <Input placeholder={"MICHA"} variant={"default"} />
      <div>
        <CheckboxBase />
      </div>
      <div>
        <RadioCheckboxBase id={"hi"} name={"hi"} />
        <RadioCheckboxBase id={"hi"} name={"hi"} />
      </div>
      <div>
        <RadioCheckbox />
      </div>

      <TabBar>
        <TabBarItem label="Simple text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </TabBarItem>
        <TabBarItem label="Image">
          <img
            src="https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1"
            width={50}
            height={50}
          />
        </TabBarItem>
      </TabBar>

      <Tooltip
        position="left"
        content="Simple small text"
        style={{ width: "120px" }}
      >
        Test
      </Tooltip>
    </div>
  );
};

export default App;
