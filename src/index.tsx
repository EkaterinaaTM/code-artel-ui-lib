import * as React from "react";
// import { Field, FieldRenderProps } from "react-final-form";

import Box from "./components/Box/Box";
import ButtonBase from "./components/ButtonBase/ButtonBase";
import Flex from "./components/Flex/Flex";
import Input from "./components/Input/Input";
// import CheckboxBase from "./components/CheckboxBase/CheckboxBase";

// import TextArea from "./components/TextArea/TextArea";
// import SelectBase from "./components/SelectBase/SelectBase";
// import RadioCheckboxBase from "./components/RadioCheckboxBase/RadioCheckboxBase";

export interface Props {
  size?: string;
  variant?: string;
}

export class ExampleComponent extends React.Component<Props> {
  render() {
    return (
      <div>
        <Box>Box</Box>
        <ButtonBase size={"large"}>Button</ButtonBase>
        <Flex>Flex</Flex>
        <Input variant={"default"} />
      </div>
    );
  }
}

export default ExampleComponent;
