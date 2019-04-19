import * as React from "react";
import styled from "styled-components";

const Backdrop: any = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background-color: transparent;
  ${(props: any) =>
    props.backdrop && props.isActive !== null
      ? "display:block;"
      : "display:none;"}
`;

export interface ITabController {
  defaultActiveTab?: any;
  activeTab?: any;
  hideWhenReClicking?: any;
  backdrop?: any;
  isActive?: any;
  ClickContentCloseTab?: any;
  [propName: string]: any;
}

/**
 * The component tab controller
 * @example ./TabController.example.md
 */
class TabController extends React.Component<ITabController> {
  static defaultProps = {
    defaultActiveTab: 0,
    hideWhenReClicking: false,
    backdrop: false,
    ClickContentCloseTab: false
  };

  state = this.initialState;

  get initialState() {
    return {
      activeTab: this.props.defaultActiveTab
    };
  }

  /**
   * @desc change tab by index
   * @param {number} index
   * @memberof Controller
   */
  toggleTab = (index: any) => {
    this.setState((prevState: any) => {
      if (prevState.activeTab !== index) {
        return {
          activeTab: index
        };
      } else if (
        this.props.hideWhenReClicking &&
        prevState.activeTab === index
      ) {
        /**
         * @desc need for correct work
         */
        return {
          activeTab: null
        };
      }
      /**
       * @desc need for correct work
       */
      return prevState.activeTab;
    });
  };

  render() {
    const { children, backdrop, ClickContentCloseTab } = this.props;
    const { activeTab } = this.state;

    if (!children) {
      return null;
    }
    const childrenWithProps = React.Children.map(children, (child: any) =>
      React.cloneElement(child, {
        activeTab,
        toggleTab: this.toggleTab,
        ClickContentCloseTab
      })
    );

    return (
      <>
        <Backdrop
          backdrop={backdrop}
          isActive={activeTab}
          onClick={() => this.toggleTab(null)}
        />
        {childrenWithProps}
      </>
    );
  }
}

export default TabController;
