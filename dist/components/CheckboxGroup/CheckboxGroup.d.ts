import * as React from "react";
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
export declare class CheckboxGroup extends React.Component<ICheckboxGroup> {
    static defaultProps: {
        labelProp: "foo";
    };
    onChange: (value: any) => void;
    checkStatusCheckbox: (value: any) => boolean;
    render(): JSX.Element;
}
export default CheckboxGroup;
