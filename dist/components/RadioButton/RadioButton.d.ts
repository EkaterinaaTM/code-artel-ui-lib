export interface IRadioButton {
    checked?: boolean;
    label?: string;
    name: string;
    onChange: any;
    id?: string;
    value: any;
    [propName: string]: any;
}
export declare const RadioButton: (props: IRadioButton) => JSX.Element;
export default RadioButton;
