import * as React from "react";

/** View  */
import Flex from "../Flex/Flex";
import CheckboxBase from "../CheckboxBase/CheckboxBase";

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
      labelProp,
      valueProp,
      disabled,
      checked,
      defaultChecked,
      ...rest
    } = this.props;

    const setLabelForObject = (props?: string) => {
      return options.map((item: any) => {
        // console.log(item);

        const foo = Object.keys(item).map(items => {
          // console.log(items);
          let obj = {};
          const newKeys = props || items;
          obj = { [newKeys]: item[items], ...obj };

          // if (items === "value") {
          //   const newKeys = props || items;
          //   obj = { [newKeys]: item[items] };
          // }
          // console.log(obj);
          return obj;
          //     const newKeys = props || items;
          //     const obj = { [newKeys]: options[items] };
          //     return Object.assign({}, obj);
        });

        const newTab = foo.reduce((a, b) => {
          // console.log(a, b);
          return Object.assign({}, a, b);
        });
        // console.log(foo);
        // console.log(newTab);
        return newTab;
      });
    };

    return (
      <Flex>
        {Array.isArray(options) &&
          options.map(
            (item: any, index: any): any => {
              // console.log(111, setLabelForObject(item.labelProp));

              return (
                <Flex flexDirection={"column"} key={`CheckboxGroup-${index}`}>
                  <label>{item.label}</label>
                  <CheckboxBase
                    name={`CheckboxBase-${index}`}
                    value={item.value}
                    input={input}
                    getOptionLabel={setLabelForObject(item.labelProp)}
                    // getOptionValue={setLabelForObject(item.valueProp)}
                    disabled={disabled}
                    checked={checked}
                    defaultChecked={defaultChecked}
                    onChange={item.onChange}
                    {...rest}
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
