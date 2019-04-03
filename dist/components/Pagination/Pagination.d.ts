import * as React from "react";
export interface IPaginationPage {
    pagination?: any;
    data?: any;
    loading?: any;
    Consumer?: any;
    src?: any;
    alt?: any;
}
export declare class PaginationPage extends React.Component<IPaginationPage> {
    static defaultProps: {
        data: never[];
    };
    render(): JSX.Element;
}
export default PaginationPage;
