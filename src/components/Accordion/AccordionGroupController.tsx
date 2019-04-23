import * as React from 'react';


interface IAccordionGroupControllerProps {
  isActiveAccordion: number,

  [propName: string]: any;
}

interface IAccordionGroupControllerState {
  isActiveAccordion: number,

  [propName: string]: any;
}

export class AccordionGroupController extends React.Component<IAccordionGroupControllerProps, IAccordionGroupControllerState> {


  static defaultProps: IAccordionGroupControllerProps = {
    isActiveAccordion: -1,
  };

  state: IAccordionGroupControllerState = this.initialState;

  get initialState() {
    return {
      oneActiveTab: false,
      isActiveAccordion: this.props.isActiveAccordion
    };
  }

  toggleAccordion = (index: number): void => {
    this.setState((prevState: IAccordionGroupControllerState): IAccordionGroupControllerState => {
      if(index === prevState.isActiveAccordion ){
        return {
          ...prevState,
          isActiveAccordion: -1
        }
      }
      return {
        ...prevState,
        isActiveAccordion: index
      }
    });
  }

  render() {
    const {children} = this.props;
    const {isActiveAccordion} = this.state;

    if (!children) {
      return null;
    }

    return React.Children.map(
      children,
      (child: any, index: any) => {
        return React.cloneElement(child, {
          isActiveAccordion: isActiveAccordion === index,
          key: index,
          toggleAccordion: () => this.toggleAccordion(index),
          index
        });
      }
    );

  }

}

export default AccordionGroupController;
