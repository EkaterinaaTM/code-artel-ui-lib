import * as React from "react";
export interface ITabs {
    toggleTab?: any;
    activeTab?: any;
    children?: any;
}
export declare class Tabs extends React.Component<ITabs> {
    static defaultProps: {};
    /**
     * @returns
     * @memberof Tabs
     */
    render(): JSX.Element | null;
}
export default Tabs;
