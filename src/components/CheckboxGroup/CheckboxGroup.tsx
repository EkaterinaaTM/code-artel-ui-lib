import * as React from 'react';

/** View  */
import Flex from '../Flex/Flex';
import CheckboxBase from '../CheckboxBase/CheckboxBase';

export interface ICheckboxBaseProps {
  options?: any;
  labelProp?: string;
  valueProp?: string;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  input?: any;
  [propName: string]: any;
}

export class CheckboxGroup extends React.Component<ICheckboxBaseProps> {
  render() {
    const {
      options,
      input,
      // labelProp,
      // valueProp,
      disabled,
      checked,
      defaultChecked
    } = this.props;

    return (
      <Flex>
        {options &&
          options.map(
            (item: any, index: any): any => {
              return (
                <Flex flexDirection={'column'} key={`CheckboxGroup-${index}`}>
                  <label>{item.label}</label>
                  <CheckboxBase
                    name={`CheckboxBase-${index}`}
                    value={item.value}
                    input={input}
                    // valueProp={valueProp}
                    // labelProp={labelProp}
                    disabled={disabled}
                    checked={checked}
                    defaultChecked={defaultChecked}
                  />
                </Flex>
              );
            }
          )}
      </Flex>
    );
  }
}

export default CheckboxGroup;
