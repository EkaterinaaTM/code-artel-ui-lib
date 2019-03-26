/// <reference types="react" />
export interface ICheckbox {
    id?: string;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    defaultChecked?: boolean;
    [propName: string]: any;
}
export declare const CheckboxBase: (props: ICheckbox) => JSX.Element;
export default CheckboxBase;
