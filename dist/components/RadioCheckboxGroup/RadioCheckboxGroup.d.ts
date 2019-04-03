import * as React from "react";
export interface IRadioCheckboxGroup {
    checked?: boolean;
    label: string;
    value: string;
    labelProp: string;
    valueProp: string;
    input: any;
    onChange?: any;
    options: IOptions[];
    defaultChecked?: any;
    [propName: string]: any;
}
export interface IOptions {
    disabled?: boolean;
    [propName: string]: any;
}
export declare class RadioCheckboxGroup extends React.Component<IRadioCheckboxGroup> {
    static defaultProps: {
        labelProp: "foo";
    };
    onChange: (value: any) => void;
    render(): JSX.Element;
}
export default RadioCheckboxGroup;
