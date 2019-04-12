import * as React from "react";

/** View  */
import {Checkbox as _Checkbox} from "../Checkbox/Checkbox";

export interface ICheckboxGroup {
  labelProp: string;
  valueProp: string;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  options: IOptions[];
  input: any;
  [propName: string]: any;
}

export interface IOptions {
  disabled?: boolean;
  [propName: string]: any;
}

export class CheckboxGroup extends React.Component<ICheckboxGroup> {
  static defaultProps: {
    valueProp: 'value',
    labelProp: 'label',
  };

  onChange = (value: any) => {
    console.log(1, value);
    let propsValue = this.props.value;
    const valueIndex = propsValue.findIndex((item: any) => item === value);

    if (valueIndex > -1) {
      propsValue.splice(valueIndex, 1);
    } else {
      propsValue.push(value);
    }

    this.props.onChange(propsValue);
  };

  checkStatusCheckbox = (value: any) => {
    if (
      Array.isArray(this.props.value) &&
      this.props.value.findIndex((item: any) => item === value) > -1
    ) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const {
      options,
      labelProp,
      valueProp,
      disabled,
      name,
      input,
      Checkbox = _Checkbox,
      ...rest
    } = this.props;
    // console.log("CheckboxGroup this.props", this.props);

    return (
      <>
        {Array.isArray(options) &&
          options.map(
            (item: any, index: any): any => {
              return (
                <Checkbox
                  name={name}
                  id={`CheckboxGroup-${index}`}
                  value={item.value || item[valueProp]}
                  label={item.label || item[labelProp]}
                  disabled={disabled}
                  checked={this.checkStatusCheckbox(item[valueProp])}
                  onChange={this.onChange}
                  key={`CheckboxGroup-${index}`}
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

export default CheckboxGroup;
