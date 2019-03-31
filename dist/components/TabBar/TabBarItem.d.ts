/// <reference types="react" />
export interface ITabBarItem {
    children?: any;
    label?: string;
    activeTab?: any;
}
declare const TabBarItem: ({ children, label, activeTab, ...attrs }: ITabBarItem) => JSX.Element;
export default TabBarItem;
