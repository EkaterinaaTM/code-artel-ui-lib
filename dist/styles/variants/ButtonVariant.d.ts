export declare enum ButtonEnum {
    default = "default",
    primary = "primary",
    secondary = "secondary",
    error = "error"
}
export interface IButton {
    default: any;
    primary?: any;
    secondary?: any;
    error?: any;
}
export declare const ButtonVariant: (theme: any) => IButton;
export default ButtonVariant;
