import * as React from "react";

/** View  */
import {RadioButton as _RadioButton} from "../RadioButton/RadioButton";

export interface IRadioButtonGroup {
  checked?: boolean;
  label?: string;
  labelProp: string;
  valueProp: string;
  input: any;
  options: IOptions[];
  defaultChecked?: any;
  name: string;
  id: string;
  [propName: string]: any;
}

export interface IOptions {
  disabled?: boolean;
  [propName: string]: any;
}

export class RadioButtonGroup extends React.Component<IRadioButtonGroup> {

  static defaultProps: {
    valueProp: 'value',
    labelProp: 'label',
  };


  onChange = (value: any) => {
    this.props.onChange(value);
  };

  render() {
    const {
      options,
      labelProp,
      valueProp,
      disabled,
      checked,
      input,
      value,
      name,
      id,
      // defaultChecked,
      RadioButton = _RadioButton,
      ...rest
    } = this.props;

    return (
      <>
        {Array.isArray(options) &&
          options.map(
            (item: any, index: any): any => {
              return (
                <RadioButton
                  name={name}
                  id={`${id}-${index}`}
                  value={item.value || item[valueProp]}
                  label={item.label || item[labelProp]}
                  disabled={disabled}
                  checked={checked}
                  onChange={this.onChange}
                  key={`RadioButtonGroup-${index}`}
                  {...input}
                  {...rest}
                />
              );
            }
          )}
      </>
    );
  }
}

export default RadioButtonGroup;
