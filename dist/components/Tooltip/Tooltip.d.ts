import * as React from "react";
export declare class Tooltip extends React.Component {
    state: {
        visible: boolean;
    };
    show: () => void;
    hide: () => void;
    setVisibility: (visible: boolean) => void;
    render(): JSX.Element;
}
export default Tooltip;
