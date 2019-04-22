import * as React from "react";
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
export declare class RadioButtonGroup extends React.Component<IRadioButtonGroup> {
    static defaultProps: {
        valueProp: "value";
        labelProp: "label";
    };
    onChange: (value: any) => void;
    render(): JSX.Element;
}
export default RadioButtonGroup;
