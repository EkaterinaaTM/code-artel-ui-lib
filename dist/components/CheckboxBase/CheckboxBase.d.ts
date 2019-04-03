/// <reference types="react" />
export interface ICheckboxs {
    value?: any;
    id?: string;
    name?: string;
    disabled?: boolean;
    checked?: boolean;
    [propName: string]: any;
}
export declare const CheckboxBase: (props: ICheckboxs) => JSX.Element;
export default CheckboxBase;
