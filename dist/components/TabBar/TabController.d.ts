import * as React from "react";
export interface ITabController {
    defaultActiveTab?: any;
    activeTab?: any;
    hideWhenReClicking?: any;
    backdrop?: any;
    isActive?: any;
    ClickContentCloseTab?: any;
    [propName: string]: any;
}
/**
 * The component tab controller
 * @example ./TabController.example.md
 */
declare class TabController extends React.Component<ITabController> {
    static defaultProps: {
        defaultActiveTab: number;
        hideWhenReClicking: boolean;
        backdrop: boolean;
        ClickContentCloseTab: boolean;
    };
    state: {
        activeTab: any;
    };
    readonly initialState: {
        activeTab: any;
    };
    /**
     * @desc change tab by index
     * @param {number} index
     * @memberof Controller
     */
    toggleTab: (index: any) => void;
    render(): JSX.Element | null;
}
export default TabController;
