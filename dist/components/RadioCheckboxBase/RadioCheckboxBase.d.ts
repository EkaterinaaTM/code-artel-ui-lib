import * as React from "react";
export interface IRadioCheckbox {
    id?: string;
    checked?: boolean;
    name?: string;
    input?: any;
}
export declare class RadioCheckboxBase extends React.Component<IRadioCheckbox> {
    render(): JSX.Element;
}
export default RadioCheckboxBase;
