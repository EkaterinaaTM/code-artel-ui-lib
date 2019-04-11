import * as React from "react";

/** View  */
import RadioButton from "../RadioButton/RadioButton";

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
    labelProp: "foo";
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
      onChange,
      ...rest
    } = this.props;
    // console.log("RadioButtonGroup this.props", this.props);

    return (
      <>
        {Array.isArray(options) &&
          options.map(
            (item: any, index: any): any => {
              return (
                <RadioButton
                  name={name}
                  id={id}
                  value={item.value || item[valueProp]}
                  label={item.label || item[labelProp]}
                  disabled={disabled}
                  checked={checked}
                  // defaultChecked={defaultChecked}
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
