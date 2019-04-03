/// <reference types="react" />
export interface ICheckbox {
    label?: string;
    id?: string;
    name?: string;
    disabled?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    [propName: string]: any;
}
export declare const Checkbox: (props: ICheckbox) => JSX.Element;
export default Checkbox;
