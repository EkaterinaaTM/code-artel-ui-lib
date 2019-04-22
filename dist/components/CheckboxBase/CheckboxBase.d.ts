export interface ICheckbox {
    value?: any;
    id?: string;
    name?: string;
    disabled?: boolean;
    checked?: boolean;
    [propName: string]: any;
}
export declare const CheckboxBase: (props: ICheckbox) => JSX.Element;
export default CheckboxBase;
