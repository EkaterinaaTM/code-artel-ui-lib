export interface IButtonBase {
    variant: string;
    size: string;
    [propName: string]: any;
}
/**
 * Компонента обычная кнопка
 * @example ./ButtonBase.example.md
 */
export declare const ButtonBase: import("styled-components").StyledComponent<"div", any, import("../Box/Box").IBox & IButtonBase, never>;
export default ButtonBase;
