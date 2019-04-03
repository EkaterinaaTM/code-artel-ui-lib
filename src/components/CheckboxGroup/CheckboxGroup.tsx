import * as React from "react";

/** View  */
import Checkbox from "../Checkbox/Checkbox";

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
    labelProp: "foo";
  };

  onChange = (value: any) => {
    let propsValue = this.props.value;
    const valueIndex = propsValue.findIndex((item: any) => item === value);
    // console.log("RadioButtonGroup onChange", value, this.props.value);

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
      checked,
      input,
      value,
      onChange,
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
                  name={`CheckboxGroup-${index}`}
                  value={item[valueProp]}
                  label={item[labelProp]}
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
