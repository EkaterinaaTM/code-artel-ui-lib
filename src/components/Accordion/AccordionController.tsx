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

export interface IAccordionController {
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
 * @example ./AccordionController.example.md
 */

class AccordionController extends React.Component<IAccordionController> {
  static defaultProps = {
    defaultActiveTab: false,
    hideWhenReClicking: false,
    backdrop: false
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
      if (index % 2 === 0 || index === 0) {
        return (prevState.activeTab = !this.state.activeTab);
      }
    });
  };

  render() {
    const { children, backdrop } = this.props;
    const { activeTab } = this.state;

    if (!children) {
      return null;
    }

    const childrenWithProps = React.Children.map(
      children,
      (child: any, index: any) => {
        return React.cloneElement(child, {
          activeTab,
          toggleTab: () => this.toggleTab(index),
          index
        });
      }
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

export default AccordionController;
