import * as React from 'react';
export interface RadioCheckboxGroupProps {
    label?: string;
    name?: string;
    labelProp?: string;
    checked?: boolean;
    [propName: string]: any;
}
export declare class RadioCheckboxGroup extends React.Component<RadioCheckboxGroupProps> {
    render(): JSX.Element;
}
export default RadioCheckboxGroup;
