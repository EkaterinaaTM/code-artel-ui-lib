import * as React from "react";
export interface ITabs {
    toggleTab?: boolean;
    activeTab?: number;
    children?: any;
    TabsWrapper: any;
}
export declare class Tabs extends React.Component<ITabs> {
    static defaultProps: {
        TabsWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
    };
    /**
     * @returns
     * @memberof Tabs
     */
    render(): JSX.Element | null;
}
export default Tabs;
