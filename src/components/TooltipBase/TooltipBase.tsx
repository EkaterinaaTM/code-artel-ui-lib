import * as React from "react";
import {
  Wrapper,
  OutsideTriangle,
  InsideTriangle,
  Warning
} from "./TooltipBaseStyled";

// const RelativeStyled = styled(Relative)`
//   width: 100%;
// `;

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
    console.log(warning, position, isActive, children);
    return (
      <div style={{ position: "relative" }}>
        {isActive && (
          <Wrapper position={position}>
            <OutsideTriangle position={position} />
            <InsideTriangle position={position} />
            <Warning>{warning}</Warning>
          </Wrapper>
        )}
        {children}
      </div>
    );
  }
}

export default TooltipBase;
