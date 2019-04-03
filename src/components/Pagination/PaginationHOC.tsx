import * as React from "react";
import { Query } from "react-apollo";

export interface IPaginationPageHOC {
  pageNumber: any;
  pageSize: any;
  queryName: any;
  query: any;
  queryVariables: any;
  children: any;
}

export class PaginationPageHOC extends React.Component<IPaginationPageHOC> {
  static defaultProps = {
    pageSize: 10,
    pageNumber: 1
  };

  state = this.initialState;

  get initialState() {
    const { pageNumber, pageSize } = this.props;
    return {
      pageNumber,
      pageSize
    };
  }

  reFetchAfterSetState = (fetchMore: any) => () => {
    const { pageSize, pageNumber } = this.state;
    const { queryName, query, queryVariables } = this.props;
    fetchMore({
      query: query,
      variables: {
        ...queryVariables,
        pageSize: pageSize,
        pageNumber: pageNumber
      },
      updateQuery: ({ fetchMoreResult }: any) => {
        if (!fetchMoreResult) return { [queryName]: [] };
        return fetchMoreResult;
      }
    });
  };

  prevPage = (fetchMore: any) => {
    const { pageNumber } = this.state;
    try {
      if (pageNumber >= 1) {
        this.setState(
          state => ({
            ...state,
            pageNumber: pageNumber - 1
          }),
          this.reFetchAfterSetState(fetchMore)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  nextPage = (fetchMore: any) => {
    const { pageNumber } = this.state;
    try {
      this.setState(
        state => ({
          ...state,
          pageNumber: pageNumber + 1
        }),
        this.reFetchAfterSetState(fetchMore)
      );
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { query, queryVariables, queryName } = this.props;
    const { pageNumber, pageSize } = this.state;

    return (
      <Query
        skip={!query}
        variables={{
          ...queryVariables,
          pageSize: pageSize,
          pageNumber: pageNumber
        }}
        query={query}
      >
        {({ loading, error, data, fetchMore }: any) => {
          const Children = this.props.children;
          return (
            <Children
              data={data}
              loading={loading}
              error={error}
              pagination={{
                pageSize: pageSize,
                pageNumber: pageNumber,
                nextPage: () => {
                  this.nextPage(fetchMore);
                },
                disabledToNextPage:
                  loading ||
                  (data[queryName] && data[queryName].length === 0) ||
                  (data[queryName] && data[queryName].length < pageSize),
                prevPage: () => {
                  this.prevPage(fetchMore);
                },
                disabledToPrevPage: pageNumber - 1 < 1
              }}
            />
          );
        }}
      </Query>
    );
  }
}

export default PaginationPageHOC;
