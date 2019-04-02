import * as React from "react";
import index$4 from "code-artel-ui-lib";

const onChange = text => {
  console.log(`Clicked ${text}`);
};

export const App = () => {
  const {
    Box,
    ButtonBase,
    Flex,
    Input,
    CheckboxBase,
    RadioCheckboxBase,
    RadioCheckbox,
    RadioCheckboxGroup,
    TabBar,
    TabBarItem,
    Tooltip,
    CheckboxGroup
  } = index$4;

  return (
    <div>
      <Box p={2}>
        <Box
          p={1}
          border={"1px solid black"}
          borderRadius={"5px"}
          width={"70px"}
        >
          Box
        </Box>
      </Box>

      <Box p={2}>
        <ButtonBase
          variant={"default"}
          size={"medium"}
          p={2}
          border={"1px solid black"}
          borderRadius={"5px"}
        >
          ButtonBase
        </ButtonBase>
      </Box>

      <Box p={2}>
        <Flex
          p={5}
          border={"1px solid black"}
          borderRadius={"50px"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"10%"}
        >
          Flex
        </Flex>
      </Box>

      <Box p={2}>
        <Input placeholder={"MICHA"} variant={"default"} />
      </Box>

      <Box p={2}>
        <CheckboxBase onChange={() => onChange("checkbox")} />
      </Box>

      <Box p={2}>
        <CheckboxGroup
          options={[
            {
              labelProp: "foo-label",
              onChange: () => onChange("checkboxGroup"),
              valueProp: "foo-name"
            },
            {
              label: "label",
              onChange: () => onChange("checkboxGroup1"),
              value: "value"
            }
          ]}
        />
      </Box>

      <Box p={2}>
        <RadioCheckboxBase
          id={"hi"}
          name={"hi"}
          onChange={() => onChange("RadioCheckboxBase1")}
        />
        <RadioCheckboxBase
          id={"hi"}
          name={"hi"}
          onChange={() => onChange("RadioCheckboxBase")}
        />
      </Box>

      <Box p={2}>
        <RadioCheckbox
          id={"his"}
          name={"his"}
          onChange={() => onChange("RadioCheckbox")}
          label={"RadioCheckbox"}
        />
      </Box>

      <Box p={2}>
        <RadioCheckboxGroup
          id={"hid"}
          name={"hid"}
          onChange={() => onChange("RadioCheckboxGroup")}
          label={"RadioCheckboxGroup"}
        />
      </Box>

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
            alt={"foo"}
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
