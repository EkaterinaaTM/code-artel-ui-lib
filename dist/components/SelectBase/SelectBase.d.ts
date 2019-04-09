import * as React from "react";
export interface ISelectBase {
    placeholder?: any;
    options?: any;
    isLoading?: any;
    disabled?: any;
    input?: any;
    value?: any;
    name?: any;
}
export interface ISelectBaseState {
    selectedOption?: any;
}
export declare class SelectBase extends React.Component<ISelectBase, ISelectBaseState> {
    state: {
        selectedOption: null;
    };
    static defaultProps: {
        options: never[];
        placeholder: string;
    };
    render(): JSX.Element;
}
export default SelectBase;
