import * as React from "react";
export interface IRadioCheckboxGroup {
    checked?: boolean;
    label?: string;
    onChange?: any;
    [propName: string]: any;
}
export declare class RadioCheckboxGroup extends React.Component<IRadioCheckboxGroup> {
    render(): JSX.Element;
}
export default RadioCheckboxGroup;
