export interface IRadioButtonBase {
    id?: string;
    checked?: boolean;
    name?: string;
    input?: any;
    onChange?: any;
    value: string;
    defaultChecked?: boolean;
}
export declare const RadioButtonBase: (props: IRadioButtonBase) => JSX.Element;
export default RadioButtonBase;
