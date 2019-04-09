import * as React from "react";
export interface ITooltipBase {
    isActive?: any;
    position?: any;
    warning?: any;
    ClickContentCloseTab?: any;
}
/**
 * Компонент тултипа (Tooltip)
 * @example ./TooltipBase.example.md
 */
export declare class TooltipBase extends React.Component<ITooltipBase> {
    static defaultProps: {
        warning: string;
        position: string;
        isActive: boolean;
    };
    shouldComponentUpdate(nextProps: any): boolean;
    render(): JSX.Element;
}
export default TooltipBase;
