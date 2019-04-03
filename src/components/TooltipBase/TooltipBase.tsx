import * as React from "react";
import styled from "styled-components";
import {
  Wrapper,
  OutsideTriangle,
  InsideTriangle,
  Warning
} from "./TooltipBaseStyled";

const Relative = styled.div`
  position: relative;
`;

export interface ITooltipBase {
  isActive?: any;
  position?: any;
  warning?: any;
  ClickContentCloseTab?: any;
}

/**
 * Компонент тултипа (Tooltip)
 * @example ./TooltipBase.example.md
 */
export class TooltipBase extends React.Component<ITooltipBase> {
  static defaultProps = {
    warning: "Информация не доступна",
    position: "bottom",
    isActive: false
  };

  shouldComponentUpdate(nextProps: any) {
    if (nextProps.isActive !== this.props.isActive) {
      return true;
    }
    return false;
  }

  render() {
    const { warning, position, isActive, children } = this.props;
    return (
      <Relative>
        {isActive && (
          <Wrapper position={position}>
            <OutsideTriangle position={position} />
            <InsideTriangle position={position} />
            <Warning>{warning}</Warning>
          </Wrapper>
        )}
        {children}
      </Relative>
    );
  }
}

export default TooltipBase;
