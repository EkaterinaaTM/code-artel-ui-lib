import * as React from "react";
import styled from "styled-components";

/** View */
import { Box } from "../Box/Box";

const Input = styled(Box)``;

export interface IRadioCheckbox {
  id?: string;
  checked?: boolean;
  name?: string;
  input?: any;
  onChange?: any;
}

export class RadioCheckboxBase extends React.Component<IRadioCheckbox> {
  render() {
    const { id, checked, name, input, onChange } = this.props;
    return (
      <Input
        id={`radiocheckbox-${id}`}
        checked={checked}
        name={name}
        {...input}
        type={"radio"}
        as={"input"}
        onClick={onChange}
      />
    );
  }
}

// export const RadioCheckboxBase = (props: IRadioCheckbox) => {
//   const { id, checked, name, input } = props;
//   return (
//     <Input
//       id={`radiocheckbox-${id}`}
//       checked={checked}
//       name={name}
//       {...input}
//       type={"radio"}
//       as={"input"}
//       onChange={(event: { target: { value: any } }) => {
//         console.log(1);
//         return input.onChange(event.target.value);
//       }}
//     />
//   );
// };

// RadioCheckboxBase.defaultProps = {};

export default RadioCheckboxBase;
