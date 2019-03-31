import * as React from 'react';

/** View  */
import RadioCheckboxBase from '../RadioCheckboxBase/RadioCheckboxBase';
import Flex from '../Flex/Flex';

export interface RadioCheckboxGroupProps {
  label?: string;
  name?: string;
  labelProp?: string;
  checked?: boolean;
  [propName: string]: any;
}

export class RadioCheckboxGroup extends React.Component<
  RadioCheckboxGroupProps
> {
  render() {
    const { label, labelProp, checked } = this.props;

    return (
      <>
        {label && <label>{label || labelProp}</label>}
        <Flex flexDirection={'column'}>
          <RadioCheckboxBase checked={checked} name={`RadioCheckboxBase`} />
        </Flex>
      </>
    );
  }
}

export default RadioCheckboxGroup;
