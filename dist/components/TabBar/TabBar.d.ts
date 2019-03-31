import * as React from "react";
export interface IgetChildrenLabels {
    map(arg0: ({ props }: {
        props: any;
    }) => any): any;
    children?: any;
}
export interface IsetActiveTab {
    activeTab?: any;
}
export interface IMap {
    child?: React.ReactNode;
}
declare class TabBar extends React.Component {
    state: {
        activeTab: null;
    };
    componentDidMount(): void;
    getChildrenLabels: (children: IgetChildrenLabels) => any;
    setActiveTab: (activeTab: IsetActiveTab) => void;
    renderTabs: () => any;
    render(): JSX.Element;
}
export default TabBar;
