import * as React from "react";
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
export declare class CheckboxGroup extends React.Component<ICheckboxBaseProps> {
    render(): JSX.Element;
}
export default CheckboxGroup;
