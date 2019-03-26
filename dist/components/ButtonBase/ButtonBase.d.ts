/** Enum constants */
import { ButtonEnum } from "../../styles/variants/ButtonVariant";
export interface IButtonBase {
    variant?: ButtonEnum;
    size?: string;
    [propName: string]: any;
}
/**
 * Компонента обычная кнопка
 * @example ./ButtonBase.example.md
 */
export declare const ButtonBase: import("styled-components").StyledComponent<"div", any, import("../../../../../../MICHA/\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430/code-artel-ui-lib/src/components/Box/Box").IBox & IButtonBase, never>;
export default ButtonBase;
