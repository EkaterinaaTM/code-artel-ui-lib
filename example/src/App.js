import * as React from "react";
import index$4 from "code-artel-ui-lib";

export const App = () => {
  const { Box, ButtonBase, Flex, Input, CheckboxBase } = index$4;
  console.log(index$4);
  return (
    <div>
      <Box>Box</Box>
      <ButtonBase variant={"default"} size={"medium"}>
        ButtonBase
      </ButtonBase>
      <Flex>Flex</Flex>
      <Input placeholder={"MICHA"} />
      <CheckboxBase />
    </div>
  );
};

export default App;
