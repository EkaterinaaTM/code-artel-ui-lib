import * as React from "react";
import index$4 from "code-artel-ui-lib";
import AutosizeInput from "code-artel-ui-lib";

export const App = () => {
  const { Box, ButtonBase, Flex, Input, CheckboxBase } = index$4;

  console.log(1, AutosizeInput);
  console.log(2, index$4);

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
      <CheckboxBase />
    </div>
  );
};

export default App;
