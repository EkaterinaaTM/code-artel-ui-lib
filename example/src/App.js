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
    RadioCheckbox
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
    </div>
  );
};

export default App;
