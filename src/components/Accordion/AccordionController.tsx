import * as React from "react";

export interface IAccordionControllerProps {
  isActive: boolean;
  index: number;
  toggleAccordion(index: number): any;
  [propName: string]: any;
}

export interface IAccordionControllerState {
  isActive: boolean;
  [propName: string]: any;
}

/**
 * The component tab controller
 * @example ./AccordionController.example.md
 */

class AccordionController extends React.Component<
  IAccordionControllerProps,
  IAccordionControllerState
> {
  static defaultProps = {
    isActive: false,
    toggleAccordion: null
  };

  state: IAccordionControllerState = this.initialState;

  get initialState() {
    return {
      isActive: this.props.isActive
    };
  }

  /**
   * @desc change tab by index
   * @memberof Controller
   */
  toggleAccordion = (index: number): void => {
    const { toggleAccordion } = this.props;

    if (toggleAccordion) {
      toggleAccordion(index);
    }
    this.setState(
      (prevState: IAccordionControllerState): IAccordionControllerState => {
        return {
          ...prevState,
          isActive: !prevState.isActive
        };
      }
    );
  };

  render() {
    const { children, isActiveAccordion } = this.props;
    const { isActive } = this.state;
    // console.log(this);
    if (!children) {
      return null;
    }

    return React.Children.map(children, (child: any, index: any) => {
      return React.cloneElement(child, {
        isActive:
          isActiveAccordion !== undefined ? isActiveAccordion : isActive,
        key: index,
        toggleAccordion: () => this.toggleAccordion(index),
        index
      });
    });
  }
}

export default AccordionController;
