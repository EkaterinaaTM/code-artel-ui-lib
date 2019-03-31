/// <reference types="react" />
export interface ITabBarNav {
    navLabel?: string;
    onChangeActiveTab?: any;
}
declare const TabBarNav: ({ navLabel, onChangeActiveTab }: ITabBarNav) => JSX.Element;
export default TabBarNav;
