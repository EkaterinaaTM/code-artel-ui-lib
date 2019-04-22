export interface IRadioButtonBase {
    id?: string;
    checked?: boolean;
    className?: string;
    name?: string;
    input?: any;
    onChange?: any;
    value: string;
    defaultChecked?: boolean;
    [propName: string]: any;
}
export declare const RadioButtonBase: (props: IRadioButtonBase) => JSX.Element;
export default RadioButtonBase;
