import * as React from "react";
/**
 * The content of the TabContent
 * @example ./TabContent.example.md
 */
export interface ITabContent {
    toggleTab?: any;
    activeTab?: any;
    children?: any;
    ClickContentCloseTab?: any;
}
export declare class TabContent extends React.Component<ITabContent> {
    static defaultProps: {};
    /**
     * @returns
     * @memberof Tabs
     */
    render(): JSX.Element | null;
}
export default TabContent;
