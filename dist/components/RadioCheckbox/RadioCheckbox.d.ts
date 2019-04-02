import * as React from "react";
export interface IRadioCheckbox {
    checked?: boolean;
    label?: string;
    [propName: string]: any;
}
export declare class RadioCheckbox extends React.Component<IRadioCheckbox> {
    render(): JSX.Element;
}
export default RadioCheckbox;
