import * as React from "react";
export interface IPaginationPageHOC {
    pageNumber: any;
    pageSize: any;
    queryName: any;
    query: any;
    queryVariables: any;
    children: any;
}
export declare class PaginationPageHOC extends React.Component<IPaginationPageHOC> {
    static defaultProps: {
        pageSize: number;
        pageNumber: number;
    };
    state: {
        pageNumber: any;
        pageSize: any;
    };
    readonly initialState: {
        pageNumber: any;
        pageSize: any;
    };
    reFetchAfterSetState: (fetchMore: any) => () => void;
    prevPage: (fetchMore: any) => void;
    nextPage: (fetchMore: any) => void;
    render(): JSX.Element;
}
export default PaginationPageHOC;
